import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Phone, 
  Clock, 
  Calendar, 
  Paperclip, 
  Loader2,
  Wrench,
  ShieldCheck
} from 'lucide-react';
import { ServiceRequestFormData } from '../../types';
import { servicesData } from '../../data/services';
import { businessConfig } from '../../data/businessConfig';

interface RequestServiceFormProps {
  initialCategory?: string;
  onSuccess?: () => void;
  isCompact?: boolean;
}

export const RequestServiceForm: React.FC<RequestServiceFormProps> = ({
  initialCategory,
  onSuccess,
  isCompact = false,
}) => {
  const [formData, setFormData] = useState<ServiceRequestFormData>({
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    serviceCategory: initialCategory || 'emergency-plumbing',
    urgency: 'today',
    preferredTime: 'morning',
    description: '',
    fileAttachedName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for dispatch confirmation';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Address or neighborhood is required for arrival estimate';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe the plumbing issue you are experiencing';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`APX-${Math.floor(100000 + Math.random() * 900000)}`);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      streetAddress: '',
      serviceCategory: 'emergency-plumbing',
      urgency: 'today',
      preferredTime: 'morning',
      description: '',
      fileAttachedName: '',
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce-short">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
            Dispatch Ticket #{submissionId}
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            ✓ Request Received!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thanks {formData.fullName}! Our service coordinator has received your plumbing request for <strong>{formData.streetAddress}</strong> and will call you at <strong>{formData.phone}</strong> shortly to confirm your arrival window.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between text-slate-700">
            <span className="font-medium text-slate-500">Service Category:</span>
            <span className="font-bold capitalize">{formData.serviceCategory.replace('-', ' ')}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span className="font-medium text-slate-500">Urgency Level:</span>
            <span className="font-bold text-amber-700 uppercase">{formData.urgency}</span>
          </div>
          <div className="flex justify-between text-slate-700">
            <span className="font-medium text-slate-500">Status:</span>
            <span className="font-semibold text-emerald-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Assigned to Local Dispatch
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={businessConfig.rawEmergencyPhone}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Need Urgent Help Right Now? Call {businessConfig.emergencyPhone}</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto text-xs text-slate-500 hover:text-slate-800 font-semibold px-4 py-2"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Request Service or Estimate
          </h3>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            No Obligation Quote
          </span>
        </div>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Complete the form below. For active leaks or urgent emergencies, please call our 24/7 hotline directly.
        </p>
      </div>

      {/* Urgency selector buttons */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          How urgent is your situation?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { value: 'emergency', label: '🚨 Emergency', sub: 'Immediate 45m' },
            { value: 'today', label: 'Same-Day', sub: 'Within 2-4 hrs' },
            { value: 'this-week', label: 'Scheduled', sub: 'This week' },
            { value: 'flexible', label: 'Estimate Only', sub: 'Planning stage' },
          ].map((u) => (
            <button
              key={u.value}
              type="button"
              onClick={() => setFormData({ ...formData, urgency: u.value as any })}
              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                formData.urgency === u.value
                  ? 'border-[#0D5EA8] bg-blue-50/70 text-[#073B6B] ring-1 ring-[#0D5EA8]'
                  : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
              }`}
            >
              <div className="font-bold text-xs">{u.label}</div>
              <div className="text-[10px] text-slate-500">{u.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Service Category */}
      <div>
        <label htmlFor="service-category-select" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          Service Needed *
        </label>
        <select
          id="service-category-select"
          value={formData.serviceCategory}
          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
          className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all"
        >
          {servicesData.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other Plumbing Inspection / Diagnostic</option>
        </select>
      </div>

      {/* Name and Phone (2-column on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-full-name" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            id="form-full-name"
            type="text"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            placeholder="e.g. Robert Miller"
            className={`w-full bg-slate-50 border text-slate-900 text-sm rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all ${
              errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="form-phone-number" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            id="form-phone-number"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="(555) 000-0000"
            className={`w-full bg-slate-50 border text-slate-900 text-sm rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all ${
              errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Email and Street Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-email-address" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Email Address (Optional)
          </label>
          <input
            id="form-email-address"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="robert@example.com"
            className={`w-full bg-slate-50 border text-slate-900 text-sm rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all ${
              errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="form-street-address" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Street Address or City *
          </label>
          <input
            id="form-street-address"
            type="text"
            value={formData.streetAddress}
            onChange={(e) => {
              setFormData({ ...formData, streetAddress: e.target.value });
              if (errors.streetAddress) setErrors({ ...errors, streetAddress: '' });
            }}
            placeholder="e.g. 742 Evergreen Terrace, Metro Valley"
            className={`w-full bg-slate-50 border text-slate-900 text-sm rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all ${
              errors.streetAddress ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
            }`}
          />
          {errors.streetAddress && (
            <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.streetAddress}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="form-problem-description" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          Describe the Problem / Symptoms *
        </label>
        <textarea
          id="form-problem-description"
          rows={3}
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
            if (errors.description) setErrors({ ...errors, description: '' });
          }}
          placeholder="What is happening? (e.g. Water heater leaking from the bottom base, foul gurgling from kitchen sink, low hot water pressure in master shower...)"
          className={`w-full bg-slate-50 border text-slate-900 text-sm rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5EA8] transition-all resize-none ${
            errors.description ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
          }`}
        />
        {errors.description && (
          <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" /> {errors.description}
          </p>
        )}
      </div>

      {/* Optional Photo Attachment */}
      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-xs">
        <label className="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-[#0D5EA8] transition-colors">
          <Paperclip className="w-4 h-4 text-slate-400" />
          <span>{formData.fileAttachedName ? `Attached: ${formData.fileAttachedName}` : 'Attach photo of leak or fixture (optional)'}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setFormData({ ...formData, fileAttachedName: file.name });
              }
            }}
          />
        </label>
        {formData.fileAttachedName && (
          <button
            type="button"
            onClick={() => setFormData({ ...formData, fileAttachedName: '' })}
            className="text-[11px] text-red-500 hover:underline"
          >
            Remove
          </button>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0D5EA8] hover:bg-[#073B6B] active:bg-[#05294b] text-white font-extrabold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        id="submit-service-request-btn"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Transmitting to On-Call Dispatch...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>REQUEST SERVICE NOW</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Upfront Pricing Guaranteed
        </span>
        <span>•</span>
        <span>Zero Hidden Travel Fees</span>
        <span>•</span>
        <span>No Credit Card Required</span>
      </div>
    </form>
  );
};
