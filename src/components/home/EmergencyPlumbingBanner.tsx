import React from 'react';
import { motion } from 'motion/react';
import { Phone, AlertTriangle, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { PipeRoute } from '../animations/PipeAnimation';
import { PageRoute } from '../../types';

interface EmergencyPlumbingBannerProps {
  navigate: (route: PageRoute) => void;
}

export const EmergencyPlumbingBanner: React.FC<EmergencyPlumbingBannerProps> = ({
  navigate,
}) => {
  return (
    <section className="bg-[#071525] text-white py-20 relative overflow-hidden border-y border-blue-900/40">
      {/* Pipe graphics in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <PipeRoute className="absolute -top-10 -left-40 scale-150" />
        <PipeRoute className="absolute -bottom-10 -right-40 scale-150 rotate-180" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Emergency Alert Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span>CRITICAL SITUATIONS • 24/7 RAPID DISPATCH</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Plumbing Emergency?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Don't Wait.
            </span>
          </motion.h2>

          {/* Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Leaks, burst pipes, clogged drains, and water heater failures can quickly turn into thousands of dollars in structural damage. Get professional help before a small problem becomes a major catastrophe.
          </motion.p>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="font-extrabold text-sm text-white">24/7 Availability</div>
              <p className="text-slate-400 text-xs mt-0.5">Nights, weekends & holidays</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-sky-400 mx-auto mb-2" />
              <div className="font-extrabold text-sm text-white">Fast Response</div>
              <p className="text-slate-400 text-xs mt-0.5">Under 45-minute average</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="font-extrabold text-sm text-white">Licensed Technicians</div>
              <p className="text-slate-400 text-xs mt-0.5">Fully equipped rolling trucks</p>
            </div>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 flex-wrap"
          >
            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base px-7 py-3.5 rounded-xl shadow-xl transition-all duration-200 text-center"
              id="emergency-banner-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>SEND WHATSAPP: {businessConfig.phone}</span>
            </a>

            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black text-base px-7 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-2xl transition-all duration-200 text-center"
              id="emergency-section-call-btn"
            >
              <Phone className="w-5 h-5 fill-current animate-pulse-subtle" />
              <span>CALL NOW: {businessConfig.emergencyPhone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
