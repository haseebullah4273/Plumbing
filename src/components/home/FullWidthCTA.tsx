import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { PipeRoute } from '../animations/PipeAnimation';

interface FullWidthCTAProps {
  onOpenRequestModal: () => void;
}

export const FullWidthCTA: React.FC<FullWidthCTAProps> = ({ onOpenRequestModal }) => {
  return (
    <section className="bg-gradient-to-br from-[#071525] via-[#073B6B] to-[#0B172A] text-white py-20 relative overflow-hidden">
      {/* Decorative animated pipe graphic in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <PipeRoute className="absolute -top-12 left-0 w-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider border border-emerald-400/30"
        >
          <span>Available Right Now Across Karachi</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Get Your Home's Water & Plumbing Fixed Right.
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          From concealed wall leaks and PPR pipe fusion to water motor pumps and tank cleaning — get fast doorstep service across all areas of Karachi, supervised by Haider Ali.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 flex-wrap">
          <a
            href={businessConfig.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-base px-7 py-4 rounded-xl shadow-xl transition-all duration-200"
            id="fullwidth-cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WHATSAPP: {businessConfig.phone}</span>
          </a>

          <a
            href={businessConfig.rawEmergencyPhone}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base px-7 py-4 rounded-xl shadow-xl transition-all duration-200 text-center"
            id="fullwidth-cta-call-btn"
          >
            <Phone className="w-5 h-5 fill-current animate-pulse-subtle" />
            <span>CALL DIRECT: {businessConfig.phone}</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Clear Upfront Rates (PKR)
          </span>
          <span>•</span>
          <span>Police-Verified Technicians</span>
          <span>•</span>
          <span>Parda & Family Privacy Respected</span>
        </div>
      </div>
    </section>
  );
};

