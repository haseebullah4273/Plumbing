import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, Search, ArrowRight, ShieldAlert } from 'lucide-react';
import { serviceAreasData } from '../../data/serviceAreas';
import { businessConfig } from '../../data/businessConfig';
import { PageRoute } from '../../types';

interface ServiceAreaMapProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const [zipInput, setZipInput] = useState('');
  const [checkResult, setCheckResult] = useState<{
    tested: boolean;
    covered: boolean;
    areaName?: string;
    eta?: number;
  }>({ tested: false, covered: false });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Check if zip matches any known area
    const matched = serviceAreasData.find((a) =>
      a.zipCodes.some((z) => z === cleanZip || cleanZip.startsWith(z.slice(0, 3)))
    );

    if (matched) {
      setCheckResult({
        tested: true,
        covered: true,
        areaName: matched.name,
        eta: matched.avgResponseMinutes,
      });
    } else {
      // Default to covered within general radius
      setCheckResult({
        tested: true,
        covered: true,
        areaName: 'Metro Valley Extended Zone',
        eta: 40,
      });
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stylized Vector Coverage Map */}
          <div className="lg:col-span-6 bg-[#071525] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Stylized vector radar map rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <div className="w-96 h-96 rounded-full border border-sky-400 animate-ping duration-1000" />
              <div className="w-80 h-80 rounded-full border border-dashed border-sky-400/50" />
              <div className="w-60 h-60 rounded-full border border-sky-500/40" />
              <div className="w-40 h-40 rounded-full border border-sky-600/30" />
            </div>

            {/* Central Dispatch Marker */}
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800">
                  Live Dispatch Coverage
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  All Vans Active
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Metro Valley Dispatch Perimeter
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Centrally located dispatch headquarters guarantees fast arrival across {businessConfig.serviceRadius}.
                </p>
              </div>

              {/* Stylized Zone Grid Visual */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {serviceAreasData.map((area) => (
                  <div
                    key={area.id}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate text-white">{area.name}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                      <span>Avg. Arrival:</span>
                      <span className="text-emerald-400 font-bold">{area.avgResponseMinutes} min</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => navigate('/service-areas')}
                  className="text-xs text-sky-300 hover:text-white font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore full list of streets & zip codes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Check Your Area Tool & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-50 px-3 py-1 rounded-full">
                Local Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Serving Homeowners Across {businessConfig.city} & Greater Region
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Whether you live in historic hillside bungalows, downtown condominiums, or suburban family neighborhoods, our mobile plumbing units are stationed locally for rapid service.
              </p>
            </div>

            {/* Interactive Zip Code Checker */}
            <div className="bg-[#F7F9FC] p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Search className="w-4 h-4 text-[#0D5EA8]" />
                <span>Check If We Serve Your Area:</span>
              </h3>

              <form onSubmit={handleZipCheck} className="flex gap-2">
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="Enter your 5-digit ZIP code (e.g. 94016)"
                  maxLength={5}
                  className="flex-1 bg-white border border-slate-300 text-slate-900 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0D5EA8]"
                />
                <button
                  type="submit"
                  className="bg-[#0D5EA8] hover:bg-[#073B6B] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Verify
                </button>
              </form>

              {checkResult.tested && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">✓ Yes! We service your neighborhood.</span>
                    <span>
                      {checkResult.areaName} is within our priority coverage area with an estimated arrival window of approximately ~{checkResult.eta} minutes.
                    </span>
                    <button
                      type="button"
                      onClick={onOpenRequestModal}
                      className="text-[#0D5EA8] font-bold underline block mt-1 cursor-pointer"
                    >
                      Book Service Now →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Coverage perks */}
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero travel or fuel surcharges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Same rates throughout coverage zone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Fully certified municipal compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Direct coordination with water utilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
