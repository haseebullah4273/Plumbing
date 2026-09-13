import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  Sparkles,
  Wrench,
  Clock
} from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { siteImages } from '../data/images';
import { businessConfig } from '../data/businessConfig';
import { AnimatedCounter } from '../components/animations/AnimatedCounter';
import { PageRoute } from '../types';

interface AboutPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const values = [
    {
      title: 'Uncompromising Craftsmanship',
      desc: 'We solder, press, and fasten every pipe connection to exceed building codes—never cutting corners for speed.',
      icon: Wrench,
    },
    {
      title: 'Radical Transparency',
      desc: 'No hidden overtime fees, no vague jargon. We explain the exact root cause and quote all costs upfront before touching your plumbing.',
      icon: ShieldCheck,
    },
    {
      title: 'Respect for Your Home',
      desc: 'We treat your property like our own family home. Floor protection, shoe booties, and spotless cleanup are standard operating procedure.',
      icon: HeartHandshake,
    },
    {
      title: 'Continuous Innovation',
      desc: 'Investing in state-of-the-art non-invasive acoustic listening sensors, thermal optics, and trenchless relining technologies.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'About Us' }]} navigate={navigate} />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${siteImages.workshop})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/90 to-[#071525]/75 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
            Locally Owned & Operated Since 2011
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Local Plumbers. Real People. Reliable Service.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded on the core belief that honest communication and meticulous pipe craftsmanship will always outshine corporate call centers.
          </p>
        </div>
      </section>

      {/* Section 1: Our Story (Split Screen) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-50 px-3 py-1 rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built on Neighborhood Trust, One Pipe at a Time
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Apex Plumbing was founded by master plumbers who grew tired of the predatory sales tactics, bait-and-switch pricing, and junior handymen deployed by corporate franchises.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We set out to build a different kind of company: one where certified master plumbers answer your calls, roll up in fully stocked mobile workshops ready to resolve 98% of emergencies on the first trip, and leave your bathroom cleaner than they found it.
            </p>

            <div className="pt-2 border-t border-slate-200 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-3xl font-black text-[#0D5EA8]">
                  <AnimatedCounter end={businessConfig.yearsExperience} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600">
                  <AnimatedCounter end={14500} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Jobs Completed</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-600">
                  <AnimatedCounter end={4.9} decimals={1} />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Google Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={siteImages.teamVan}
                alt="Apex Plumbing Service Fleet"
                className="w-full h-[440px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Core Values Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8]">
              What We Stand For
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Our Core Principles
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every member of our team is held accountable to these non-negotiable promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D5EA8] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Certified Master Technicians Promise */}
        <div className="bg-[#071525] text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              Zero Unqualified Subcontractors
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Every Technician is Directly Employed, Background-Checked, and Drug-Tested
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We never broker your service call out to anonymous third-party gig workers. When an Apex van pulls into your driveway, you can rest easy knowing you are welcoming a clean-cut, verified professional wearing identification, armed with proper state licensing, and covered under our $2,000,000 liability insurance policy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Annual mandatory technical recertification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Uniformed & marked commercial fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>State Board Certified C-36 Contractors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero commission sales quotas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-6">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Experience the Apex Difference
          </h3>
          <p className="text-slate-600 text-sm mt-1 mb-6">
            Have questions about an upcoming project or facing an emergency?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenRequestModal}
              className="w-full sm:w-auto bg-[#0D5EA8] hover:bg-[#073B6B] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Schedule an Appointment
            </button>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
            >
              Call Us: {businessConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
