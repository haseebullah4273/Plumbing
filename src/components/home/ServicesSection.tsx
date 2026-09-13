import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Droplets, 
  Flame, 
  Search, 
  ShieldCheck, 
  Wrench, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { PageRoute } from '../../types';

interface ServicesSectionProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: (category?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-500" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-sky-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-500" />;
      case 'Search':
        return <Search className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-500" />;
      default:
        return <Wrench className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section className="py-20 bg-[#F7F9FC] relative overflow-hidden" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Specialized Plumbing Solutions in Pakistan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            PPR, PVC, GI & Sanitary Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Engineered for Pakistani bungalows, apartments, and commercial plazas. Upfront flat-rate pricing in PKR, genuine Master/Popular branded fittings, and 24/7 on-call dispatch.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Card Top visual image thumbnail with overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Badge if emergency or specialty */}
                {service.badge && (
                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-amber-400 border border-amber-400/30">
                    {service.badge}
                  </span>
                )}

                {/* Floating Icon */}
                <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-9 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0D5EA8] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                    {service.commonProblems.slice(0, 2).map((prob, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/services/${service.slug}` as PageRoute)}
                    className="text-xs sm:text-sm font-bold text-[#0D5EA8] group-hover:text-[#073B6B] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/923122673667?text=Assalam-o-Alaikum%20TheHomist,%20I%20need%20price%20quote%20for%20${encodeURIComponent(service.title)}%20in%20Karachi.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center gap-1"
                  >
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
