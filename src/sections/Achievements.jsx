import React from 'react';
import { Award, Trophy, BookOpen, Code2, Users, ArrowUpRight, Edit3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { achievementsList } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

const iconByCategory = {
  Certifications: Award,
  Hackathons: Trophy,
  Courses: BookOpen,
  'Coding Practice': Code2,
  Achievements: Sparkles,
  Projects: Sparkles
};

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-20 sm:py-28 relative bg-[#090C14]/40">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="LEARNING JOURNEY &amp; ACHIEVEMENTS"
          title="Milestones &amp;"
          highlight="Recognition."
          subtitle="Record of courses, coding practice, hackathons, and certifications completed along the engineering journey."
        />

        {/* Informative banner indicating placeholder readiness */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl border border-dashed border-cyan-500/30 bg-cyan-950/20 text-center text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
          <Edit3 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>
            These cards are ready to be customized in <code className="text-cyan-300 font-semibold">src/data/portfolio.js</code> (achievementsList) with your real credentials!
          </span>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item) => {
            const IconComp = iconByCategory[item.category] || Award;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group shadow-lg shadow-black/20"
              >
                <div>
                  {/* Category and Placeholder Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    {item.isPlaceholder && (
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
                        Editable
                      </span>
                    )}
                  </div>

                  {/* Title and Issuer */}
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="text-slate-300">{item.issuer}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link or Action */}
                <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    Badge: <span className="text-slate-300">{item.badge}</span>
                  </span>

                  {item.linkUrl && item.linkUrl !== '#' ? (
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      {item.linkText}
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
}
