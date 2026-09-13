import React from 'react';
import { ShieldCheck, CheckCircle2, Wrench, Droplets, Flame, AlertCircle } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { PageRoute } from '../../types';

export const LocalSeoContent: React.FC<{ navigate: (route: PageRoute) => void }> = ({ navigate }) => {
  return (
    <section className="py-16 bg-[#F7F9FC] border-b border-slate-200 text-slate-700 text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8]">
              Plumbing Guide for Pakistani Homes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Trusted Plumbing Knowledge & Practical Standards
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Understanding water line materials, concealed leak prevention, and motor/geyser care for homes across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#0D5EA8]" />
                <span>PPR vs. Old Galvanized Iron (GI) Lines</span>
              </h4>
              <p className="text-slate-600">
                In older homes across Karachi, galvanized iron (GI) pipes eventually rust from inside out due to brackish line water and saline humidity, causing severe flow reduction, red tap water, and hidden wall seepage (shelan/seem).
              </p>
              <p className="text-slate-600">
                We specialize in concealed re-piping using high-grade Polypropylene Random Copolymer (PPR/PPRC) piping from certified brands like Master and Popular. Heat-fused joints eliminate mechanical threads and create a 100% leak-proof, scale-resistant system engineered to last over 50 years.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Gas & Electric Geyser Maintenance & Safety</span>
              </h4>
              <p className="text-slate-600">
                Gas shortages and hard groundwater cause significant sediment build-up and burner pilot clogging in storage geysers (Nasgas, Canon, Singer). Unserviced geysers pose severe carbon monoxide hazards and pressure burst risks.
              </p>
              <p className="text-slate-600">
                Our technicians test thermo-couples, burner orifices, and pressure relief safety valves, or install energy-efficient instant gas and electric geysers with correct non-return valves (NRVs) to protect your family throughout the winter season.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Droplets className="w-4 h-4 text-sky-500" />
                <span>PVC Drainage, Underground & Roof Water Tanks</span>
              </h4>
              <p className="text-slate-600">
                Improper slope and weak solvent joints in PVC sanitary drains cause persistent foul bathroom odors, floor drain overflow, and subterranean foundation soaking.
              </p>
              <p className="text-slate-600">
                We install UPVC multi-floor drainage stacks with anti-syphon traps and inspect underground water tanks (UGT) and roof tanks, providing hygienic deep-cleaning and float-valve automation to prevent water wastage.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>24/7 Doorstep Emergency Dispatch in Pakistan</span>
              </h4>
              <p className="text-slate-600">
                When a water motor fails during scheduled water supply hours, or a concealed pipe bursts inside your bedroom wall at night, waiting until tomorrow can cause thousands in ruined masonry and furniture.
              </p>
              <p className="text-slate-600">
                Our emergency plumbers carry mobile PPR fusion welding machines, test pressure pumps, spare motor capacitors, and pipe fittings for swift on-the-spot resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
