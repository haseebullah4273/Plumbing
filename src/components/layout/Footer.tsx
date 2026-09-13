import React from 'react';
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2,
  AlertCircle,
  MessageCircle
} from 'lucide-react';
import { PageRoute } from '../../types';
import { businessConfig } from '../../data/businessConfig';
import { servicesData } from '../../data/services';
import { serviceAreasData } from '../../data/serviceAreas';

interface FooterProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenRequestModal }) => {
  return (
    <footer className="bg-[#071525] text-slate-300 border-t border-slate-800 pt-16 pb-24 lg:pb-12 text-sm">
      {/* Top Banner inside footer: Emergency Action Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#0B1E36] to-[#073B6B] border border-blue-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded-full text-xs uppercase tracking-wider mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              24/7 Emergency Dispatch
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Facing an active leak, flood, or sewage backup?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Don't wait for minor leaks to become structural disasters. Our emergency vans arrive on-scene in under 45 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full md:w-auto">
            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg transition-colors text-center text-sm"
              id="footer-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {businessConfig.phone}</span>
            </a>

            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg transition-colors text-center text-sm"
              id="footer-emergency-call-btn"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {businessConfig.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073B6B] to-[#0D5EA8] text-white flex items-center justify-center shadow-md">
                <Wrench className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  THEHOMIST
                </span>
                <p className="text-xs text-sky-400 font-semibold tracking-wide">
                  KARACHI PLUMBING SPECIALISTS
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to high-integrity residential plumbing, PPR heat fusion jointing, PVC drainage unchoking, water motor pump repairs, and underground tank waterproofing across Karachi. Supervised by Owner Haider Ali.
            </p>

            {/* Trust badges list */}
            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Supervised by Owner & Master Plumber Haider Ali</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{businessConfig.insuranceCoverage}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Karachi Doorstep Service Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-sky-400">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => navigate(`/services/${s.slug}` as PageRoute)}
                    className="hover:text-white hover:underline transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 mt-2 cursor-pointer"
                >
                  View All Services <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-sky-400">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceAreasData.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => navigate('/service-areas')}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                  >
                    <span className="truncate">{area.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">~{area.avgResponseMinutes}m</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('/service-areas')}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 mt-2 cursor-pointer"
                >
                  All Coverage Areas <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-sky-400">
              Contact & Dispatch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={businessConfig.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-emerald-400 transition-colors"
                  >
                    WhatsApp: {businessConfig.phone}
                  </a>
                  <div className="text-[11px] text-emerald-400">Instant Chat & Location Share</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">{businessConfig.phone}</div>
                  <div className="text-[11px] text-slate-400">Emergency: {businessConfig.emergencyPhone}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="break-all">{businessConfig.email}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {businessConfig.address}, {businessConfig.city}, {businessConfig.state} {businessConfig.zip}
                </span>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-300">
                  <div>Weekdays: {businessConfig.hours.weekday}</div>
                  <div>Emergency: 24/7/365 On-Call</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {businessConfig.businessName}. All rights reserved. Locally owned & operated.
          </p>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/about')} className="hover:text-slate-300 transition-colors">
              About
            </button>
            <span>•</span>
            <button onClick={() => navigate('/faq')} className="hover:text-slate-300 transition-colors">
              FAQ
            </button>
            <span>•</span>
            <button onClick={() => navigate('/reviews')} className="hover:text-slate-300 transition-colors">
              Reviews
            </button>
            <span>•</span>
            <button onClick={() => navigate('/contact')} className="hover:text-slate-300 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
