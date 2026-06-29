'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type ProjectShowcaseItem } from '@/data/projects';

type ProjectCarouselProps = {
  project: ProjectShowcaseItem;
};

export function ProjectCarousel({ project }: ProjectCarouselProps) {
  const screenshotCount = project.screenshots.length;
  const hasScreenshots = screenshotCount > 0;
  const hasMultipleSlides = project.screenshots.length > 1;
  const slides = hasMultipleSlides
    ? [project.screenshots[project.screenshots.length - 1], ...project.screenshots, project.screenshots[0]]
    : project.screenshots;

  const [activeSlideIndex, setActiveSlideIndex] = useState(hasMultipleSlides ? 1 : 0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [pointerOffset, setPointerOffset] = useState(0);
  const pointerActiveRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const pointerDeltaRef = useRef(0);
  const resumeTimeoutRef = useRef<number | null>(null);
  const normalizedScreenshotIndex = hasScreenshots
    ? hasMultipleSlides
      ? ((activeSlideIndex - 1 + screenshotCount) % screenshotCount + screenshotCount) % screenshotCount
      : Math.min(activeSlideIndex, screenshotCount - 1)
    : 0;
  const displayIndex = hasScreenshots ? normalizedScreenshotIndex + 1 : 0;
  const currentLabel = hasScreenshots ? project.screenshots[normalizedScreenshotIndex] : '';
  const trackTransform = `translate3d(-${activeSlideIndex * 100}%, 0, 0) translateX(${pointerOffset}px)`;


  useEffect(() => {
    if (!isAutoScrolling || screenshotCount < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((current) => (current >= slides.length - 1 ? current : current + 1));
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isAutoScrolling, screenshotCount]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };
  }, []);

  const handleManualNavigation = () => {
    setIsAutoScrolling(false);
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoScrolling(true);
      resumeTimeoutRef.current = null;
    }, 12000);
  };

  const previousSlide = (isManual = false) => {
    if (isManual) {
      handleManualNavigation();
    }

    if (!hasMultipleSlides) {
      return;
    }

    setActiveSlideIndex((current) => (current <= 0 ? current : current - 1));
  };

  const nextSlide = (isManual = false) => {
    if (isManual) {
      handleManualNavigation();
    }

    if (!hasMultipleSlides) {
      return;
    }

    setActiveSlideIndex((current) => (current >= slides.length - 1 ? current : current + 1));
  };

  const goToSlide = (index: number) => {
    handleManualNavigation();
    // +1 because slides array has a clone prepended at index 0
    setActiveSlideIndex(index + 1);
  };

  const handleTrackTransitionEnd = () => {
    if (!hasMultipleSlides) {
      return;
    }
    if (activeSlideIndex === 0) {
      setTransitionEnabled(false);
      setActiveSlideIndex(screenshotCount);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }

    if (activeSlideIndex === slides.length - 1) {
      setTransitionEnabled(false);
      setActiveSlideIndex(1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  const handleTrackTransitionStart = () => {
    // no-op
  };

  const handlePointerDown = (e: any) => {
    pointerActiveRef.current = true;
    pointerStartXRef.current = e.clientX ?? (e.touches?.[0]?.clientX ?? 0);
    pointerDeltaRef.current = 0;
    setPointerOffset(0);
    setTransitionEnabled(false);
    setIsAutoScrolling(false);
    try {
      e.currentTarget?.setPointerCapture?.(e.pointerId);
    } catch {}
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const handlePointerMove = (e: any) => {
    if (!pointerActiveRef.current) return;
    const clientX = e.clientX ?? (e.touches?.[0]?.clientX ?? 0);
    pointerDeltaRef.current = clientX - pointerStartXRef.current;
    setPointerOffset(pointerDeltaRef.current);
  };

  const handlePointerUp = (e: any) => {
    if (!pointerActiveRef.current) return;
    pointerActiveRef.current = false;
    const delta = pointerDeltaRef.current;
    setPointerOffset(0);
    setTransitionEnabled(true);
    const threshold = 60;
    if (delta > threshold) {
      previousSlide(true);
    } else if (delta < -threshold) {
      nextSlide(true);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoScrolling(true);
      resumeTimeoutRef.current = null;
    }, 3000);
    try {
      e.currentTarget?.releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-sans text-sm text-text-secondary">Screenshot collection</p>

      <div className="relative group">
        <div className="relative h-[220px] sm:h-[280px] md:h-[360px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center px-0 sm:px-2 md:px-8">
            <div className="absolute inset-0 rounded-2xl md:rounded-none overflow-hidden mx-0 sm:mx-2 md:mx-8 flex flex-col">
                <div
                  className="flex-1 relative bg-transparent w-full h-full overflow-hidden touch-pan-y select-none"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                <div
                  className="flex h-full w-full"
                  onTransitionStart={handleTrackTransitionStart}
                  onTransitionEnd={handleTrackTransitionEnd}
                  style={{
                    transform: trackTransform,
                    willChange: 'transform',
                    transitionProperty: transitionEnabled ? 'transform' : 'none',
                    transitionDuration: transitionEnabled ? '700ms' : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {hasScreenshots ? (
                    slides.map((label, index) => {
                      const isActive = index === activeSlideIndex;
                      const translate = pointerOffset * (isActive ? 0.35 : 0.08);
                      const scale = isActive ? 1.02 : 0.98;
                      return (
                        <div key={`${label ?? 'slide'}-${index}`} className="h-full w-full flex-shrink-0 bg-transparent">
                          <div
                            className="flex h-full w-full items-center justify-center"
                            style={{
                              transform: `translateX(${translate}px) scale(${scale})`,
                              transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)'
                            }}
                          >
                            {label && (label.endsWith('.png') || label.endsWith('.jpg')) ? (
                              <img
                                src={label.startsWith('/') ? label : `/screenshots/${project.id}/${label}`}
                                alt={`${project.name} — ${label.split('/').pop()?.replace(/^\d+-/, '').replace(/\.(png|jpg)$/, '') || 'Screenshot'}`}
                                className="h-full w-full object-contain pointer-events-none"
                                draggable={false}
                              />
                            ) : (
                              <p className="text-text-secondary">Screenshot</p>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-transparent">
                      <p className="text-text-secondary">No screenshots available</p>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 p-3 md:p-6 pointer-events-none">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-lg md:text-xl font-semibold ${['devplanner', 'workforcehub'].includes(project.id) ? 'text-zinc-900 drop-shadow-sm' : 'text-white drop-shadow-md'}`}>
                        {currentLabel
                          .split('/')
                          .pop()
                          ?.replace(/^\d+-/, '')
                          .replace(/\.(png|jpg)$/, '') || 'Screenshot'}
                      </h3>
                    </div>
                    <div className="rounded-full bg-black/40 backdrop-blur px-3 py-1 font-sans text-xs text-white/80">
                      {displayIndex} / {project.screenshots.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => previousSlide(true)}
            className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg shadow-black/5"
            aria-label="Previous screenshot"
            disabled={!hasMultipleSlides}
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={() => nextSlide(true)}
            className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg shadow-black/5"
            aria-label="Next screenshot"
            disabled={!hasMultipleSlides}
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      {hasMultipleSlides && (
        <div className="flex items-center justify-center gap-2 pt-1">
          {project.screenshots.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to screenshot ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: idx === normalizedScreenshotIndex ? '20px' : '7px',
                height: '7px',
                backgroundColor:
                  idx === normalizedScreenshotIndex
                    ? project.accent
                    : `${project.accent}40`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}