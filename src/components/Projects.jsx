import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTag, FiStar, FiCheckCircle } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI / ML', 'Full-Stack'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            <FiStar className="w-3.5 h-3.5 text-blue-500" />
            <span>Featured Engineering</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Key Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Intelligent applications combining artificial intelligence models, computer vision pipelines, and resilient full-stack architectures.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isFlagship = project.id === 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className={`group relative flex flex-col justify-between bg-white dark:bg-zinc-900/90 rounded-3xl border ${
                    isFlagship 
                      ? 'border-indigo-400/80 dark:border-indigo-500/60 ring-2 ring-indigo-500/20 shadow-lg' 
                      : 'border-zinc-200/90 dark:border-zinc-800 shadow-sm'
                  } p-6 sm:p-8 hover:shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300`}
                >
                  {/* Decorative background glow for flagship */}
                  {isFlagship && (
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-indigo-500/10 via-purple-500/10 to-transparent rounded-tr-3xl pointer-events-none" />
                  )}

                  <div>
                    {/* Top Bar: Category & Links */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 font-mono">
                          <FiTag className="w-3 h-3 text-indigo-500" />
                          {project.category}
                        </span>
                        {project.badge && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isFlagship
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xs'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                          }`}>
                            {project.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors"
                          title="GitHub Repository"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-gradient-primary transition-all mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Resume Highlights */}
                    {project.highlights && (
                      <div className="space-y-2 mb-6 bg-zinc-50 dark:bg-zinc-950/70 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80">
                        {project.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xs"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
