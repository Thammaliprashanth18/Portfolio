import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiDownload, FiPhone } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm tracking-tight text-gradient-primary">
              {personalInfo.name}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">&bull;</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono font-semibold">
              CSE (AI & ML) &bull; Class of 2027
            </span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved &bull; Hyderabad, India.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 hover:border-purple-300 transition-all hover:scale-110"
            title="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 hover:border-blue-300 transition-all hover:scale-110"
            title="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-400 hover:border-amber-300 transition-all hover:scale-110"
            title="LeetCode"
          >
            <SiLeetcode className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.gfg}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GeeksforGeeks"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 hover:border-emerald-300 transition-all hover:scale-110"
            title="GeeksforGeeks"
          >
            <SiGeeksforgeeks className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-rose-500 dark:text-zinc-400 dark:hover:text-rose-400 hover:border-rose-300 transition-all hover:scale-110"
            title="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumePath}
            download="Prashanth_Thammali_Resume.pdf"
            aria-label="Download Resume"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 hover:border-indigo-300 transition-all hover:scale-110"
            title="Download Resume"
          >
            <FiDownload className="w-4 h-4" />
          </a>

          <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors shadow-2xs"
          >
            <span>Top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
