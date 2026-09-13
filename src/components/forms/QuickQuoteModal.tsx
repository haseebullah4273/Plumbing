import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, ShieldCheck } from 'lucide-react';
import { RequestServiceForm } from './RequestServiceForm';
import { businessConfig } from '../../data/businessConfig';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceCategory?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  serviceCategory,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="bg-[#071525] text-white p-4 sm:px-6 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Priority Dispatch System
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={businessConfig.rawEmergencyPhone}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {businessConfig.phone}</span>
              </a>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="overflow-y-auto p-4 sm:p-6">
            <RequestServiceForm
              initialCategory={serviceCategory}
              onSuccess={() => {
                // Auto close after brief delay or let user see confirmation
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
