import React from 'react';
import { Sparkles, BrainCircuit, Code, Workflow, Globe, Lightbulb, Wrench, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { currentFocusAreas } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

export default function CurrentFocus() {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Building':
        return 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30';
      case 'Practicing':
        return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30';
      case 'Learning':
        return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
      case 'Exploring':
        return 'text-violet-300 bg-violet-500/10 border-violet-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  const getIcon = (idx) => {
    const icons = [BrainCircuit, Sparkles, Workflow, Code, Globe, Wrench, Rocket];
    const IconComp = icons[idx % icons.length];
    return <IconComp className="w-5 h-5" />;
  };

  return (
    <AnimatedSection id="focus" className="py-20 sm:py-28 relative">
      {/* Background radial light */}
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ROADMAP &amp; MOMENTUM"
          title="What I'm Building &amp;"
          highlight="Learning."
          subtitle="Honest status of active learning paths and technical domains I am currently strengthening."
        />

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentFocusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div>
                {/* Header with Icon and Stage Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:scale-105 transition-transform">
                    {getIcon(idx)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span
                      className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                        area.status
                      )}`}
                    >
                      Stage: {area.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Specific Topic Chips */}
                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                    Active Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/70 border border-slate-800 text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Indicator Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1.5">
                  <span>Current Phase</span>
                  <span className="text-cyan-400 font-semibold">{area.status}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      area.status === 'Building'
                        ? 'w-4/5 bg-cyan-400'
                        : area.status === 'Practicing'
                        ? 'w-3/5 bg-emerald-400'
                        : area.status === 'Learning'
                        ? 'w-2/5 bg-indigo-400'
                        : 'w-1/4 bg-violet-400'
                    }`}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
