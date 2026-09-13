import { ServiceArea } from '../types';

export const serviceAreasData: ServiceArea[] = [
  {
    id: 'metro-valley',
    name: 'Metro Valley (Central)',
    county: 'Valley County',
    zipCodes: ['94016', '94015', '94014', '94017'],
    avgResponseMinutes: 25,
    featured: true,
    description: 'Our primary dispatch headquarters. Immediate response units stationed on standby 24/7 for residential and commercial plumbing emergencies.',
    majorStreets: ['Highland Blvd', 'Main St', 'Valley Parkway', 'El Camino Real']
  },
  {
    id: 'northside-park',
    name: 'Northside Park & Highlands',
    county: 'Valley County',
    zipCodes: ['94020', '94022', '94024'],
    avgResponseMinutes: 30,
    featured: true,
    description: 'Comprehensive residential plumbing services specializing in historic home repiping, tankless conversions, and fixture installations.',
    majorStreets: ['North Crest Ave', 'Hillcrest Drive', 'Parkway Boulevard']
  },
  {
    id: 'west-end-hills',
    name: 'West End Hills & Ridgeway',
    county: 'Valley County',
    zipCodes: ['94030', '94032', '94035'],
    avgResponseMinutes: 35,
    featured: true,
    description: 'High-elevation water pressure diagnostics, booster pump installations, and whole-house pressure regulation valves.',
    majorStreets: ['Skyline Way', 'Ridge View Road', 'Canyon Drive']
  },
  {
    id: 'downtown-metro',
    name: 'Downtown Commercial & Lofts',
    county: 'Valley County',
    zipCodes: ['94001', '94002', '94003'],
    avgResponseMinutes: 25,
    featured: true,
    description: 'Multi-story drain snaking, high-efficiency water heater maintenance, backflow certification, and rapid leak mitigation.',
    majorStreets: ['Commerce Ave', 'Broadway', '4th Street', 'Market Way']
  },
  {
    id: 'eastgate-district',
    name: 'Eastgate & Meadowbrook',
    county: 'Valley County',
    zipCodes: ['94040', '94041', '94043'],
    avgResponseMinutes: 35,
    featured: false,
    description: 'Trenchless sewer line replacements, tree-root intrusion removal, and preventative maintenance for suburban single-family homes.',
    majorStreets: ['Eastgate Parkway', 'Meadow Lane', 'Sunrise Ave']
  },
  {
    id: 'southwood-valley',
    name: 'Southwood Valley & Orchards',
    county: 'Valley County',
    zipCodes: ['94050', '94051', '94054'],
    avgResponseMinutes: 40,
    featured: false,
    description: 'Non-invasive slab leak detection, irrigation line tie-in repairs, and whole-home water filtration & softener systems.',
    majorStreets: ['Orchard Road', 'Southwood Blvd', 'Plum Tree Way']
  }
];
