import React, { useState } from 'react';
import { ArrowLeft, Send, Sparkles, Copy, FileText, Check, Plus, BarChart3, Clock } from 'lucide-react';

export default function Dashboard({ onBackToHome }: { onBackToHome: () => void }) {
  const [tone, setTone] = useState('Persuasive');
  const [prompt, setPrompt] = useState('Write an announcement post for our new real-time analytics engine');
  const [activeTab, setActiveTab] = useState<'editor' | 'analytics'>('editor');
  const [wordCount, setWordCount] = useState(124);
  const [copied, setCopied] = useState(false);
  const [editorContent, setEditorContent] = useState(
    "# Announcing QuantumAnalytics 3.0 ⚡\n\nWe are thrilled to unveil our biggest breakthrough yet: **sub-millisecond stream ingestion** for enterprise data lakes.\n\n### Why this matters for your engineering team\n1. **Zero ETL Bottlenecks**: Ingest 500k events/sec directly.\n2. **Predictive Anomaly Detection**: Uncover pipeline regressions before users notice.\n3. **Granular Cost Controls**: Real-time compute budgeting by tenant.\n\nReady to deploy? Request early access today!"
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(editorContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBackToHome}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Workspace Studio</h1>
            <p className="text-xs text-slate-500">Active project: Launch Campaign Copy</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'editor' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            Studio Editor
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            Performance Analytics
          </button>
        </div>
      </div>

      {activeTab === 'editor' ? (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Prompt Assistant */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-500 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI Generation Controls
              </h2>

              <div className="mt-4">
                <label className="text-xs font-medium text-slate-500">Selected Tone</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {['Persuasive', 'Technical', 'Conversational', 'Concise'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border text-left transition-all ${tone === t ? 'border-indigo-500 bg-indigo-500/10 text-indigo-500' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="text-xs font-medium text-slate-500">Directive Prompt</label>
                <textarea 
                  rows={4}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="mt-2 w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                />
              </div>
            </div>

            <button 
              onClick={() => {
                setEditorContent((prev) => prev + "\n\n- **Key Takeaway**: Scale without infrastructure overhead.");
                setWordCount((w) => w + 8);
              }}
              className="mt-6 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
            >
              <Send className="w-3.5 h-3.5" /> Continue Generation
            </button>
          </div>

          {/* Document Canvas */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>{wordCount} words</span>
                <span>•</span>
                <span>Reading time: ~1 min</span>
              </div>
              <button 
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <textarea 
              rows={14}
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
              className="mt-4 w-full flex-1 bg-transparent resize-none border-none outline-none font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-200"
            />
          </div>
        </div>
      ) : (
        /* Analytics View */
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Generated Words</span>
              <BarChart3 className="w-4 h-4 text-indigo-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">48,250</p>
            <span className="text-xs text-emerald-500 font-semibold">+18% this week</span>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Average Readability Score</span>
              <Check className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">92 / 100</p>
            <span className="text-xs text-indigo-500 font-semibold">Grade 8 readability</span>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Time Saved</span>
              <Clock className="w-4 h-4 text-purple-500" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">34.5 hrs</p>
            <span className="text-xs text-slate-400">Equivalent to 4.3 working days</span>
          </div>
        </div>
      )}
    </div>
  );
}