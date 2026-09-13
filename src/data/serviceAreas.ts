import { ServiceArea } from '../types';

export const serviceAreasData: ServiceArea[] = [
  {
    id: 'dha-karachi',
    name: 'DHA Karachi (Phases 1 to 8)',
    county: 'District South, Karachi',
    zipCodes: ['75500', 'Phase-1', 'Phase-2', 'Phase-5', 'Phase-6', 'Phase-8'],
    avgResponseMinutes: 20,
    featured: true,
    description: 'Rapid doorstep plumbing services across all DHA Karachi phases. Specialists in concealed PPRC leak repairs, luxury bathroom mixers, booster pump installations, and roof tank automation.',
    majorStreets: ['Khayaban-e-Shahbaz', 'Khayaban-e-Ittehad', 'Khayaban-e-Shamsheer', '26th Street', 'Khayaban-e-Hafiz']
  },
  {
    id: 'clifton-karachi',
    name: 'Clifton (Blocks 1 to 9)',
    county: 'District South, Karachi',
    zipCodes: ['75600', 'Block-1', 'Block-2', 'Block-5', 'Block-7', 'Block-9'],
    avgResponseMinutes: 25,
    featured: true,
    description: 'Coastal Karachi sanitary experts. Fast repair for high-rise apartment plumbing, rust-resistant GI pipe replacements, underground water sump waterproofing, and pressure pump diagnostics.',
    majorStreets: ['Boat Basin', 'Khayaban-e-Iqbal', 'Near Bilawal House', 'Neelam Point Road', 'Marine Drive']
  },
  {
    id: 'gulshan-e-iqbal',
    name: 'Gulshan-e-Iqbal & Gulshan Blocks',
    county: 'District East, Karachi',
    zipCodes: ['75300', 'Block-1', 'Block-5', 'Block-10', 'Block-13D', 'Block-15'],
    avgResponseMinutes: 30,
    featured: true,
    description: 'Complete plumbing maintenance for residential bungalows and apartments. Specialized in KWSB suction motor repairs, automatic float switches, and UPVC drainage unchoking.',
    majorStreets: ['University Road', 'Rashid Minhas Road', 'Allama Shabbir Ahmed Usmani Road', 'Disco Bakery Chowk']
  },
  {
    id: 'pechs-bahadurabad',
    name: 'PECHS, Tariq Road & Bahadurabad',
    county: 'District East, Karachi',
    zipCodes: ['75400', 'PECHS-2', 'PECHS-6', 'Bahadurabad', 'SMCHS'],
    avgResponseMinutes: 25,
    featured: true,
    description: 'Expert residential and commercial plumbing. Concealed bathroom wall leakage (seem) detection, geyser installation, Muslim shower repairs, and sanitary ware upgrades.',
    majorStreets: ['Shahrah-e-Faisal', 'Tariq Road', 'Allama Iqbal Road', 'Bahadur Shah Zafar Road', 'Khalid Bin Walid Road']
  },
  {
    id: 'gulistan-e-johar',
    name: 'Gulistan-e-Johar & Saadi Town',
    county: 'District East, Karachi',
    zipCodes: ['75290', 'Block-1', 'Block-12', 'Block-14', 'Block-19', 'Saadi-Town'],
    avgResponseMinutes: 30,
    featured: false,
    description: 'Prompt on-call plumbers for apartment complexes and family homes. Water tank deep cleaning, motor capacitor replacement, and sewer line blockage removal.',
    majorStreets: ['Johar Chowrangi', 'Kamran Chowrangi', 'Pehlwan Goth Road', 'Professors Society', 'University Road Extension']
  },
  {
    id: 'north-nazimabad',
    name: 'North Nazimabad & Nazimabad',
    county: 'District Central, Karachi',
    zipCodes: ['74600', '74700', 'Block-A', 'Block-H', 'Block-L', 'Nazimabad-3'],
    avgResponseMinutes: 35,
    featured: false,
    description: 'Trusted plumbing support for independent houses. Replacement of aged GI galvanized pipes with certified PPRC lines, underground water reservoir sealing, and geyser servicing.',
    majorStreets: ['Shahrah-e-Humayun', 'KDA Chowrangi', 'Khadija Girls College Road', 'Five Star Chowrangi', 'Gol Market']
  },
  {
    id: 'bahria-town-karachi',
    name: 'Bahria Town Karachi & Malir Cantt',
    county: 'Malir, Karachi',
    zipCodes: ['75330', 'Precinct-1', 'Precinct-10', 'Precinct-12', 'Malir-Cantt'],
    avgResponseMinutes: 35,
    featured: false,
    description: 'Dedicated team for Bahria Town Karachi precincts and Malir Cantt. Modern sanitary fittings, instant water heater tuning, booster pumps, and preventive maintenance.',
    majorStreets: ['Jinnah Avenue', 'Main Boulevard Precinct 1', 'Midway Commercial', 'Falcon Complex', 'DOHS']
  }
];
