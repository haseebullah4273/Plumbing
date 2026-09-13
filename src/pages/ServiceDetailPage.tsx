import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  ArrowRight,
  Droplets,
  Flame,
  Search,
  Wrench,
  HelpCircle,
  MapPin,
  Sparkles
} from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ServiceItem, PageRoute } from '../types';
import { businessConfig } from '../data/businessConfig';
import { serviceAreasData } from '../data/serviceAreas';
import { PipeRoute } from '../components/animations/PipeAnimation';

interface ServiceDetailPageProps {
  service: ServiceItem;
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: (category?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  navigate,
  onOpenRequestModal,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Services', route: '/services' },
          { label: service.title },
        ]}
        navigate={navigate}
      />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background photo with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/90 to-[#071525]/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <span>{service.badge || 'Certified Plumbing Service'}</span>
              <span>•</span>
              <span>{businessConfig.city} & Nearby</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenRequestModal(service.slug)}
                className="inline-flex items-center justify-center gap-2 bg-[#0D5EA8] hover:bg-[#073B6B] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request {service.title}</span>
              </button>

              <a
                href={businessConfig.rawEmergencyPhone}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg transition-colors text-center"
              >
                <Phone className="w-4 h-4 fill-current animate-pulse-subtle" />
                <span>Call Now: {businessConfig.emergencyPhone}</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400" />
                Dispatch Response: Under 45m
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Upfront Pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION: "What To Do Before We Arrive" for Emergency Plumbing */}
      {service.isEmergency && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="bg-amber-500 text-slate-950 rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-amber-400">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-slate-950" />
              <span>Critical Emergency Action Protocol</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-4">
              What To Do Right Now While You Wait for Our Van:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-semibold">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-600/20">
                <span className="text-xl font-black text-amber-950 block mb-1">01</span>
                <div className="font-bold text-slate-950">Shut Off Main Valve</div>
                <p className="text-xs text-slate-800 font-normal mt-1">
                  Locate your home's main water valve (garage, basement, or curb meter) and turn it 90° clockwise.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-600/20">
                <span className="text-xl font-black text-amber-950 block mb-1">02</span>
                <div className="font-bold text-slate-950">Electrical Safety</div>
                <p className="text-xs text-slate-800 font-normal mt-1">
                  If water is near electrical outlets or basement subpanels, trip the breaker from a dry safe distance.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-600/20">
                <span className="text-xl font-black text-amber-950 block mb-1">03</span>
                <div className="font-bold text-slate-950">Clear the Perimeter</div>
                <p className="text-xs text-slate-800 font-normal mt-1">
                  Move furniture, rugs, and electronic devices away from the water path to minimize structural damage.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-600/20">
                <span className="text-xl font-black text-amber-950 block mb-1">04</span>
                <div className="font-bold text-slate-950">Keep Phone Accessible</div>
                <p className="text-xs text-slate-800 font-normal mt-1">
                  Our master technician will call you 10-15 minutes prior to arrival with live GPS tracking.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid: Details, Common Problems, Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Section 1: Common Problems & What We Do (2-Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Common Symptoms Solved */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-extrabold text-slate-900">
                Common Symptoms We Resolve
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              If you are noticing any of the following issues in your home or commercial facility, schedule an evaluation before secondary damage occurs:
            </p>

            <ul className="space-y-2.5 pt-2">
              {service.commonProblems.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#0D5EA8] shrink-0 mt-1.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: What We Do / Professional Scope */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-extrabold text-slate-900">
                Our Technical Scope & Standards
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Every appointment includes a comprehensive diagnostic checklist using calibrated commercial instruments:
            </p>

            <ul className="space-y-2.5 pt-2">
              {service.whatWeDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: Our 3-Step Process for this service */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8]">
              Methodical Execution
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Professional Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.ourProcess.map((proc) => (
              <div key={proc.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                <span className="text-2xl font-black text-[#0D5EA8]">{proc.step}</span>
                <h4 className="font-bold text-base text-slate-900">{proc.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{proc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Benefits & Transparent Pricing Note */}
        <div className="bg-[#071525] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                Transparent Guarantees
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why Trust Apex for {service.title}?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-xs space-y-3">
              <div className="text-amber-300 font-bold uppercase tracking-wider">
                Upfront Pricing Pledge
              </div>
              <p className="text-slate-300 leading-relaxed">
                {service.pricingNote}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenRequestModal(service.slug)}
                  className="w-full bg-[#0D5EA8] hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Schedule an On-Site Diagnostic
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Service Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8]">
                Common Questions
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Frequently Asked: {service.title}
              </h3>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0D5EA8] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#0D5EA8]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 5: Local Service Area Link strip */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
          <h4 className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-sky-600" />
            <span>Providing {service.title} across Metro Valley communities</span>
          </h4>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Units stationed for rapid dispatch in {serviceAreasData.map((a) => a.name).join(', ')}.
          </p>
          <button
            onClick={() => navigate('/service-areas')}
            className="text-xs font-bold text-[#0D5EA8] hover:underline"
          >
            Check response times in your specific neighborhood →
          </button>
        </div>

        {/* Final CTA Strip */}
        <div className="bg-gradient-to-r from-[#073B6B] to-[#0D5EA8] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-black tracking-tight">
              Ready to schedule your {service.title.toLowerCase()}?
            </h3>
            <p className="text-sky-200 text-xs sm:text-sm mt-1">
              Contact our live dispatcher or reserve your convenient 2-hour arrival window online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenRequestModal(service.slug)}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#073B6B] font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer text-center"
            >
              Request Service Online
            </button>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{businessConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
