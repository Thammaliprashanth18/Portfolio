import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCpu, 
  FiLayers, 
  FiBarChart2, 
  FiPieChart, 
  FiCheckCircle, 
  FiActivity,
  FiZap,
  FiCode,
  FiExternalLink,
  FiAward,
  FiFileText,
  FiDownload
} from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { aboutData, codingPlatforms, personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

const iconMap = {
  FaBrain: FiCpu,
  FaRobot: FiActivity,
  FaMicrochip: FiZap,
  FaLayerGroup: FiLayers,
  FaCode: FiCode,
  FaChartLine: FiPieChart,
};

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              <FiAward className="w-3.5 h-3.5" />
              <span>Comprehensive Profile & Background</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              {aboutData.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium">
              {aboutData.subtitle}
            </p>
          </motion.div>

          {/* Extended Profile Narrative & Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Left 7 Cols: Detailed Story & Career Objective */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Highlighted Objective Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-white dark:from-indigo-950/40 dark:via-blue-950/20 dark:to-zinc-900 border border-indigo-200/80 dark:border-indigo-800/60 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-3xl pointer-events-none" />
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400 block mb-2">
                  Official Career Objective
                </span>
                <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium italic">
                  "{aboutData.objective}"
                </p>
              </div>

              {/* In-depth background paragraphs */}
              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {aboutData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Strengths & Passions List */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Key Strengths & Personal Attributes</span>
                </h4>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {aboutData.strengths.map((str, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shrink-0 mt-2" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right 5 Cols: Quick Highlights & Coding Profiles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Quick Metrics Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <h3 className="text-sm font-bold tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                    Academic & Technical Milestones
                  </h3>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                    Verified
                  </span>
                </div>

                <div className="space-y-3.5">
                  {aboutData.quickStats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-zinc-50 dark:border-zinc-800/50 last:border-none">
                      <span className="text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100 font-mono text-right">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Actions inside metrics */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(true)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xs"
                  >
                    <FiFileText className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>
                  <a
                    href={personalInfo.resumePath}
                    download="Prashanth_Thammali_Resume.pdf"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-zinc-700 dark:text-zinc-300"
                  >
                    <FiDownload className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Competitive Programming & Coding Profiles */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-zinc-900 dark:text-zinc-100">
                    Coding Profiles & DSA
                  </h4>
                  <span className="text-[10px] font-mono text-indigo-500 dark:text-indigo-400">
                    Active Practice
                  </span>
                </div>

                <div className="space-y-3">
                  {codingPlatforms.map((cp) => (
                    <a
                      key={cp.platform}
                      href={cp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-600 bg-zinc-50/50 dark:bg-zinc-950/50 transition-all hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-lg">
                          {cp.platform === 'LeetCode' ? (
                            <SiLeetcode className="text-amber-500" />
                          ) : (
                            <SiGeeksforgeeks className="text-emerald-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {cp.platform}
                          </p>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                            {cp.handle}
                          </p>
                        </div>
                      </div>
                      <FiExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 6 Core Technical Domains Cards with Vibrant Gradients */}
          <div>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                Domain Specialization
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Core Technical Pillars
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-xl mx-auto">
                Key software disciplines where I design scalable architectures and apply intelligent algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData.coreInterests.map((interest, idx) => {
                const IconComponent = iconMap[interest.icon] || FiCpu;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ y: -5 }}
                    className="group relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${interest.gradient} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={personalInfo.resumePath}
      />
    </>
  );
}
