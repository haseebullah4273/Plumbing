import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Award, ThumbsUp, Wrench } from 'lucide-react';
import { siteImages } from '../../data/images';
import { businessConfig } from '../../data/businessConfig';
import { AnimatedCounter } from '../animations/AnimatedCounter';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Experienced Professionals',
      desc: 'Master technicians with an average of 12+ years in field mechanics and code regulations.',
    },
    {
      title: 'Honest Recommendations',
      desc: 'We offer repair alternatives whenever possible, never pushing costly unnecessary replacements.',
    },
    {
      title: 'Clear Communication',
      desc: 'Live arrival tracking, detailed digital diagnostic reports, and no industry jargon.',
    },
    {
      title: 'Quality Craftsmanship',
      desc: 'Top-tier copper, Uponor PEX, heavy brass fittings, and zero corner-cutting.',
    },
    {
      title: 'Fast Emergency Response',
      desc: 'Under 45-minute average local arrival for burst pipes, backups, and active flooding.',
    },
    {
      title: 'Respectful Service',
      desc: 'Clean uniforms, protective shoe covers, surface drop cloths, and immaculate cleanup.',
    },
  ];

  return (
    <section className="py-20 bg-[#F7F9FC] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Plumber Technician Image + Floating Stats Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={siteImages.plumberUnderSink}
                alt="Professional Plumber Inspecting Pipes"
                className="w-full h-[520px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="bg-sky-500 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
                  Verified Technicians
                </span>
                <p className="font-semibold text-sm mt-1">
                  Factory certified on Rheem, Moen, Kohler & Navien systems.
                </p>
              </div>
            </motion.div>

            {/* Floating Experience Metric Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-200 max-w-[210px] z-10"
            >
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <Award className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Track Record
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter end={businessConfig.yearsExperience} suffix="+" />
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Years Serving Local Homes & Businesses
              </p>
            </motion.div>
          </div>

          {/* Right: Why Homeowners Choose Us Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
                The Apex Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
                Why Homeowners Choose Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                When a plumbing failure strikes your home, you don't need high-pressure sales reps—you need seasoned master technicians who troubleshoot accurately and respect your property.
              </p>
            </div>

            {/* 6 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
                >
                  <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{b.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stat Strip */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl font-black text-[#0D5EA8]">
                  <AnimatedCounter end={14500} suffix="+" />
                </div>
                <div className="text-xs text-slate-500">Jobs Completed</div>
              </div>

              <div>
                <div className="text-2xl font-black text-amber-600">
                  <AnimatedCounter end={4.9} decimals={1} />
                </div>
                <div className="text-xs text-slate-500">Average Rating</div>
              </div>

              <div>
                <div className="text-2xl font-black text-emerald-600">100%</div>
                <div className="text-xs text-slate-500">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
