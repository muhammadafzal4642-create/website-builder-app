import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Starter',
      price: isAnnual ? 19 : 24,
      desc: 'Perfect for solo founders and freelancers.',
      features: ['50,000 AI words / month', '10 Brand voice profiles', 'Standard generation speed', 'Export to Markdown & HTML']
    },
    {
      name: 'Pro Team',
      price: isAnnual ? 49 : 59,
      popular: true,
      desc: 'For high-velocity marketing and product squads.',
      features: ['Unlimited AI words', 'Unlimited voice profiles', 'Priority GPU streaming', 'SEO keyword optimizer', 'Team collaboration (5 seats)', 'Webhook & CMS integrations']
    },
    {
      name: 'Enterprise',
      price: isAnnual ? 129 : 149,
      desc: 'Dedicated clusters and tailored model fine-tuning.',
      features: ['Dedicated enterprise cluster', 'Custom fine-tuned LLMs', 'SSO & SAML authentication', 'Dedicated account manager', '99.99% SLA guarantee']
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple, predictable pricing
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Start free. Upgrade as your content pipeline scales.
          </p>

          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${!isAnnual ? 'bg-white dark:bg-slate-800 shadow text-indigo-600 dark:text-white' : 'text-slate-500'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${isAnnual ? 'bg-white dark:bg-slate-800 shadow text-indigo-600 dark:text-white' : 'text-slate-500'}`}
            >
              <span>Annual</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-8 transition-all ${tier.popular ? 'border-2 border-indigo-500 bg-white dark:bg-slate-900 shadow-2xl shadow-indigo-500/10' : 'border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60'}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{tier.desc}</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">${tier.price}</span>
                <span className="text-sm font-medium text-slate-500">/ month</span>
              </div>

              <button className={`mt-8 w-full py-3 rounded-xl font-semibold text-sm transition-all ${tier.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'}`}>
                Choose {tier.name}
              </button>

              <div className="mt-8 space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                {tier.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}