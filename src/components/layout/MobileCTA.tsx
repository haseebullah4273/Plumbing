import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';

interface MobileCTAProps {
  onOpenRequestModal: () => void;
}

export const MobileCTA: React.FC<MobileCTAProps> = ({ onOpenRequestModal }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      id="mobile-bottom-cta-bar"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={businessConfig.rawEmergencyPhone}
          className="flex items-center justify-center gap-2 bg-amber-500 active:bg-amber-600 text-slate-950 font-bold py-3 px-3 rounded-xl shadow-md text-sm transition-all text-center tracking-wide"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 fill-current animate-pulse-subtle" />
          <span>CALL NOW</span>
        </a>

        {/* Request Service Button */}
        <button
          type="button"
          onClick={onOpenRequestModal}
          className="flex items-center justify-center gap-2 bg-[#0D5EA8] active:bg-[#073B6B] text-white font-bold py-3 px-3 rounded-xl shadow-md text-sm transition-all text-center cursor-pointer tracking-wide"
          id="mobile-sticky-request-btn"
        >
          <Calendar className="w-4 h-4" />
          <span>REQUEST SERVICE</span>
        </button>
      </div>
    </div>
  );
};
