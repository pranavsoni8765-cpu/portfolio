import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData, personalInfo } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

export default function Education() {
  const edu = educationData;

  return (
    <AnimatedSection id="education" className="py-20 sm:py-28 relative bg-[#090C14]/40">
      {/* Background glow */}
      <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="EDUCATION"
          title="Academic"
          highlight="Foundation."
          subtitle="Formal university education complemented with continuous self-driven exploration of software engineering."
        />

        {/* Clean Timeline Presentation */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800">
            
            {/* Animated Timeline Node Point */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#080A10] border-2 border-cyan-400 text-cyan-400 shadow-md shadow-cyan-500/20"
            >
              <GraduationCap className="w-4 h-4" />
            </motion.div>

            {/* Timeline Card */}
            <motion.div 
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-black/20"
            >
              
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.duration}
                </span>

                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                  {edu.status}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {edu.degree}
              </h3>

              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4 flex-wrap">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{edu.college}</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-slate-400">{personalInfo.location}</span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="border-t border-slate-800/80 pt-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Key Academic Focus:
                </h4>
                <div className="space-y-2">
                  {edu.keyHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
