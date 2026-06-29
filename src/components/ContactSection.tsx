'use client';

import React, { useState } from 'react';
import { Mail, Phone, GraduationCap, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { ResumeModal } from './ResumeModal';

export function ContactSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      // Fallback to mock submission if environment key is missing
      console.warn('NEXT_PUBLIC_WEB3FORMS_KEY is missing. Simulating submission.');
      setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
          from_name: 'Asim Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Failed to send message. Please check your internet connection.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="px-6 py-10 md:px-12 md:py-12 scroll-mt-24 md:scroll-mt-28">
      <div className="w-full rounded-[2rem] border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-strong/70 p-6 shadow-[0_22px_60px_-40px_rgba(15,118,110,0.25)] md:p-8">
        <div className="mb-10 w-full max-w-4xl">
          <p className="font-mono text-sm text-accent">Contact Info</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Let's Connect & Collaborate</h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            I am actively seeking full-stack engineering roles and opportunities where I can write clean, scalable code. 
            If you're a recruiter, engineer, or manager looking to expand your team—let's connect and discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact Details */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-strong/50 p-4 transition-all duration-300 hover:border-accent hover:bg-accent-soft/10 hover:scale-[1.01]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Email me</p>
                  <p className="mt-1 text-sm font-semibold text-foreground truncate">{contactInfo.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-strong/50 p-4 transition-all duration-300 hover:border-accent hover:bg-accent-soft/10 hover:scale-[1.01]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Call or WhatsApp</p>
                  <p className="mt-1 text-sm font-semibold text-foreground truncate">{contactInfo.phone}</p>
                </div>
              </a>

              {/* University */}
              <div className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-strong/50 p-4 transition-all duration-300 hover:border-accent/40 cursor-default">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">Education</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {contactInfo.education.college} <span className="text-xs text-text-secondary font-normal">(CGPA: {contactInfo.education.cgpa})</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2.5 rounded-full border border-[#0f766e]/30 bg-[#e6f4f1] px-5 py-3 font-mono text-xs uppercase tracking-wider text-[#0f766e] transition-all duration-300 hover:bg-[#e6f4f1]/80 hover:-translate-y-0.5 font-bold cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                View Resume
              </button>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-border bg-surface-strong px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:bg-accent-soft/10 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.639.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .85-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-border bg-surface-strong px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:bg-accent-soft/10 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-sm">
            {status === 'success' ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center animate-fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-sm text-text-secondary max-w-xs">
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    disabled={status === 'submitting'}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-2xl border border-border bg-surface-strong/30 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-surface focus:ring-1 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    disabled={status === 'submitting'}
                    placeholder="name@example.com"
                    className="mt-2 w-full rounded-2xl border border-border bg-surface-strong/30 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-surface focus:ring-1 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-text-secondary">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    disabled={status === 'submitting'}
                    placeholder="Write your message here..."
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-surface-strong/30 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-surface focus:ring-1 focus:ring-accent/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-sm uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-accent/90 hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
