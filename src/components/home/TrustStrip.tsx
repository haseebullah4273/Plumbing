import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  BadgeDollarSign, 
  Zap, 
  ThumbsUp 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Licensed Professionals',
      subtitle: 'Verified & Background-Checked',
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      subtitle: 'Always On-Call Nights & Weekends',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: BadgeDollarSign,
      title: 'Upfront Pricing',
      subtitle: 'Written Quotes Before We Begin',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Zap,
      title: 'Fast Response',
      subtitle: 'Under 45m Emergency Dispatch',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction Focused',
      subtitle: '100% Quality Workmanship Guarantee',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3.5 group"
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
