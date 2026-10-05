import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio.js';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPlaceholder = !personalInfo.resume || personalInfo.resume.startsWith('#');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="relative w-full max-w-lg rounded-2xl border border-slate-700/60 bg-[#0F131E] p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 z-10 animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-white">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              {personalInfo.name} • {personalInfo.role}
            </p>
          </div>
        </div>

        {isPlaceholder ? (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed mb-6 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-amber-300">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              Resume Placeholder Active
            </div>
            <p>
              Resume link is currently set to: <code className="px-1 py-0.5 rounded bg-slate-900 font-mono text-cyan-300 font-semibold">{personalInfo.resume}</code>
            </p>
            <p className="text-slate-300">
              To add your real resume, open <span className="font-mono text-cyan-300">src/data/portfolio.js</span> and update the <code className="text-white font-mono">resume</code> field with your Google Drive or cloud link, or drop your PDF into <span className="font-mono text-cyan-300">public/resume.pdf</span>.
            </p>
          </div>
        ) : (
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            You can download the latest resume PDF or open it in a new tab.
          </p>
        )}

        {/* Quick Guide */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Easy Setup Instructions:
          </div>
          <p className="pl-6">
            1. Put your PDF in <span className="font-mono text-slate-200">public/resume.pdf</span> and set <span className="font-mono text-slate-200">resume: "/resume.pdf"</span> in <span className="font-mono text-cyan-300">src/data/portfolio.js</span>.
          </p>
          <p className="pl-6">
            2. OR paste your public Google Drive / Dropbox link directly in <span className="font-mono text-cyan-300">src/data/portfolio.js</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {isPlaceholder ? (
            <button
              onClick={() => {
                alert("Please add your resume URL in src/data/portfolio.js under the 'resume' property.");
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Configure in portfolio.js
            </button>
          ) : (
            <a
              href={personalInfo.resume}
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </a>
          )}

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-800 font-medium text-sm transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
