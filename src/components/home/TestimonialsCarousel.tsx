import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
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
    <section className="py-20 bg-[#F7F9FC] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Style Trust Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Google G Logo Style Badge */}
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-2xl text-[#0D5EA8] shrink-0">
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
                Based on <strong>{reviewStats.totalReviews}+ Verified Local Reviews</strong> • Google Verified Business
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/reviews')}
              className="text-xs sm:text-sm font-bold text-[#0D5EA8] hover:text-[#073B6B] flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <span>See All Reviews ({reviewStats.totalReviews})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel & Featured Review */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Active Review Spotlight Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative min-h-[280px] flex flex-col justify-between">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 pointer-events-none" />

              <div>
                {/* Stars and Service Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Service: {activeReview.servicePerformed}
                  </span>
                </div>

                {/* Review Text with Smooth Fade Transition */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium"
                  >
                    "{activeReview.content}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author & Location */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#073B6B] to-[#0D5EA8] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {activeReview.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm sm:text-base">
                      <span>{activeReview.author}</span>
                      {activeReview.verified && (
                        <span className="text-xs text-emerald-600 flex items-center gap-0.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{activeReview.location} • {activeReview.date}</p>
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
              <h3 className="text-lg font-bold text-white tracking-tight">
                Our Commitment to Local Homeowners
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never leave until you test the fixture with our technician and sign off on 100% satisfaction.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Recommendation Rate:</span>
                  <span className="font-bold text-emerald-400">{reviewStats.recommendationRate}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Better Business Bureau:</span>
                  <span className="font-bold text-sky-300">{reviewStats.bbbRating} Accredited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">First-Visit Fix Rate:</span>
                  <span className="font-bold text-white">98% (Fully Stocked Vans)</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/reviews')}
                className="w-full text-center text-xs font-bold text-amber-400 hover:text-amber-300 pt-2 block cursor-pointer"
              >
                Read All 280+ Reviews by Category →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
