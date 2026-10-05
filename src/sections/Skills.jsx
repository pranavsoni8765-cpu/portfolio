import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Cpu, 
  Sparkles, 
  BarChart3, 
  Wand2, 
  Bot, 
  Network, 
  Workflow, 
  Share2, 
  Layers, 
  FileText, 
  Component, 
  GitBranch, 
  Github,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

// Icon map helper
const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Cpu,
  Sparkles,
  BarChart3,
  Wand2,
  Bot,
  Network,
  Workflow,
  Share2,
  Layers,
  FileText,
  Component,
  GitBranch,
  Github
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = skillsData.categories;
  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  // Status color badges
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'building':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'practicing':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'learning':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      case 'exploring':
        return 'bg-violet-500/10 text-violet-300 border-violet-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <AnimatedSection id="skills" className="py-20 sm:py-28 relative bg-[#090C14]/50">
      {/* Subtle ambient light */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNICAL SKILLS"
          title="Technologies I Learn &amp;"
          highlight="Build With."
          subtitle="Honest and transparent breakdown of programming languages, machine learning concepts, and automation tools I actively practice."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10 font-semibold'
                : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60'
            }`}
          >
            All Categories
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10 font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/20"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="group p-3.5 rounded-xl border border-slate-800/90 bg-slate-950/50 hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(
                              skill.status
                            )}`}
                          >
                            {skill.status}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {skill.note}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom transparency notice */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Stages: Practicing • Building • Learning • Exploring</span>
                <span className="text-slate-400">Continuous Growth</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
