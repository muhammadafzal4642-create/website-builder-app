import React from 'react';
import { Sparkles, Moon, Sun, ArrowRight, LayoutDashboard, Home } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, darkMode, setDarkMode }: any) {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 bg-white/75 dark:bg-slate-950/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('landing')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
            GhostWrite AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button onClick={() => setCurrentView('landing')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</button>
          <button onClick={() => setCurrentView('landing')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</button>
          <button onClick={() => setCurrentView('landing')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Testimonials</button>
          <button 
            onClick={() => setCurrentView(currentView === 'landing' ? 'dashboard' : 'landing')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 transition-all font-semibold"
          >
            {currentView === 'landing' ? (
              <>
                <LayoutDashboard className="w-4 h-4" /> Live App Demo
              </>
            ) : (
              <>
                <Home className="w-4 h-4" /> Back to Landing
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm shadow-md shadow-indigo-500/20 transition-all"
          >
            <span>Open Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}