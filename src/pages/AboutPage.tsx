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
  Clock,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { siteImages } from '../data/images';
import { businessConfig } from '../data/businessConfig';
import { AnimatedCounter } from '../components/animations/AnimatedCounter';
import { PageRoute } from '../types';

interface AboutPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  navigate,
}) => {
  const values = [
    {
      title: 'PPR Heat Fusion Mastery',
      desc: 'We weld and calibrate every German-standard PPR joint with precision digital dies—guaranteeing 100% leak-proof concealed piping behind bathroom and kitchen tiles.',
      icon: Wrench,
    },
    {
      title: 'Transparent PKR Pricing',
      desc: 'No hidden surge fees or surprise rates. We diagnose the root issue and give a straightforward upfront quote in Pakistani Rupees before commencing work.',
      icon: ShieldCheck,
    },
    {
      title: 'Parda & Family Privacy Respected',
      desc: 'We strictly respect local Pakistani family traditions and home privacy. Our plumbers are polite, respectful, and ensure clean cleanup upon job completion.',
      icon: HeartHandshake,
    },
    {
      title: 'Fast Karachi Doorstep Dispatch',
      desc: 'With dedicated mobile teams positioned across DHA, Clifton, Gulshan, PECHS, and Johar, our technicians reach your gate rapidly within 30 to 45 minutes.',
      icon: Clock,
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
            Karachi's Trusted Home Plumbing Service • Supervised by Haider Ali
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About TheHomist
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering precision PPR, PVC, and GI pipe engineering, water motor pump repairs, and underground tank waterproofing across Karachi.
          </p>
        </div>
      </section>

      {/* Section 1: Owner Profile & Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-50 px-3 py-1 rounded-full">
              Leadership & Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Haider Ali, Founder & Master Plumbing Specialist
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With over 16 years of hands-on plumbing and sanitary expertise in Karachi, Haider Ali founded <strong>TheHomist</strong> with a straightforward mission: eliminate substandard plumbing shortcuts, prevent recurring wall seepage (seem) in Pakistani bungalows and apartments, and bring dependable, transparent service to Karachi families.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              "In Karachi, our homes face unique plumbing challenges: high-pressure water motors pulling from municipal lines, sediment in underground tanks, and corrosive water causing rusted GI pipes. At TheHomist, we only install food-grade, certified PPRC and heavy UPVC lines so homeowners never have to break their expensive bathroom tiles twice."
            </p>

            <div className="pt-2 border-t border-slate-200 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-3xl font-black text-[#0D5EA8]">
                  <AnimatedCounter end={businessConfig.yearsExperience} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600">
                  <AnimatedCounter end={18500} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Karachi Homes Served</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-600">
                  <AnimatedCounter end={4.9} decimals={1} />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src={siteImages.ownerPortrait}
                alt="Haider Ali - Owner and Master Plumber at TheHomist Karachi"
                className="w-full h-[460px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white">
                <div className="font-extrabold text-base text-white">Haider Ali</div>
                <div className="text-xs text-sky-400 font-semibold">Founder & Chief Plumbing Supervisor – TheHomist Karachi</div>
                <div className="text-[11px] text-slate-300 mt-1">Directly overseeing quality standards, materials & technician dispatches across Karachi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8]">
              Our Work Ethic
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Why Karachi Homeowners Rely on TheHomist
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every job supervised by Haider Ali adheres to strict quality and ethical standards.
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

        {/* Section 3: Certified Karachi Technicians Promise */}
        <div className="bg-[#071525] text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              Personal Accountability
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Directly Managed Plumbers. No Untrained Third-Party Middlemen.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              When you call TheHomist, you don't get an anonymous call center or unverified contractor. You get experienced, respectful plumbers supervised directly by Haider Ali, arriving with specialized tools (PPR fusion welding machines, ratcheting pipe threaders, and high-pressure unchoking augers).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certified Master Plumber supervision by Haider Ali</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Respect for home privacy and family parda</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% genuine brand materials (Popular, Master, Sonex, IIL)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent quotes in PKR before any work starts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-6">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Need Plumbing Assistance in Karachi?
          </h3>
          <p className="text-slate-600 text-sm mt-1 mb-6">
            Call or send photos/videos of your plumbing issue directly on WhatsApp to Haider Ali's team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Plumber: {businessConfig.phone}</span>
            </a>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Helpline: {businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
