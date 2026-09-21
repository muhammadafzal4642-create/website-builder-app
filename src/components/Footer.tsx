import React from 'react';
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-sm text-slate-900 dark:text-white">GhostWrite AI</span>
          <span>© 2026 GhostWrite Inc. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-indigo-500 transition-colors">Security</a>
          <a href="#" className="hover:text-indigo-500 transition-colors">Documentation</a>
        </div>
      </div>
    </footer>
  );
}