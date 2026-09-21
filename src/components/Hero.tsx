import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Play, Wand2 } from 'lucide-react';

export default function Hero({ onTryDashboard }: { onTryDashboard: () => void }) {
  const [promptInput, setPromptInput] = useState('Write a high-converting launch email for a design tool');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSimulatedAI = () => {
    setIsGenerating(true);
    setOutput('');
    setTimeout(() => {
      setOutput("Subject: Meet PixelCraft 2.0: Design at the speed of thought 🚀\n\nHey Alex,\n\nRemember spending hours tweaking micro-interactions? Those days are over. Today, we're launching PixelCraft 2.0 with instant neural layouts, zero-latency vector rendering, and 1-click design token sync.\n\nReady to supercharge your workflow?");
      setIsGenerating(false);
    }, 900);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Writing Suite 3.0
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          Draft viral copy, articles & code in <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">seconds</span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          GhostWrite AI adapts to your unique brand voice, crafts compelling narratives, and formats publishing-ready copy across 40+ languages.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onTryDashboard}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all group"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={handleSimulatedAI}
            className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Play className="w-4 h-4 text-indigo-500" />
            <span>Interactive Live Demo</span>
          </button>
        </div>

        {/* Live Interactive Widget inside Landing Page */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 text-left">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400">interactive_sandbox.ai</span>
            </div>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">GhostWrite Core v4</span>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="What do you want the AI to write?"
            />
            <button 
              onClick={handleSimulatedAI}
              disabled={isGenerating}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-medium flex items-center justify-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              {isGenerating ? 'Writing...' : 'Generate'}
            </button>
          </div>

          {output && (
            <div className="mt-4 p-4 rounded-xl bg-indigo-50/70 dark:bg-slate-950/80 border border-indigo-100 dark:border-indigo-950/50 text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed animate-fade-in">
              {output}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}