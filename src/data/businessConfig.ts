import { BusinessConfig } from '../types';

/**
 * Centralized business configuration file.
 * To adapt this website for any local plumbing company,
 * simply update the values in this single configuration file.
 */
export const businessConfig: BusinessConfig = {
  businessName: "Apex Plumbing & Drain Solutions",
  tagline: "Fast, Reliable, Honest Plumbing & Emergency Service",
  phone: "(555) 345-PIPE",
  rawPhone: "tel:5553457473",
  emergencyPhone: "(555) 911-FLOW",
  rawEmergencyPhone: "tel:5559113569",
  email: "dispatch@apexplumbingservices.com",
  address: "1450 Highland Industrial Way, Suite 200",
  city: "Metro Valley",
  state: "CA",
  zip: "94016",
  serviceRadius: "30-Mile Service Area",
  rating: 4.9,
  reviewCount: 284,
  yearsExperience: 15,
  jobsCompleted: "14,500+",
  emergencyAvailable: true,
  responseGuarantee: "Under 45-Minute Emergency Response",
  licensed: true,
  licenseNumber: "C-36 License #942188 (Bonded & Insured)",
  insured: true,
  insuranceCoverage: "$2,000,000 Comprehensive Liability",
  hours: {
    weekday: "7:00 AM – 8:00 PM (Regular Rates)",
    weekend: "8:00 AM – 6:00 PM (Regular Rates)",
    emergency: "24/7/365 On-Call Emergency Crew Always Dispatched",
  },
};
