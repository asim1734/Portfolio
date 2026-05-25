"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  prefix: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home", prefix: "01" },
  { label: "Chat", href: "#chat", prefix: "02" },
  { label: "Projects", href: "#projects", prefix: "03" },
  { label: "Skills", href: "#skills", prefix: "04" },
  { label: "Contact", href: "#contact", prefix: "05" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")).filter(Boolean),
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 210);

      const offset = 120;
      let currentHref = "#home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top;
        if (top - offset <= 0) {
          currentHref = `#${id}`;
        }
      }

      setActiveHref(currentHref);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    <header
      className={`fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled ? "mt-4" : "mt-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-6 border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "w-[92%] max-w-5xl rounded-full bg-white/72 p-3 shadow-lg shadow-black/5 backdrop-blur-md border-zinc-200/50"
            : "w-full max-w-7xl rounded-none bg-transparent p-6 border-transparent shadow-none backdrop-blur-0"
        }`}
        style={{
          transition: "width 900ms cubic-bezier(0.22, 1, 0.36, 1), max-width 900ms cubic-bezier(0.22, 1, 0.36, 1), padding 900ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 900ms cubic-bezier(0.22, 1, 0.36, 1), background-color 900ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 900ms cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 900ms cubic-bezier(0.22, 1, 0.36, 1), border-color 900ms cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      >
        <Link href="#home" className="flex min-w-0 items-center gap-3 whitespace-nowrap">
          <span className="flex flex-col leading-none text-zinc-950">
            <span className="text-sm font-semibold tracking-[0.28em] uppercase">Asim Rupani</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-3 rounded-full px-4 py-2 font-mono text-[13px] uppercase tracking-[0.22em] transition-all duration-300 ${
                  isActive
                    ? "text-zinc-950"
                    : isScrolled
                    ? "text-zinc-600 hover:text-zinc-900"
                    : "text-zinc-800/80 hover:text-zinc-950"
                }`}
              >
                <span className="text-[11px] tracking-[0.22em] text-zinc-500">{item.prefix}</span>
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-zinc-950 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                    }`}
                  />
                </span>
              </a>
            );
          })}
        </nav>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] transition-all ${
              isScrolled
                ? "border-zinc-300 bg-white/50 text-zinc-900"
                : "border-zinc-300/40 bg-white/10 text-zinc-950"
            }`}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>

          <div
            className={`absolute right-4 top-[calc(100%+0.75rem)] w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border shadow-xl transition-all duration-300 ${
              mobileOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-95 opacity-0"
            } ${
              isScrolled
                ? "border-zinc-200/70 bg-white/85 backdrop-blur-md"
                : "border-zinc-200/40 bg-white/90 backdrop-blur-md"
            }`}
          >
            <div className="p-3">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] transition-colors ${
                      isActive
                        ? "bg-zinc-950 text-white"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[11px] opacity-70">{item.prefix}</span>
                      {item.label}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-current opacity-30" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}