import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiDownload, 
  FiArrowDown, 
  FiEye, 
  FiPhone, 
  FiAward,
  FiCode,
  FiCheckCircle
} from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Cycle through titles smoothly every 2.4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Vibrant Colorful Ambient Background Orbs */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden flex items-center justify-center">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-indigo-500/20 blur-3xl dark:from-cyan-500/15 dark:via-blue-600/15 dark:to-indigo-600/15 animate-pulse-glow" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-violet-600/20 to-pink-500/20 blur-3xl dark:from-purple-600/15 dark:via-violet-700/15 dark:to-pink-600/15 animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/10 via-indigo-500/10 to-teal-400/10 blur-[100px] pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.25 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-950/40 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shadow-xs backdrop-blur-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Placement & Internship Opportunities</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
                Hello, I'm{' '}
                <span className="text-gradient-primary">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Animated Role */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-bold text-zinc-500 dark:text-zinc-400 mr-2">
                  CSE (AI & ML) &bull;
                </span>
                <div className="relative overflow-hidden inline-block h-8">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="block text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 whitespace-nowrap"
                    >
                      {personalInfo.roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Professional Career Objective */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Expected Graduation & Degree Highlight Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                <FiAward className="w-3.5 h-3.5 text-blue-500" />
                <span>B.Tech CSE (AI & ML)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                <FiCheckCircle className="w-3.5 h-3.5 text-purple-500" />
                <span>Expected Graduation: 2027</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <span>CGPA: 7.84 / 10</span>
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-indigo-500/25 active:scale-95"
              >
                <span>View Key Projects</span>
                <FiArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Prashanth_Thammali_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 border-indigo-200 dark:border-indigo-900/60 bg-white dark:bg-zinc-900 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-200 shadow-xs active:scale-95"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-200 active:scale-95"
              >
                <FiEye className="w-4 h-4 text-zinc-500" />
                <span>Preview Resume</span>
              </button>
            </div>

            {/* Social Links & Coding Platforms */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2 text-zinc-600 dark:text-zinc-400">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-xs transition-all hover:scale-105"
                title="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 shadow-xs transition-all hover:scale-105"
                title="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:text-amber-500 hover:border-amber-400 dark:hover:border-amber-500 shadow-xs transition-all hover:scale-105"
                title="LeetCode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.gfg}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks Profile"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:text-emerald-500 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-xs transition-all hover:scale-105"
                title="GeeksforGeeks"
              >
                <SiGeeksforgeeks className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                aria-label="Send Direct Email"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:text-rose-500 hover:border-rose-400 dark:hover:border-rose-500 shadow-xs transition-all hover:scale-105"
                title="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.phone}
                aria-label="Call or WhatsApp"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:text-teal-500 hover:border-teal-400 dark:hover:border-teal-500 shadow-xs transition-all hover:scale-105"
                title="+91 6301235420"
              >
                <FiPhone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Length Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              {/* Vibrant ambient glowing background halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-cyan-500 dark:via-indigo-500 dark:to-fuchsia-600 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500 animate-pulse-glow" />

              {/* Large Portrait Card Container */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full rounded-3xl overflow-hidden border-2 border-indigo-200/80 dark:border-indigo-500/40 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col"
              >
                {/* Profile Photo - Full Portrait Height */}
                <div className="relative w-full h-[360px] sm:h-[400px] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={profileImg}
                    alt="Prashanth Thammali - CSE (AI & ML)"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement.querySelector('.avatar-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Fallback container */}
                  <div
                    className="avatar-fallback hidden w-full h-full items-center justify-center flex-col bg-gradient-to-br from-indigo-900 to-purple-950 text-white p-6 text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-indigo-800/80 flex items-center justify-center text-4xl font-extrabold mb-3 border-2 border-indigo-400">
                      PT
                    </div>
                    <p className="font-bold text-xl">{personalInfo.name}</p>
                    <p className="text-sm text-indigo-300 mt-1">CSE (AI & ML) Undergraduate</p>
                  </div>

                  {/* Gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Floating Top Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-zinc-900/80 text-white backdrop-blur-md border border-white/20 shadow-md">
                      AI & ML Specialist
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500 text-white shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Class of 2027
                    </span>
                  </div>

                  {/* Floating Bio / Name on Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold drop-shadow-md">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-indigo-200 font-medium">
                      DRK Institute of Science & Technology
                    </p>
                  </div>
                </div>

                {/* Extended Profile Info Footer */}
                <div className="p-5 bg-white dark:bg-zinc-900 space-y-3.5">
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                      <p className="text-[10px] uppercase font-mono text-zinc-400">Graduation</p>
                      <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 text-gradient-primary">
                        Expected 2027
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
                      <p className="text-[10px] uppercase font-mono text-zinc-400">B.Tech CGPA</p>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        7.84 / 10.0
                      </p>
                    </div>
                  </div>

                  {/* Core Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['PyTorch', 'Hugging Face', 'Whisper', 'React.js', 'Node.js', 'MySQL'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium font-mono px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Fast Action Buttons in Profile Card */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsResumeModalOpen(true)}
                      className="flex-1 py-2 px-3 text-xs font-semibold rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <FiEye className="w-3.5 h-3.5" />
                      <span>View Resume</span>
                    </button>
                    <a
                      href={personalInfo.resumePath}
                      download="Prashanth_Thammali_Resume.pdf"
                      className="p-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all flex items-center justify-center"
                      title="Direct Download Resume"
                    >
                      <FiDownload className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl={personalInfo.resumePath}
      />
    </>
  );
}
