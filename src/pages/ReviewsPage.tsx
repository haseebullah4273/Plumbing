import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, ArrowRight, Filter, Phone, MessageSquarePlus } from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { customerReviews, reviewStats } from '../../src/data/testimonials';
import { businessConfig } from '../data/businessConfig';
import { PageRoute } from '../types';

interface ReviewsPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Emergency' | 'Drain' | 'Water Heater' | 'Repair'>('All');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);

  const filteredReviews = customerReviews.filter((r) => {
    if (activeCategory === 'All') return true;
    return r.category === activeCategory;
  });

  const categories: Array<'All' | 'Emergency' | 'Drain' | 'Water Heater' | 'Repair'> = [
    'All',
    'Emergency',
    'Drain',
    'Water Heater',
    'Repair',
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'Customer Reviews' }]} navigate={navigate} />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            Real Feedback from Real Neighbors
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Our Customers Say
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Read unfiltered feedback from local homeowners who experienced our rapid response, upfront quotes, and clean repairs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Rating Breakdown Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          {/* Big Score */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <div className="text-5xl font-black text-[#0D5EA8] tracking-tight">
              {reviewStats.averageRating}
            </div>
            <div>
              <div className="flex text-amber-400 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Average Rating Across {reviewStats.totalReviews}+ Reviews
              </p>
            </div>
          </div>

          {/* Breakdown percentages */}
          <div className="space-y-1.5 text-xs text-slate-600 max-w-xs mx-auto md:mx-0 w-full">
            <div className="flex items-center gap-2">
              <span className="w-12 font-bold text-slate-700">5 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '96%' }} />
              </div>
              <span className="w-8 text-right font-mono">96%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 font-bold text-slate-700">4 Stars</span>
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '4%' }} />
              </div>
              <span className="w-8 text-right font-mono">4%</span>
            </div>
          </div>

          {/* Action button to leave feedback */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 bg-[#0D5EA8] hover:bg-[#073B6B] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-md"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0D5EA8] text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Reviews' : cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-semibold">
            Showing {filteredReviews.length} reviews
          </span>
        </div>

        {/* Animated Reviews Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">{rev.date}</span>
                  </div>

                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {rev.servicePerformed}
                  </span>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    "{rev.content}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <span className="text-[10px] text-emerald-600 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                  <span className="text-slate-500">{rev.location}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="bg-[#071525] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Next-Level Plumbing Service
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Join Our Happy Customers
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Whether it's a routine faucet repair or an urgent late-night burst pipe, experience why homeowners rate us 4.9 stars.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenRequestModal}
              className="w-full sm:w-auto bg-[#0D5EA8] hover:bg-sky-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              Request Service Online
            </button>
            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              Call Us: {businessConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Leave Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-center space-y-4">
            {newReviewSubmitted ? (
              <div className="space-y-3 py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-600">
                  Your review has been submitted for verification and will appear on our Google & website profiles shortly.
                </p>
                <button
                  onClick={() => {
                    setShowReviewModal(false);
                    setNewReviewSubmitted(false);
                  }}
                  className="bg-[#0D5EA8] text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewReviewSubmitted(true);
                }}
                className="space-y-3 text-left"
              >
                <h4 className="text-base font-bold text-slate-900">Share Your Experience</h4>
                <p className="text-xs text-slate-500">
                  Help fellow homeowners find dependable plumbing service.
                </p>

                <div className="flex text-amber-400 gap-1 py-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current cursor-pointer hover:scale-110 transition-transform" />
                  ))}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thomas K."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Neighborhood / City</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. West End Hills"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How was our technician's speed, diagnosis, and cleanup?"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs resize-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#0D5EA8] text-white text-xs font-bold py-2.5 rounded-xl cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
