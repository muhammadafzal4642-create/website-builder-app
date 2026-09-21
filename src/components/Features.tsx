import React from 'react';
import { Zap, ShieldCheck, RefreshCw, Layers, Compass, Brain } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Brand Voice Emulation',
    description: 'Upload your style guides and existing blogs. Our model automatically clones tone, cadence, and vocabulary.'
  },
  {
    icon: Zap,
    title: 'Sub-second Streaming',
    description: 'Ultra-low latency generation engine outputs 120+ tokens per second directly into your editor.'
  },
  {
    icon: RefreshCw,
    title: 'Multi-Variant A/B Copy',
    description: 'Instantly generate 5 different headlines, hook openings, and CTA variations for conversion optimization.'
  },
  {
    icon: Layers,
    title: 'Integrated SEO Auditor',
    description: 'Calculates keyword density, reading difficulty, and search snippet optimization in real time.'
  },
  {
    icon: Compass,
    title: '40+ Languages Supported',
    description: 'Native localization that preserves idioms, emotional cues, and cultural context across global markets.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Data Isolation',
    description: 'Zero model retention. Your confidential customer data is never used to train foundational LLMs.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Engineered for high-output growth teams
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Everything you need to go from a blank cursor to publishing-grade content in minutes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}