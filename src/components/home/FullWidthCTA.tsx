import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
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
          className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider border border-sky-400/30"
        >
          <span>Ready to Help Today</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Let's Get Your Plumbing Back on Track.
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what's going on and we'll help you figure out the next step. From minor faucet drips to complete sewer replacements, we deliver honest answers and upfront quotes.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenRequestModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#073B6B] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-200 cursor-pointer"
            id="fullwidth-cta-request-btn"
          >
            <Calendar className="w-5 h-5 text-[#0D5EA8]" />
            <span>REQUEST SERVICE</span>
          </button>

          <a
            href={businessConfig.rawEmergencyPhone}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-200 text-center"
            id="fullwidth-cta-call-btn"
          >
            <Phone className="w-5 h-5 fill-current animate-pulse-subtle" />
            <span>CALL NOW: {businessConfig.phone}</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Upfront Pricing
          </span>
          <span>•</span>
          <span>Licensed & Insured ({businessConfig.licenseNumber})</span>
          <span>•</span>
          <span>24/7 Priority Emergency Support</span>
        </div>
      </div>
    </section>
  );
};
