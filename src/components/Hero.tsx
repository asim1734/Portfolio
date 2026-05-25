import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-6 pb-16 md:px-12 md:pt-8 lg:pt-10 lg:pb-24 scroll-mt-16 md:scroll-mt-20 mt-8 md:mt-10yesye">
      <div className="mx-auto w-full">
        <div className="w-full rounded-[2.2rem] border border-border bg-surface p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.24)] md:p-12">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-accent md:text-base">
            Full-Stack Developer | AI Agent Systems
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Asim Rupani
          </h1>

          <p className="mb-8 max-w-4xl text-lg leading-relaxed text-text-secondary md:text-xl">
            My goal is to build full-stack applications designed to solve practical, real-world problems.
             I care about clean architecture and good programming practices when building any project. 
             Outside of pure engineering, my focus is heavily on ensuring the final product provides immediate, obvious utility to the end user.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground">React</span>
            <span className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground">TypeScript</span>
            <span className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground">Next.js</span>
            <span className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground">Node.js</span>
            <span className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm text-foreground">AI Agents</span>
          </div>

          <div id="contact" className="flex flex-wrap gap-4 text-base md:text-lg scroll-mt-24 md:scroll-mt-28">
            <Link
              href="asim.rupani@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#efc4bf] bg-[#fff0ed] px-5 py-3 text-[#9a3412] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              Email
            </Link>
            <Link
              href="https://github.com/asim1734"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-[#f8fafc] px-5 py-3 text-[#0f172a] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1 .08 1.54 1.03 1.54 1.03.9 1.53 2.35 1.09 2.92.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.4-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .85-.27 2.77 1.03A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.5.33 1.92-1.3 2.76-1.03 2.76-1.03.56 1.37.21 2.39.1 2.64.65.7 1.03 1.6 1.03 2.7 0 3.85-2.35 4.7-4.6 4.95.36.31.69.93.69 1.88v2.79c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
              </svg>
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/asim-rupani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-5 py-3 text-[#1d4ed8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.03-.83-1.88-1.9-1.88s-1.9.85-1.9 1.88.83 1.88 1.88 1.88h.02c1.07 0 1.9-.85 1.9-1.88ZM20 13.41c0-3.17-1.69-4.65-3.96-4.65-1.82 0-2.64 1-3.1 1.71V8.5H9.56c.04 1.31 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.39 1.95-1.39 1.38 0 1.94 1.05 1.94 2.59V20H20v-6.59Z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
