export type PageRoute =
  | '/'
  | '/services'
  | '/services/emergency-plumbing'
  | '/services/drain-cleaning'
  | '/services/water-heater'
  | '/services/leak-detection'
  | '/services/sewer-line'
  | '/services/faucet-repair'
  | '/about'
  | '/reviews'
  | '/service-areas'
  | '/contact'
  | '/faq'
  | '/404';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroHeadline: string;
  iconName: string;
  badge?: string;
  isEmergency?: boolean;
  commonProblems: string[];
  whatWeDo: string[];
  ourProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
  warningSigns: string[];
  pricingNote: string;
  image: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  category: 'All' | 'Emergency' | 'Drain' | 'Water Heater' | 'Repair';
  servicePerformed: string;
  content: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Emergency' | 'Pricing' | 'Services' | 'Water Heaters' | 'Drain Cleaning' | 'Appointments';
}

export interface ServiceArea {
  id: string;
  name: string;
  county: string;
  zipCodes: string[];
  avgResponseMinutes: number;
  featured: boolean;
  description: string;
  majorStreets: string[];
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  phone: string;
  rawPhone: string;
  emergencyPhone: string;
  rawEmergencyPhone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  serviceRadius: string;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  jobsCompleted: string;
  emergencyAvailable: boolean;
  responseGuarantee: string;
  licensed: boolean;
  licenseNumber: string;
  insured: boolean;
  insuranceCoverage: string;
  hours: {
    weekday: string;
    weekend: string;
    emergency: string;
  };
}

export interface ServiceRequestFormData {
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  serviceCategory: string;
  urgency: 'emergency' | 'today' | 'this-week' | 'flexible';
  preferredTime: string;
  description: string;
  fileAttachedName?: string;
}
