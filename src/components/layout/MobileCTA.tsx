import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';

interface MobileCTAProps {
  onOpenRequestModal?: () => void;
}

export const MobileCTA: React.FC<MobileCTAProps> = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      id="mobile-bottom-cta-bar"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* WhatsApp Direct */}
        <a
          href={businessConfig.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl shadow-sm text-xs transition-all text-center tracking-tight"
          id="mobile-sticky-whatsapp-btn"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="text-xs font-bold leading-tight">WHATSAPP CHAT</span>
        </a>

        {/* Call Now Button */}
        <a
          href={businessConfig.rawEmergencyPhone}
          className="flex items-center justify-center gap-2 bg-amber-500 active:bg-amber-600 text-slate-950 font-bold py-2.5 px-3 rounded-xl shadow-sm text-xs transition-all text-center tracking-tight"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span className="text-xs font-bold leading-tight">CALL NOW</span>
        </a>
      </div>
    </div>
  );
};
