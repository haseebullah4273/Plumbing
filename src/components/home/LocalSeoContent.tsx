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
              Local Plumbing Expertise
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Your Dependable Local Plumbing Resource
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Understanding residential plumbing maintenance, code standards, and preventative care for local homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#0D5EA8]" />
                <span>Residential Plumbing Integrity in {businessConfig.city}</span>
              </h4>
              <p className="text-slate-600">
                Homes across {businessConfig.city} and surrounding communities feature a wide spectrum of architectural ages—from vintage residences with galvanized iron water mains to modern constructions using Uponor PEX-a manifolds. Aging metal pipes frequently experience mineral tuberculation and galvanic electrolysis, restricting shower pressure and creating hidden pinhole leaks behind plaster walls.
              </p>
              <p className="text-slate-600">
                Our licensed journeymen plumbers specialize in non-destructive electronic diagnostic inspections, pinpointing internal corrosion and offering surgical spot repairs or full copper repipes that protect your investment.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Water Heater Efficiency & Safe Venting</span>
              </h4>
              <p className="text-slate-600">
                With regional water supplies containing moderate mineral hardness, standard tank water heaters accumulate calcium carbonate sedimentation at the base of the tank. Over time, this traps heat, causes rumbling popcorn noises, overheats the steel bottom, and leads to premature tank rupture.
              </p>
              <p className="text-slate-600">
                Whether you require an annual flush and sacrificial anode rod replacement, an emergency replacement with code-required thermal expansion tanks, or a space-saving high-efficiency tankless water heater conversion, our technicians ensure total safety and optimal energy savings.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Droplets className="w-4 h-4 text-sky-500" />
                <span>Modern Trenchless Sewer & Hydro-Jetting</span>
              </h4>
              <p className="text-slate-600">
                Subsurface tree root penetration is the leading cause of chronic sewer backups in our area. Mature oak and elm roots exploit microscopic moisture beads along clay and cast iron pipe joints, quickly forming impenetrable root webs.
              </p>
              <p className="text-slate-600">
                Rather than digging disruptive open trenches across your driveway, we utilize commercial-grade hydro-jetting to scour away roots, followed by continuous cured-in-place pipe (CIPP) relining to create a smooth, seamless barrier that lasts 50+ years.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>24/7 Emergency Dispatch Standards</span>
              </h4>
              <p className="text-slate-600">
                Plumbing disasters don't wait for business hours. When a main pressurized water line ruptures at 2 AM, having immediate access to a live human dispatcher and a local master plumber saves tens of thousands in drywall and flooring replacement.
              </p>
              <p className="text-slate-600">
                Our emergency rolling trucks carry universal press fittings, mechanical freeze kits, temporary water bypass systems, and industrial sump extractors to secure your home without hesitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
