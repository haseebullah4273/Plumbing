import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { faqsData } from '../data/faqs';
import { businessConfig } from '../data/businessConfig';
import { PageRoute } from '../types';

interface FaqPageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ navigate, onOpenRequestModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(faqsData[0].id);

  const categories = ['All', 'General', 'Emergency', 'Pricing', 'Services', 'Water Heaters', 'Drain Cleaning', 'Appointments'];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F7F9FC] min-h-screen pb-20">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} navigate={navigate} />

      {/* Hero Header */}
      <section className="bg-[#071525] text-white py-16 sm:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
            Clear Answers • Zero Jargon
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Find immediate answers regarding our emergency arrival times, pricing transparency, water heater diagnostics, and warranties.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. burst pipe, pricing, water heater, arrival time)..."
            className="w-full bg-white border border-slate-300 text-slate-900 text-sm rounded-2xl pl-12 pr-4 py-3.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0D5EA8] text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0D5EA8] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isExpanded ? 'rotate-180 text-[#0D5EA8]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Call our live dispatcher at {businessConfig.phone} for immediate assistance!
            </div>
          )}
        </div>

        {/* Bottom Help Card */}
        <div className="bg-[#071525] text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our dispatch team is available 24/7 to answer questions or book an on-site visit.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={businessConfig.rawPhone}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {businessConfig.phone}</span>
            </a>
            <button
              onClick={onOpenRequestModal}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
