import { ReviewItem } from '../types';

/**
 * Customer Reviews Placeholder Dataset
 * Note: These are structured sample reviews for design presentation.
 * Real verified client reviews can be substituted in this configuration file.
 */
export const customerReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    location: 'West End Hills',
    rating: 5,
    date: '3 days ago',
    category: 'Emergency',
    servicePerformed: 'Emergency Pipe Repair & Shut-off',
    content: 'A high-pressure cold water supply line burst in our laundry room on a Sunday morning. Water was gushing everywhere. Apex had a technician at our door in 28 minutes flat. He contained the flooding, replaced the ruptured copper elbow, and checked our water pressure. Outstanding emergency response.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'David L.',
    location: 'Northside Park',
    rating: 5,
    date: '1 week ago',
    category: 'Water Heater',
    servicePerformed: 'Tankless Water Heater Conversion',
    content: 'Our 14-year-old tank water heater finally started leaking. David and the crew gave us a transparent upfront quote to convert to a Navien tankless system. The install is works-of-art clean, the copper soldering is immaculate, and having endless hot water with teenagers in the house is a game changer.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    location: 'Downtown Metro',
    rating: 5,
    date: '2 weeks ago',
    category: 'Drain',
    servicePerformed: 'Main Drain Hydro-Jetting & Camera Inspection',
    content: 'We suffered recurring kitchen line backups for almost two years. Another company just ran a small snake and charged us every few months. Apex showed us the camera footage of thick grease scale, hydro-jetted the entire 60-foot line clean, and gave us a video copy. Has drained perfectly ever since.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Marcus B.',
    location: 'Eastgate District',
    rating: 5,
    date: '3 weeks ago',
    category: 'Repair',
    servicePerformed: 'Bathroom Fixture Upgrades & Cartridges',
    content: 'Replaced two leaky shower diverter valves and an old Kohler toilet with a quiet dual-flush model. On time, wore shoe booties inside, placed drop cloths everywhere, and left the bathroom cleaner than they found it. True craftsmen.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Patricia C.',
    location: 'Southwood Valley',
    rating: 5,
    date: '1 month ago',
    category: 'Repair',
    servicePerformed: 'Electronic Slab Leak Detection',
    content: 'Our water bill jumped from $80 to $340 out of nowhere. We suspected a leak under the slab. Apex brought acoustic listening gear and infrared cameras, pinpointed the leak in under 45 minutes under the hallway, and rerouted the pipe without breaking our hardwood floors.',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'James K.',
    location: 'Oakridge Terrace',
    rating: 5,
    date: '1 month ago',
    category: 'Emergency',
    servicePerformed: 'Late Night Main Sewer Backup Clear',
    content: 'Sewer started backing up into our downstairs shower at 10 PM. The technician arrived with heavy-duty rooter gear, cleared tree roots obstructing the clay pipe outside, and restored flow before any interior sewage damage happened. Reliable 24/7 service when you truly need it.',
    verified: true
  }
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 284,
  fiveStarPercentage: 96,
  recommendationRate: '99%',
  googleRating: 4.9,
  bbbRating: 'A+'
};
