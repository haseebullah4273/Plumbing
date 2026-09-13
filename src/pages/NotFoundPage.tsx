import React from 'react';
import { Home, Phone, Calendar, ArrowLeft } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { PageRoute } from '../types';

interface NotFoundPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  return (
    <div className="bg-[#071525] min-h-[80vh] text-white flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-6">
        {/* Leaking Pipe Illustration */}
        <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-sky-400">
            {/* Pipe elbow graphic */}
            <path
              d="M 20 20 H 60 Q 80 20 80 40 V 80"
              stroke="#0D5EA8"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M 20 20 H 60 Q 80 20 80 40 V 80"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-flow-line"
            />
            {/* Disconnect break */}
            <circle cx="80" cy="82" r="5" fill="#F59E0B" className="animate-ping" />
            <circle cx="80" cy="82" r="4" fill="#F59E0B" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            Error 404 • Broken Fitting
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Uh Oh. Wrong Pipe.
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Looks like this pipe leads nowhere. The page you're looking for might have been moved or doesn't exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D5EA8] hover:bg-[#073B6B] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back Home</span>
          </button>

          <a
            href={businessConfig.rawPhone}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call a Plumber</span>
          </a>
        </div>

        <div className="pt-4">
          <button
            onClick={onOpenRequestModal}
            className="text-xs text-sky-300 hover:text-white underline cursor-pointer"
          >
            Or submit a service request online →
          </button>
        </div>
      </div>
    </div>
  );
};
