import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ResumeModal from './components/ResumeModal';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import ProjectShowcase from './sections/ProjectShowcase';
import Projects from './sections/Projects';
import Education from './sections/Education';
import CurrentFocus from './sections/CurrentFocus';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080A10] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Scroll Progress Indicator at Top */}
      <ScrollProgress />

      {/* Desktop-only Custom Cursor & Ambient Glow */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Sections with Scroll Animations */}
      <main id="main-content" tabIndex="-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <ProjectShowcase />
        <Projects />
        <Education />
        <CurrentFocus />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
