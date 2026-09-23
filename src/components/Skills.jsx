import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiC,
  SiMysql,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiPytorch,
  SiHuggingface,
  SiOpencv,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { TbSparkles } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { FaRobot, FaLanguage, FaCode, FaLayerGroup, FaBrain } from 'react-icons/fa';
import { skillsData } from '../data/portfolioData';

// Safe component mapping
const iconComponents = {
  SiPython,
  SiJavascript,
  SiC,
  SiMysql,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiPytorch,
  SiHuggingface,
  SiOpencv,
  SiGit,
  SiGithub,
  VscCode,
  TbSparkles,
  FaRobot,
  FaLanguage,
  FaCode,
  FaLayerGroup,
  FaBrain,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.categories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillsData.categories
      : skillsData.categories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/40 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            <FaCode className="w-3.5 h-3.5 text-purple-500" />
            <span>Technical Competencies</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Structured skill breakdown across deep learning, multimodal AI, full-stack development, and core computer science.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: catIdx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Colorful Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = iconComponents[skill.icon] || FaCode;
                    return (
                      <div
                        key={skill.name}
                        className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-2xs hover:shadow-sm transition-all hover:scale-105"
                      >
                        <span style={{ color: skill.color }}>
                          <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-400 dark:text-zinc-500">Curriculum & Industry</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Skillset
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
