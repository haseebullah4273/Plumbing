import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Droplets, 
  Flame, 
  Search, 
  ShieldCheck, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Filter,
  Sparkles
} from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { servicesData } from '../data/services';
import { businessConfig } from '../data/businessConfig';
import { PageRoute } from '../types';

interface ServicesPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: (category?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'emergency' | 'standard'>('all');

  const filteredServices = servicesData.filter((s) => {
    if (filterType === 'emergency') return s.isEmergency;
    if (filterType === 'standard') return !s.isEmergency;
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-amber-500" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-sky-500" />;
      case 'Flame': return <Flame className="w-6 h-6 text-orange-500" />;
      case 'Search': return <Search className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-500" />;
      default: return <Wrench className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'Services Overview' }]} navigate={navigate} />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
            Professional Plumbing Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Complete Plumbing Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional plumbing solutions for repairs, maintenance, emergencies, and installations across {businessConfig.city} and surrounding areas.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenRequestModal()}
              className="bg-[#0D5EA8] hover:bg-[#073B6B] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              Request an Estimate Online
            </button>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Emergency Hotline: {businessConfig.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Select a Plumbing Specialty
            </h2>
            <p className="text-xs text-slate-500">
              Showing {filteredServices.length} certified plumbing service categories
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filterType === 'all' ? 'bg-[#0D5EA8] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilterType('emergency')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filterType === 'emergency' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              🚨 24/7 Emergency
            </button>
            <button
              onClick={() => setFilterType('standard')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filterType === 'standard' ? 'bg-[#0D5EA8] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Scheduled & Repipes
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {service.badge && (
                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-amber-400 border border-amber-400/30">
                    {service.badge}
                  </span>
                )}

                <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
              </div>

              <div className="p-6 pt-9 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0D5EA8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Common Problems Solved:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.commonProblems.slice(0, 3).map((prob, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/services/${service.slug}` as PageRoute)}
                    className="text-xs font-bold text-[#0D5EA8] group-hover:text-[#073B6B] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Full Service Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenRequestModal(service.slug)}
                    className="text-xs font-bold bg-slate-100 hover:bg-[#0D5EA8] hover:text-white text-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
