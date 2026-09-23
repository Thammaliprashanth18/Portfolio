import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiTarget, FiCode, FiExternalLink } from 'react-icons/fi';
import { achievementsData, codingPlatforms } from '../data/portfolioData';

const categoryIcons = {
  Hackathons: FiAward,
  'Technical Competencies': FiCode,
  'Technical Competitions': FiTarget,
  'Academic Achievements': FiTrendingUp,
  'Project Achievements': FiCode,
};

const categoryColors = {
  Hackathons: 'from-amber-500 to-orange-500',
  'Technical Competencies': 'from-blue-600 to-indigo-600',
  'Technical Competitions': 'from-cyan-500 to-blue-500',
  'Academic Achievements': 'from-emerald-500 to-teal-500',
  'Project Achievements': 'from-purple-500 to-pink-500',
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/40 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            <FiAward className="w-3.5 h-3.5 text-amber-500" />
            <span>Recognitions & Milestones</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Honors & Achievements
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Notable milestones across competitive coding, hackathons, and sustained academic distinction.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => {
            const Icon = categoryIcons[item.category] || FiAward;
            const gradient = categoryColors[item.category] || 'from-indigo-500 to-purple-600';

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-bold px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
                      <span>{item.category}</span>
                    </span>
                    <span className="text-xs font-mono font-semibold text-zinc-400 dark:text-zinc-500">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
                    {item.organization}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mt-5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Distinction Verified</span>
                  <span className="text-emerald-500 font-semibold">Official Record</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
