import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, SearchCheck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC<{ onOpenRequestModal: () => void }> = ({ onOpenRequestModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Call or Request Service',
      desc: 'Reach our live dispatch 24/7 by phone or submit our online request form in under 60 seconds.',
      icon: PhoneCall,
      highlight: 'Live Agent 24/7',
    },
    {
      step: '02',
      title: 'We Diagnose the Problem',
      desc: 'Our certified plumber arrives on time, performs thorough diagnostics, and presents a clear, flat-rate quote.',
      icon: SearchCheck,
      highlight: 'No Surprise Overtime',
    },
    {
      step: '03',
      title: 'We Fix It Right',
      desc: 'With your approval, we complete code-compliant repairs with premium parts and leave your home spotless.',
      icon: CheckCircle2,
      highlight: '100% Written Guarantee',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-50 px-3 py-1 rounded-full">
            Transparent Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Plumbing repairs should be stress-free. Here is our straightforward 3-step process.
          </p>
        </div>

        {/* 3 Steps with Progressive Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-blue-200 via-sky-400 to-emerald-300 -translate-y-6 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-slate-200 tracking-tighter">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D5EA8] flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span className="bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      ✓ {item.highlight}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenRequestModal}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D5EA8] hover:text-[#073B6B] transition-colors cursor-pointer"
          >
            <span>Have a question before scheduling? Request a fast callback</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
