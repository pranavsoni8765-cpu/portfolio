import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080D] relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand and Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="text-lg font-bold text-white tracking-tight hover:text-cyan-400 transition-colors"
            >
              {personalInfo.name}
            </a>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm">
              {personalInfo.role}
            </p>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
              {personalInfo.college}
            </p>
          </div>

          {/* Center Social & Contact Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.emailMailto}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.phoneTel}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
              aria-label="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-all active:translate-y-0.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Crafted with React, Tailwind CSS &amp; Clean Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
