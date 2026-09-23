import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <FiBookOpen className="w-3.5 h-3.5 text-emerald-500" />
            <span>Academic Qualifications</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Formal engineering education, mathematical foundation, and academic milestones from school through B.Tech (2027).
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-36 space-y-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pl-6 sm:pl-8"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-indigo-600 dark:border-indigo-400 shadow-md" />

              {/* Time Period Tag on Left for Desktop */}
              <div className="sm:absolute sm:-left-40 sm:top-1 text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400 mb-1 sm:mb-0 sm:text-right sm:w-32">
                {item.startYear} &ndash; {item.endYear}
              </div>

              {/* Card */}
              <div className="bg-zinc-50/70 dark:bg-zinc-900/90 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-gradient-primary">
                      {item.branch}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-2xs">
                    <FiAward className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Score: {item.cgpa}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">
                    {item.institution}
                  </span>
                  <span>&bull;</span>
                  <span>{item.location}</span>
                  <span>&bull;</span>
                  <span className="px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="space-y-2 border-t border-zinc-200/60 dark:border-zinc-800 pt-3">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
