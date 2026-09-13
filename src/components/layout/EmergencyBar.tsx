import React from 'react';
import { Phone, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';

interface EmergencyBarProps {
  onOpenServiceModal?: () => void;
}

export const EmergencyBar: React.FC<EmergencyBarProps> = () => {
  return (
    <div className="bg-[#071525] text-white text-xs border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          {/* Left: Emergency Status & Guarantee */}
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full text-[11px] border border-amber-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              24/7 ON-CALL
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-200 font-medium text-[12px] sm:text-[13px]">
              Plumbing Emergency? Fast Response When You Need It Most
            </span>
            <span className="text-slate-400 text-[11px] hidden lg:inline">
              ({businessConfig.responseGuarantee})
            </span>
          </div>

          {/* Right: Quick Call CTA */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              {businessConfig.licenseNumber}
            </span>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded transition-colors duration-200 tracking-wide"
              id="emergency-bar-call-btn"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>Call Now: {businessConfig.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
