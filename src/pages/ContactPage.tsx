import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { RequestServiceForm } from '../components/forms/RequestServiceForm';
import { businessConfig } from '../data/businessConfig';
import { PageRoute } from '../types';

export const ContactPage: React.FC<{ navigate: (route: PageRoute) => void }> = ({ navigate }) => {
  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'Contact / Request Service' }]} navigate={navigate} />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            Immediate Response & Scheduling
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Need a Plumber? Let's Talk.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Whether you have an emergency flood right now or are planning a fixture upgrade, we are ready to help.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Callout Card */}
            <div className="bg-amber-500 text-slate-950 p-6 rounded-2xl shadow-lg space-y-3">
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 fill-current" />
                <span>Active Water Leak or Flooding?</span>
              </div>
              <h3 className="text-xl font-black tracking-tight">
                Call our 24/7 emergency dispatch line directly for immediate technician routing:
              </h3>
              <a
                href={businessConfig.rawEmergencyPhone}
                className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-black text-base px-5 py-3 rounded-xl w-full text-center hover:bg-slate-900 transition-colors"
                id="contact-urgent-call-btn"
              >
                <Phone className="w-4 h-4 fill-current text-amber-400 animate-pulse-subtle" />
                <span>{businessConfig.emergencyPhone}</span>
              </a>
            </div>

            {/* Business Contact Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Headquarters & Dispatch Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0D5EA8] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">General Inquiries:</span>
                    <a href={businessConfig.rawPhone} className="text-[#0D5EA8] font-bold text-base hover:underline">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0D5EA8] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Dispatch Email:</span>
                    <a href={`mailto:${businessConfig.email}`} className="text-[#0D5EA8] hover:underline break-all">
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0D5EA8] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Workshop & Dispatch Office:</span>
                    <span className="text-slate-700 font-medium">
                      {businessConfig.address}<br />
                      {businessConfig.city}, {businessConfig.state} {businessConfig.zip}
                    </span>
                    <p className="text-[11px] text-emerald-700 font-medium mt-1">
                      Located on Main Korangi Road right near DHA Phase 1 & 2 for quick dispatch across DHA, Clifton, and all Karachi neighborhoods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Hours of Operation:</span>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Standard Appointments: {businessConfig.hours.weekday}<br />
                      Emergency Crew: 24 Hours / 7 Days / 365 Days a Year
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed State Contractor #{businessConfig.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>{businessConfig.insuranceCoverage}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Request Service Form */}
          <div className="lg:col-span-7">
            <RequestServiceForm />
          </div>
        </div>
      </div>
    </div>
  );
};
