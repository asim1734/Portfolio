'use client';

import { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-full max-h-[90vh] bg-surface rounded-3xl md:rounded-[2rem] border border-border shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-strong/30">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f4f1] text-[#0f766e]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">Asim Rupani - Resume</h3>
              <p className="text-xs text-text-secondary">PDF Document</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Asim_Rupani_Resume.pdf"
              className="hidden sm:flex items-center gap-2 rounded-full bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f766e]/90"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-900"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body (PDF Viewer) */}
        <div className="flex-1 bg-zinc-100/50 p-2 md:p-4 overflow-hidden relative flex flex-col">
          {/* Mobile Download Fallback (visible if iframe fails or is blocked on mobile) */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
             <div className="text-center p-6">
                <FileText className="h-12 w-12 text-zinc-300 mx-auto mb-3" />
                <p className="text-zinc-500 mb-4">If the PDF doesn't load automatically,</p>
                <a
                  href="/resume.pdf"
                  download="Asim_Rupani_Resume.pdf"
                  className="inline-flex pointer-events-auto items-center gap-2 rounded-full bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f766e]/90 shadow-md"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
             </div>
          </div>
          
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full h-full rounded-xl border border-border/50 shadow-sm bg-white"
            title="Resume PDF"
          />
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
