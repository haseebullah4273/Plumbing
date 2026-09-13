import React, { useState } from 'react';
import { MapPin, Clock, Search, ArrowRight, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { serviceAreasData } from '../data/serviceAreas';
import { businessConfig } from '../data/businessConfig';
import { PageRoute } from '../types';

interface ServiceAreasPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = serviceAreasData.filter((area) => {
    const q = searchTerm.toLowerCase();
    return (
      area.name.toLowerCase().includes(q) ||
      area.zipCodes.some((z) => z.includes(q)) ||
      area.majorStreets.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'Service Areas' }]} navigate={navigate} />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
            Local Coverage Territory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Plumbing Services Near You
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Our certified master technicians are stationed strategically throughout {businessConfig.city} to provide guaranteed 25–45 minute arrival for residential and commercial plumbing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Search / Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by neighborhood name, major street, or zip code..."
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all"
            />
          </div>
          {searchTerm && (
            <p className="text-xs text-slate-500 mt-2 px-1">
              Showing {filteredAreas.length} matching coverage zones
            </p>
          )}
        </div>

        {/* Coverage Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-50 text-[#0D5EA8]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {area.name}
                      </h3>
                      <span className="text-[11px] text-slate-400">{area.county}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    ~{area.avgResponseMinutes} min ETA
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Available Services in this area */}
                <div className="border-t border-slate-100 pt-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Available in {area.name}:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700">
                    <span className="flex items-center gap-1 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                      Emergency Plumbing
                    </span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                      Drain Cleaning
                    </span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                      Water Heaters
                    </span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                      Leak Repair
                    </span>
                  </div>
                </div>

                {/* Zip codes list */}
                <div className="flex items-center gap-1 flex-wrap text-[11px] text-slate-500 mb-4">
                  <span className="font-semibold text-slate-600">ZIPs:</span>
                  {area.zipCodes.map((zip) => (
                    <span key={zip} className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">
                      {zip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenRequestModal}
                  className="w-full bg-[#0D5EA8] hover:bg-[#073B6B] text-white text-xs font-bold py-2.5 rounded-xl transition-colors text-center cursor-pointer"
                >
                  Request Service in {area.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Can't find your area note */}
        <div className="bg-[#071525] text-white p-8 rounded-3xl text-center max-w-3xl mx-auto space-y-3">
          <h3 className="text-xl font-bold">Don't see your specific neighborhood listed?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            We service all surrounding regions within a {businessConfig.serviceRadius}. Call our dispatcher to verify instant technician availability.
          </p>
          <div className="pt-2">
            <a
              href={businessConfig.rawPhone}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Dispatch: {businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
