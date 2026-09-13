import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Clock, 
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2
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
      {/* Cinematic Background Image with Pakistani Home & Plumbing with Gradient Overlay */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.38 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${siteImages.heroPlumber})` }}
      />

      {/* Atmospheric Overlays for optimal readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/92 to-[#071525]/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-transparent to-transparent z-0" />

      {/* Subtle decorative vector pipe light */}
      <div className="absolute -right-20 top-20 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider flex-wrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>KARACHI'S TRUSTED PLUMBING SERVICE • FAST DOORSTEP DISPATCH</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12]"
            >
              Expert Plumbing for Pakistani Homes.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300">
                PPR, PVC & GI Pipe Specialists.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed"
            >
              Fast doorstep response for residential villas, bungalows, and apartments. From concealed PPRC wall leak repair and sanitary fittings to heavy-duty GI water motor suction lines and PVC drainage unchoking.
            </motion.p>

            {/* Key Service Highlights Chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex flex-wrap gap-2 text-xs text-slate-200"
            >
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                PPR Fusion Welding
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                PVC Sewer Unchoking
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                GI Water Motor Line
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Water Tanki Cleaning
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              {/* WhatsApp CTA (Highest Priority for Pakistan) */}
              <a
                href={businessConfig.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 text-center cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WHATSAPP CHAT: {businessConfig.phone}</span>
              </a>

              {/* Direct Call CTA */}
              <a
                href={businessConfig.rawPhone}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 text-center"
                id="hero-call-btn"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>CALL NOW: {businessConfig.phone}</span>
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div>
                  <span className="font-bold text-white block">4.9 / 5 Stars</span>
                  <span className="text-slate-400 text-[11px]">340+ Verified Pakistani Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:border-l border-slate-800 sm:pl-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">25-45 Min Doorstep</span>
                  <span className="text-slate-400 text-[11px]">DHA, Bahria & Major Sectors</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:border-l border-slate-800 sm:pl-3">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Verified Plumbers</span>
                  <span className="text-slate-400 text-[11px]">Strict Household Privacy & Safety</span>
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
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Glowing Corner Indicator */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Emergency Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="font-extrabold text-xs tracking-wider uppercase text-emerald-300">
                    PLUMBER ON CALL
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                  All Major Cities
                </span>
              </div>

              {/* Emergency Card Body */}
              <div className="py-4 space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Immediate Leak or Motor Breakdown?
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Concealed wall leakage (seem), broken sanitary fittings, choked bathroom drain, or water motor not pumping to rooftop tank? Contact our duty plumber immediately.
                </p>

                <div className="bg-[#071525]/80 rounded-xl p-3.5 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Direct Contact:</span>
                    <span className="font-bold text-amber-300">{businessConfig.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Response Window:</span>
                    <span className="font-bold text-emerald-400">25 – 45 Minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pricing:</span>
                    <span className="font-bold text-white">Transparent PKR Inspection</span>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={businessConfig.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition-all text-center"
                  id="hero-card-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Photos on WhatsApp</span>
                </a>

                <a
                  href={businessConfig.rawEmergencyPhone}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black text-sm py-3 px-4 rounded-xl shadow-md transition-all text-center"
                  id="hero-card-emergency-call-btn"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Helpline: {businessConfig.emergencyPhone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => navigate('/services')}
                  className="w-full text-center text-xs text-sky-300 hover:text-white font-semibold transition-colors py-1 cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Explore All PPR, PVC & GI Services</span>
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
