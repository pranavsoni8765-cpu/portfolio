import React from 'react';
import { ArrowRight, Download, Github, Terminal, Sparkles, MapPin, Code2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolio.js';
import HeroVisual from '../components/HeroVisual';

export default function Hero({ onOpenResume }) {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />
      
      {/* Subtle ambient gradient sphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status / Role Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm shadow-cyan-950/40">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{personalInfo.heroBadge}</span>
              </div>
            </motion.div>

            {/* Sub-label with Name */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-cyan-400 font-semibold">
                Hi, I'm {personalInfo.name}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-6"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Intelligent Ideas
              </span>{' '}
              Into Real-World Solutions.
            </motion.h1>

            {/* Short Professional Intro */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal"
            >
              {personalInfo.shortIntro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary: View My Work */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>

              {/* Tertiary: GitHub Link */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-800/60 text-slate-400 hover:text-slate-100 text-sm font-medium transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </motion.div>

            {/* Mini credentials footer */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Python &amp; ML Student</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>AI Automation Workflows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.city}</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
