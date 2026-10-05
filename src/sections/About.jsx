import React from 'react';
import { 
  GraduationCap, 
  Target, 
  MapPin, 
  BrainCircuit, 
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      label: "Education",
      title: "B.Tech Student",
      desc: personalInfo.college,
      color: "cyan"
    },
    {
      icon: Target,
      label: "Current Focus",
      title: "AI & Automation",
      desc: "Python, ML models, and workflow automations",
      color: "indigo"
    },
    {
      icon: MapPin,
      label: "Location",
      title: "Vidisha, Bhopal",
      desc: personalInfo.location,
      color: "emerald"
    },
    {
      icon: BrainCircuit,
      label: "Mindset",
      title: "Problem Solving",
      desc: "Turning theoretical logic into practical utilities",
      color: "violet"
    }
  ];

  return (
    <AnimatedSection id="about" className="py-20 sm:py-28 relative">
      {/* Background glow & subtle floating decorative element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-10 top-1/4 w-3 h-3 rounded-full bg-cyan-400/30 blur-[1px] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT ME"
          title="Curious Student."
          highlight="Practical Builder."
          subtitle="Combining computer science fundamentals with modern AI tooling to build clean, functional software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mt-8">
          
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.name} • {personalInfo.role}</span>
            </div>

            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Recruiter-focused summary highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Artificial Intelligence & ML Fundamentals",
                "Python Scripting & Logic Architecture",
                "API Integrations & Workflow Automation",
                "Hands-on Project Problem Solving"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-200 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all duration-300 group shadow-lg shadow-black/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      {card.label}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
