import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap,
  Terminal,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProject } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('architecture');

  const codeSample = `# Sample automation webhook handler
import json
from google import genai

client = genai.Client()

def handle_support_ticket(ticket_payload):
    user_query = ticket_payload.get("message")
    user_context = ticket_payload.get("user_history", "Standard Account")
    
    prompt = f"""
    Context: {user_context}
    Inquiry: {user_query}
    Evaluate sentiment, determine category, and draft solution.
    """
    
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    return {"status": "resolved", "answer": response.text}`;

  return (
    <AnimatedSection id="showcase" className="py-20 sm:py-28 relative">
      {/* Subtle ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FEATURED SHOWCASE"
          title="Flagship"
          highlight="Engineering Project."
          subtitle="An in-depth look at architecture, problem-solving, and implementation for an automated AI pipeline."
        />

        {/* Big Showcase Card */}
        <div className="rounded-3xl border border-slate-800 bg-[#0c101c]/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-800/80 bg-gradient-to-r from-slate-900/60 via-cyan-950/20 to-slate-900/60">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  {featuredProject.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all border border-slate-700 hover:border-slate-600 shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                {featuredProject.liveDemoUrl ? (
                  <a
                    href={featuredProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>Live Showcase</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    <span>Live Demo — Coming Soon</span>
                  </span>
                )}
              </div>
            </div>

            {/* Technologies Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 mr-2">Built With:</span>
              {featuredProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-700/60 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card Middle: Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 border-b border-slate-800/80 bg-slate-950/40">
            {/* The Challenge / Problem */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem &amp; Pain Point</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredProject.solution}
              </p>
            </div>
          </div>

          {/* Interactive Pipeline / Code Preview */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Tab switchers */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Workflow Architecture
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === 'code'
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Logic Sample (Python)
                </button>
              </div>

              <div className="text-xs font-mono text-slate-500">
                End-to-End Orchestration
              </div>
            </div>

            {activeTab === 'architecture' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredProject.architectureSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between hover:border-cyan-500/40 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                          {step.step}
                        </span>
                        <Zap className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">
                        {step.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                      Step {idx + 1} of 4
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-[#080B12] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 text-slate-300">pipeline_handler.py</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Python 3</span>
                </div>
                <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-cyan-200 overflow-x-auto leading-relaxed">
                  <code>{codeSample}</code>
                </pre>
              </div>
            )}

            {/* Key Features List */}
            <div className="mt-8 pt-8 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Core Architectural Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
