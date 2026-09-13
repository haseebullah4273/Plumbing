import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Quote, ShieldCheck, MapPin } from 'lucide-react';
import { customerReviews, reviewStats } from '../../data/testimonials';
import { PageRoute } from '../../types';

interface TestimonialsCarouselProps {
  navigate: (route: PageRoute) => void;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ navigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);
  };

  const activeReview = customerReviews[currentIndex];

  return (
    <section className="py-20 bg-[#F7F9FC] border-b border-slate-200 overflow-hidden" id="customer-reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-emerald-300/50">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Real Karachi Homeowner Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Trusted by Families Across Karachi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From emergency midnight line bursts in Clifton to concealed PPR leakages in DHA, see what genuine Pakistani homeowners have to say about Haider Ali and TheHomist team.
          </p>
        </div>

        {/* Google & Karachi Trust Score Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Verified Google Badge */}
            <div className="w-14 h-14 rounded-2xl bg-[#073B6B] text-white shadow-md flex items-center justify-center font-black text-2xl shrink-0">
              G
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xl font-extrabold text-slate-900">
                  {reviewStats.googleRating} / 5.0
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                Based on <strong>{reviewStats.totalReviews}+ Verified Karachi Reviews</strong> • Supervised by Haider Ali
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/reviews')}
              className="text-xs sm:text-sm font-bold text-[#0D5EA8] hover:text-[#073B6B] flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <span>View All {reviewStats.totalReviews} Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel & Featured Review Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Active Review Spotlight Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative min-h-[300px] flex flex-col justify-between">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 pointer-events-none" />

              <div>
                {/* Stars, Date & Service Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">5.0 Star Rating</span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {activeReview.servicePerformed}
                  </span>
                </div>

                {/* Review Text */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal"
                  >
                    "{activeReview.content}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info with Photo & Location */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-sm shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-extrabold text-slate-900 flex items-center gap-1.5 text-base">
                      <span>{activeReview.author}</span>
                      {activeReview.verified && (
                        <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-0.5 font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Pakistani Client
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {activeReview.role} • <span className="text-[#0D5EA8] font-semibold">{activeReview.location}</span>
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-slate-500 font-bold px-1">
                    {currentIndex + 1} / {customerReviews.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Review Stats List on Right */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#071525] text-white p-6 sm:p-7 rounded-3xl shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>TheHomist Trust Guarantee</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Supervised Doorstep Service Across Karachi
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Owner Haider Ali directly verifies technicians, schedules, and materials. You test water pressure and fixtures together before sign-off.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Recommendation Rate:</span>
                  <span className="font-bold text-emerald-400">{reviewStats.recommendationRate}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Karachi Doorstep Verification:</span>
                  <span className="font-bold text-sky-300">{reviewStats.karachiTrustScore}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Family Parda & Privacy:</span>
                  <span className="font-bold text-emerald-400">100% Respected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Average Response Time:</span>
                  <span className="font-bold text-white">30–45 Mins in Karachi</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/reviews')}
                className="w-full text-center text-xs font-bold text-amber-400 hover:text-amber-300 pt-2 block cursor-pointer"
              >
                Read All Reviews with Photos →
              </button>
            </div>
          </div>
        </div>

        {/* Real Pakistani People Testimonials Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Recent Customer Experiences Across Karachi
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any customer to read</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                whileHover={{ y: -3 }}
                onClick={() => setCurrentIndex(idx)}
                className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between ${
                  currentIndex === idx ? 'border-sky-500 ring-2 ring-sky-200' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {review.category}
                    </span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed line-clamp-4 italic mb-4">
                    "{review.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover border border-emerald-400 shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-slate-900 truncate flex items-center gap-1">
                      <span>{review.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <div className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-600 shrink-0" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
