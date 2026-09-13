import React from 'react';
import { Phone, ShieldCheck, MessageCircle } from 'lucide-react';
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
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full text-[11px] border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              KARACHI 24/7 ACTIVE
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-200 font-medium text-[12px] sm:text-[13px]">
              PPR, PVC & GI Specialists across all Karachi Areas
            </span>
            <span className="text-emerald-400 text-[11px] hidden lg:inline font-semibold">
              ({businessConfig.responseGuarantee})
            </span>
          </div>

          {/* Right: Quick Call & WhatsApp CTA */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs flex-wrap">
            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-2.5 py-1 rounded transition-colors duration-200"
              id="emergency-bar-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {businessConfig.phone}</span>
            </a>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded transition-colors duration-200 tracking-wide"
              id="emergency-bar-call-btn"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>Call: {businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
