import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Validate form fields
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // ===================================================================
    // PLACEHOLDER FOR FORMSPREE / EMAILJS INTEGRATION:
    // Replace this simulated block with your real endpoint when ready:
    //
    // Example with Formspree:
    // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData)
    // });
    // ===================================================================
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'info',
        title: 'Form Validated Successfully!',
        text: 'Backend email service is not connected yet. Please contact directly via email at pranavsoni8765@gmail.com or phone at 9399117785.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatusMessage(null), 10000);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <AnimatedSection id="contact" className="py-20 sm:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-500/5 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build"
          highlight="Something Useful."
          subtitle="Interested in collaborating with an enthusiastic AI/ML student or discussing an automation project? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mt-10">
          
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Channels &amp; Availability
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an internship opportunity, a project collaboration, or want to discuss Python, machine learning, and automation pipelines, my inbox is always open.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Mail className="w-4 h-4" />
                    <span>Direct Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={personalInfo.socialLinks.emailMailto}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Direct Phone / Contact No Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Phone className="w-4 h-4" />
                    <span>Contact Number</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={personalInfo.socialLinks.phoneTel}
                  className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors block font-mono"
                >
                  +91 {personalInfo.phone}
                </a>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Code</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300">GitHub</span>
                  </div>
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Network</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300">LinkedIn</span>
                  </div>
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 p-3 rounded-xl bg-slate-900/30 border border-slate-800/60">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Note about backend integration */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-3">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                To connect live form submissions, replace the handler in <code className="text-slate-300">src/sections/Contact.jsx</code> with your free <strong>Formspree</strong> or <strong>EmailJS</strong> endpoint.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-[#0c101c]/90 backdrop-blur-xl shadow-2xl shadow-black/40">
              
              <h4 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below and I'll get back to you as soon as possible.
              </p>

              {statusMessage && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{statusMessage.title}</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {statusMessage.text}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Taylor"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                        errors.name ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                        errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, project, or what you would like to build..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border ${
                      errors.message ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-cyan-500'
                    } text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating &amp; Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
