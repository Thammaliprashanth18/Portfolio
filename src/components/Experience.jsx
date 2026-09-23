import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCompass, FiGitPullRequest, FiCheck, FiArrowRight } from 'react-icons/fi';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            <FiBriefcase className="w-3.5 h-3.5 text-indigo-500" />
            <span>Practical Engineering</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Experience & Activities
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Applying computer science theory to production-grade implementations, active development, and open-source contributions.
          </p>
        </motion.div>

        {/* Recruiter Focus Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-12 bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30 rounded-3xl p-6 sm:p-8 border border-indigo-200/80 dark:border-indigo-800/60 shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <FiCompass className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block text-[11px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  Active Career Phase
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {experienceData.statusBanner}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                  {experienceData.statusSubtext}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md active:scale-95"
              >
                <span>Hire / Connect</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className="space-y-6">
          {experienceData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-zinc-50/70 dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800">
                    <FiBriefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.title}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {exp.role} &bull; <span className="text-indigo-600 dark:text-indigo-400 font-bold">{exp.type}</span>
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-2xs">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2 border-t border-zinc-200/60 dark:border-zinc-800 pt-3">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <FiCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
