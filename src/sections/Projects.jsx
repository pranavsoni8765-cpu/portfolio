import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Bot, 
  FolderGit2, 
  ArrowUpRight,
  Terminal,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsList } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI Automation', 'Python Development', 'Web Development'];

  const filteredProjects = filter === 'All'
    ? projectsList
    : projectsList.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <AnimatedSection id="projects" className="py-20 sm:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute right-10 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PROJECTS"
          title="Practical Work &amp;"
          highlight="Code Implementations."
          subtitle="A collection of real-world automation workflows, Python applications, and developer tools built with clean architecture."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10 font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between overflow-hidden hover:border-cyan-500/40 hover:bg-slate-900/70 transition-colors duration-300 group shadow-lg shadow-black/20"
            >
              {/* Card Header & Visual Banner */}
              <div>
                <div className="relative h-44 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80 group-hover:border-slate-700/80 transition-colors">
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
                  
                  {/* Category badge & Status */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/80 text-cyan-300 border border-cyan-500/20 backdrop-blur-md">
                      <FolderGit2 className="w-3 h-3 text-cyan-400" />
                      {project.category}
                    </span>

                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700/60">
                      {project.status}
                    </span>
                  </div>

                  {/* Graphic center motif */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      {project.category.includes('Python') ? (
                        <Terminal className="w-5 h-5" />
                      ) : project.category.includes('AI') ? (
                        <Bot className="w-5 h-5" />
                      ) : (
                        <Code className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-200 font-semibold group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Project highlights */}
                  {project.highlights && (
                    <div className="mb-5 space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 group-hover:border-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Links */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 text-xs font-semibold transition-all border border-cyan-500/30"
                  >
                    <span>Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-[11px] font-mono text-slate-500 bg-slate-900/60 rounded-xl border border-slate-800">
                    <Clock className="w-3 h-3 text-slate-600" />
                    <span>Demo Coming Soon</span>
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project note for recruiters */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          Source code repositories and exploration projects are hosted on my{' '}
          <a
            href="https://github.com/pranavsoni8765-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
}
