import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { siteImages } from '../../data/images';
import { PageRoute } from '../../types';

interface HeroSectionProps {
  onOpenRequestModal: () => void;
  navigate: (route: PageRoute) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRequestModal,
  navigate,
}) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] bg-[#071525] text-white flex items-center overflow-hidden">
      {/* Cinematic Background Image with Zoom & Dark Gradient Overlay */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${siteImages.heroPlumber})` }}
      />

      {/* Atmospheric Overlays for optimal readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/90 to-[#071525]/50 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-transparent to-transparent z-0" />

      {/* Subtle decorative vector pipe line in background */}
      <div className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>LOCAL PLUMBING EXPERTS • {businessConfig.city.toUpperCase()} & SURROUNDING</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              Plumbing Problems?{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-sky-300">
                We'll Get Them Fixed Fast.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed"
            >
              Reliable plumbing repairs, installations, and 24/7 emergency service from experienced local professionals. Upfront flat-rate pricing, zero mess left behind, and rapid dispatch.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onOpenRequestModal}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D5EA8] hover:bg-[#094780] active:bg-[#073B6B] text-white font-extrabold text-base px-7 py-4 rounded-xl shadow-lg shadow-blue-900/40 hover:shadow-xl transition-all duration-200 cursor-pointer text-center group"
                id="hero-request-service-btn"
              >
                <Calendar className="w-5 h-5 text-sky-300" />
                <span>REQUEST SERVICE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href={businessConfig.rawPhone}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base px-7 py-4 rounded-xl shadow-lg transition-all duration-200 text-center"
                id="hero-call-btn"
              >
                <Phone className="w-5 h-5 fill-current animate-pulse-subtle" />
                <span>CALL NOW: {businessConfig.phone}</span>
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div>
                  <span className="font-bold text-white block">4.9 / 5 Stars</span>
                  <span className="text-slate-400 text-[11px]">280+ Local Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">24/7 Dispatch</span>
                  <span className="text-slate-400 text-[11px]">Under 45m Arrival</span>
                </div>
              </div>

              <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Licensed & Insured</span>
                  <span className="text-slate-400 text-[11px]">Bonded Master Plumbers</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Floating Emergency Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden"
            >
              {/* Glowing Corner Indicator */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Emergency Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                  </span>
                  <span className="font-extrabold text-xs tracking-wider uppercase text-amber-300">
                    NEED HELP NOW?
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
                  Live Dispatch
                </span>
              </div>

              {/* Emergency Card Body */}
              <div className="py-5 space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  24/7 Emergency Plumbing
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Active pipe burst, flooding toilet, or main drain backing up? Don't wait. Our rapid mobile response units are equipped to stop water loss immediately.
                </p>

                <div className="bg-[#071525]/70 rounded-xl p-3.5 border border-white/10 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Average Local Response:</span>
                    <span className="font-bold text-emerald-400">Fast Local Dispatch (25-45m)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Emergency Diagnostic:</span>
                    <span className="font-bold text-white">Upfront Flat-Rate</span>
                  </div>
                </div>
              </div>

              {/* Card Action Call Button */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={businessConfig.rawEmergencyPhone}
                  className="w-full flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black text-sm py-3.5 px-4 rounded-xl shadow-lg transition-all duration-200 text-center"
                  id="hero-card-emergency-call-btn"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL NOW: {businessConfig.emergencyPhone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => navigate('/services/emergency-plumbing')}
                  className="w-full text-center text-xs text-sky-300 hover:text-white font-semibold transition-colors py-1 cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>What to do before we arrive?</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
