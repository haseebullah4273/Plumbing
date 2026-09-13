import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  AlertTriangle, 
  Droplets, 
  Flame, 
  Search, 
  ShieldCheck, 
  Wrench,
  Clock,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { PageRoute } from '../../types';
import { businessConfig } from '../../data/businessConfig';

interface ServicesInteractiveProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: (category?: string) => void;
}

export const ServicesInteractive: React.FC<ServicesInteractiveProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeService = servicesData[selectedIndex];

  const getServiceIcon = (iconName: string, size = 'w-5 h-5') => {
    switch (iconName) {
      case 'AlertTriangle': return <AlertTriangle className={`${size} text-amber-500`} />;
      case 'Droplets': return <Droplets className={`${size} text-sky-500`} />;
      case 'Flame': return <Flame className={`${size} text-orange-500`} />;
      case 'Search': return <Search className={`${size} text-emerald-500`} />;
      case 'ShieldCheck': return <ShieldCheck className={`${size} text-blue-500`} />;
      default: return <Wrench className={`${size} text-indigo-500`} />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-50 px-3 py-1 rounded-full">
              Interactive Diagnostic Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Featured Service Deep-Dive
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md mt-2 md:mt-0">
            Select any service below to view our diagnostic methodologies, warning signs, and turnaround windows.
          </p>
        </div>

        {/* Split screen desktop interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Vertical List of Services */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {servicesData.map((service, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-[#0D5EA8] text-[#073B6B] shadow-sm ring-1 ring-[#0D5EA8]'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
                      {getServiceIcon(service.iconName, 'w-5 h-5')}
                    </div>
                    <div>
                      <div className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                        <span>{service.title}</span>
                        {service.isEmergency && (
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                            24/7
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                      isSelected ? 'translate-x-1 text-[#0D5EA8]' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Animated Service Preview Panel */}
          <div className="lg:col-span-7 bg-[#071525] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[480px]">
            {/* Background Image with Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.22, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url(${activeService.image})` }}
              />
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-[#071525]/85 to-transparent pointer-events-none" />

            {/* Panel Content with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug + '-content'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                      {getServiceIcon(activeService.iconName, 'w-6 h-6')}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      {activeService.badge || 'Professional Service'}
                    </span>
                  </div>

                  <span className="text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Response: Under 45m
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeService.heroHeadline}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                    {activeService.fullDesc}
                  </p>
                </div>

                {/* Common Problems Checklist */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    Signs You Need Immediate Service:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {activeService.commonProblems.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                <span className="text-amber-400 font-bold block">✓ Upfront Pricing</span>
                <span>Written guarantee on all parts & labor</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/923122673667?text=Assalam-o-Alaikum%20TheHomist,%20I%20need%20inquiry%20for%20${encodeURIComponent(activeService.title)}%20in%20Karachi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <button
                  type="button"
                  onClick={() => navigate(`/services/${activeService.slug}` as PageRoute)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all cursor-pointer border border-white/20"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
