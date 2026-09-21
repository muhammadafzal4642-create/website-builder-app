import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Elena Rostova',
    role: 'VP of Growth at FinStack',
    quote: 'GhostWrite AI increased our content production velocity by 400% without compromising on tone. Our organic signups doubled in two months.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Marcus Vance',
    role: 'Founder, Apex Studio',
    quote: 'The live interactive editor and tone customization are unparalleled. It feels like collaborating with a seasoned senior copywriter.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Product Manager at CloudScale',
    quote: 'We replaced three different copywriting subscriptions with GhostWrite. The brand voice emulation saves hours of revision cycles.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Loved by 15,000+ creators and companies
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            See how world-class teams publish faster and scale organic revenue.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}