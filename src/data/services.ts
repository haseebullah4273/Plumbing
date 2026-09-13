import { ServiceItem } from '../types';
import { siteImages } from './images';

export const servicesData: ServiceItem[] = [
  {
    id: 'ppr-service',
    slug: 'ppr-service',
    title: 'PPR / PPRC Pipe Service',
    shortDesc: 'Certified heat-fusion welding, hot & cold concealed water line installation, and tile-safe leak repair using premium Master, Popular, and Beta PPRC pipes.',
    fullDesc: 'PPR (Polypropylene Random Copolymer) piping is the gold standard for hot and cold drinking water systems in modern Pakistani homes and commercial plazas. Our plumbers are equipped with digital thermostatically controlled heat-fusion welding machines to ensure every elbow, tee, union, and valve joint fuses into a monolithic, 100% leak-proof connection that resists scale, high water temperature, and corrosion for over 50 years.',
    heroHeadline: 'Leak-Proof PPR / PPRC Concealed Piping for Modern Pakistani Homes',
    iconName: 'Flame',
    badge: 'Most Popular',
    image: siteImages.pprService,
    commonProblems: [
      'Under-tile concealed pipe joint leakage causing moisture seepage (Seem/Sem) in bedroom or drawing room walls',
      'Faulty fusion joints by inexperienced local plumbers causing pinhole hot water leaks',
      'Low water pressure from melted pipe narrowing during improper heat-welding',
      'Old metal pipes corroded inside walls needing whole-house PPR repiping',
      'Burst or cracked PPR pipe during winter frost or heavy water hammer surges'
    ],
    whatWeDo: [
      'Digital thermostatic heat-fusion welding for 20mm, 25mm, 32mm, 40mm, 50mm, and 63mm PPRC pipes',
      'Acoustic and pressure gauge leak detection to pinpoint hidden leaks without breaking all bathroom tiles',
      'Complete new construction bathroom, kitchen, and roof plumbing rough-ins',
      'Conversion of old rusted GI or leaking plastic pipes to certified PPRC lines',
      'Installation of heavy-duty brass-threaded PPR female elbows, ball valves, and bypass loops'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Inspection & Pressure Test',
        description: 'We test your water lines with a calibrated hydrostatic pressure pump to detect exact pressure drops and localize hidden leaks.'
      },
      {
        step: '02',
        title: 'Precision Fusion Welding',
        description: 'Using professional welding dies heated to exactly 260°C, we fuse authentic PPRC pipe and fittings with zero diameter reduction.'
      },
      {
        step: '03',
        title: 'Post-Install Hydrostatic Testing',
        description: 'Before closing any wall or tile, we hold lines under 10 bar test pressure for 2 hours to certify 100% leak-proof reliability.'
      }
    ],
    benefits: [
      'Uses genuine certified Pakistani pipe brands (Master, Popular, Beta, AGM)',
      '100% rust-free, lime-free, and resistant to scaling from hard bore water',
      'Withstands extreme hot geyser water temperatures up to 95°C',
      'Clean tile surgery — we only open the minimum required tiles to fix leaks'
    ],
    warningSigns: [
      'Blistering paint or white salt powder (shora) on walls backing bathrooms',
      'Continuous running sound of water inside walls when all taps are closed',
      'Sudden drop in shower mixer or kitchen tap water flow rate',
      'Water motor runs longer than usual to fill the overhead rooftop tank'
    ],
    pricingNote: 'Transparent pricing based on actual scope. We provide an exact upfront estimate in PKR before starting.',
    faqs: [
      {
        question: 'Which PPRC pipe brand do you recommend for Pakistani homes?',
        answer: 'We strictly recommend and install Tier-1 certified brands including Master PPRC, Popular Pipes, and Beta PPRC with PN-20 or PN-25 pressure ratings for both hot and cold lines to ensure lifetime durability.'
      },
      {
        question: 'Can you fix a leaking PPR pipe without breaking my entire bathroom tiles?',
        answer: 'Yes! We use acoustic listening sensors and moisture meters to isolate the exact leaking joint. Our plumbers then surgically cut out only 1 or 2 tiles, perform clean fusion welding or union replacement, and repair the spot neatly.'
      },
      {
        question: 'Is PPRC pipe safe for drinking water?',
        answer: 'Yes, PPRC is non-toxic, food-grade certified, does not impart any smell or taste, and does not leach heavy metals or rust into your drinking water.'
      }
    ]
  },
  {
    id: 'pvc-service',
    slug: 'pvc-service',
    title: 'PVC & UPVC Sanitary Drainage Service',
    shortDesc: 'Comprehensive sanitary drainage piping, roof rainwater lines (purnala), sewer manhole connections, and motorized blockage removal.',
    fullDesc: 'Drainage problems can lead to foul odors, unhealthy backflow, and severe structural damage. We design, install, and service complete PVC and UPVC sanitary drainage networks for Pakistani bungalows, apartments, and commercial facilities. From correctly graded bathroom floor traps (P-traps) to multi-story soil waste stacks, roof rainwater downspouts, and main sewerage manhole lines, our certified plumbers ensure rapid, self-cleaning gravity flow.',
    heroHeadline: 'Odor-Free, Self-Cleaning PVC & UPVC Sanitary Drainage Systems',
    iconName: 'Droplets',
    badge: 'Essential Sanitary',
    image: siteImages.pvcService,
    commonProblems: [
      'Foul sewer smells rising from floor drains and washbasin traps into bedrooms',
      'Choked underground PVC drain pipes causing car porch or garden sewage overflow',
      'Rainwater drainage pipes overflowing during heavy monsoon rains',
      'Cracked PVC pipes beneath concrete driveways leaking contaminated wastewater into soil',
      'Incorrect pipe slope causing recurring grease and hair blockage'
    ],
    whatWeDo: [
      'Complete UPVC waste and soil pipe installation (3-inch, 4-inch, 6-inch, and 8-inch)',
      'Heavy-duty motorized drain snake augering and unchoking for stubborn blockages',
      'Installation of deep-seal P-traps, multi-inlet floor traps, and anti-cockroach floor jali',
      'Main sewer line connection from residential inspection chambers to municipal main lines',
      'Roof rainwater drainage pipe (purnala) replacement and rainwater gutter layout'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Gradient & Trap Inspection',
        description: 'We check drainage levels and trap seals to identify air lock, poor slope, or physical debris obstruction.'
      },
      {
        step: '02',
        title: 'Heavy-Duty Unchoking or Piping',
        description: 'We deploy commercial electric snake machines or install high-impact UPVC solvent-cemented joints.'
      },
      {
        step: '03',
        title: 'Full Flow & Odor-Seal Test',
        description: 'We run high-volume flow tests to confirm immediate, vortex-free drainage and 100% water seal trap barrier against smells.'
      }
    ],
    benefits: [
      'Smooth inner wall prevents grease accumulation and sludge buildup',
      'Chemical-resistant solvent welding prevents toxic sewer gas escape',
      'High impact resistance against underground soil movement and vehicle load',
      'Equipped with specialized rotary drain snakes to unblock lines without digging'
    ],
    warningSigns: [
      'Gurgling sounds coming from toilet commode when sink is draining',
      'Slow draining water in kitchen sink or shower pan',
      'Unpleasant rotten egg or sewer gas smell inside modern bathrooms',
      'Water pooling around the inspection chamber or manhole cover outside'
    ],
    pricingNote: 'Fixed upfront pricing in PKR with zero hidden costs. Emergency drain unchoking available 24/7.',
    faqs: [
      {
        question: 'Why does our bathroom smell like sewerage even after cleaning?',
        answer: 'Foul bathroom odors almost always stem from dry, faulty, or missing water-seal P-traps beneath the floor drain or washbasin. We install certified deep-seal UPVC traps with anti-odor seals to permanently block sewer gases from entering your living space.'
      },
      {
        question: 'Do you clear blocked main sewerage pipes without digging up the driveway?',
        answer: 'Yes! We have commercial motorized drain cleaning augers (flexible spiral steel cables) that penetrate up to 100 feet through cleanout plugs to clear grease, roots, and silt without digging.'
      }
    ]
  },
  {
    id: 'gi-service',
    slug: 'gi-service',
    title: 'GI (Galvanized Iron) Pipe Service',
    shortDesc: 'Heavy-duty galvanized iron pipe threading, high-pressure pump lines, municipal water meter connection, and rusted iron line replacement.',
    fullDesc: 'Galvanized Iron (GI) pipes remain essential for heavy-load applications including municipal main line water connections, high-pressure suction motor lines, exterior exposed risers, and industrial installations across Pakistan. Our skilled plumbers provide on-site pipe threading, union jointing, gate valve fitting, and replacement of internal rusted iron pipes that restrict water flow or produce rusty discolored water.',
    heroHeadline: 'Precision GI Threading & Heavy-Duty Water Supply Plumbing',
    iconName: 'Wrench',
    badge: 'Heavy-Duty',
    image: siteImages.giService,
    commonProblems: [
      'Internal rust and corrosion choking 20+ year old GI water pipes',
      'Rusted union or nipple joints snapping at the water motor or street inlet',
      'Yellow or brown discolored water coming from bathroom and kitchen taps',
      'High-pressure motor suction lines leaking air and losing pump prime',
      'Stripped or weeping pipe threads on gate valves and brass check valves'
    ],
    whatWeDo: [
      'On-site precision pipe threading for 1/2-inch up to 3-inch medium & heavy GI pipes (IIL standards)',
      'Connection from Karachi municipal water supply line (KWSB / KW&SC) into residential sumps',
      'Suction line plumbing for water motors with brass non-return foot valves and air-bleed cocks',
      'Replacement of choked or leaking GI pipes with fresh GI or hybrid PPR transition fittings',
      'Installation of heavy brass ball valves, gate valves, and pressure reducing valves'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Threading & Preparation',
        description: 'Using heavy-duty ratcheting pipe dies, we cut crisp, deep British Standard Pipe (BSP) tapered threads on quality galvanized steel.'
      },
      {
        step: '02',
        title: 'PTFE & Compound Sealing',
        description: 'We pack threads with industrial PTFE thread seal tape and pipe joint compound for 100% high-pressure airtightness.'
      },
      {
        step: '03',
        title: 'Torque & Pressure Check',
        description: 'We tighten unions and fittings using heavy Swedish pipe wrenches and test under direct line pressure.'
      }
    ],
    benefits: [
      'Maximum physical strength against high external impact, sun UV, and vehicle load',
      'Withstands immense hydraulic surge pressure from high-power suction motors',
      'Uses genuine Class B and Class C heavy galvanized pipe (IIL / Prime)',
      'Precision jointing prevents suction line air-draw so motors pump at peak volume'
    ],
    warningSigns: [
      'Reddish-brown water flowing when you first open taps in the morning',
      'Water motor keeps humming or running but delivers almost zero water to the rooftop',
      'Visible rust weeping through threads on pipes near water motor or porch meter',
      'Noticeably decreasing water flow at second or third floor outlets'
    ],
    pricingNote: 'Competitive flat pricing in PKR. We quote per joint or complete project upfront.',
    faqs: [
      {
        question: 'Should I replace my rusted GI pipes with PPRC or fresh GI?',
        answer: 'For concealed internal bathroom and kitchen walls, we strongly recommend replacing rusted GI pipes with food-grade PPRC pipes, which never rust. For exposed outdoor suction lines from the street meter to your motor, heavy-gauge GI pipe provides superior physical durability.'
      },
      {
        question: 'Why does my water motor lose its prime (pani chhor jati hai)?',
        answer: 'This is usually caused by a tiny pinhole air leak on the GI suction pipe threads or a failing brass foot valve (non-return valve) in the underground tank. We reseal the threads and replace the valve to fix the problem permanently.'
      }
    ]
  },
  {
    id: 'water-motor-pump',
    slug: 'water-motor-pump',
    title: 'Water Motor & Submersible Pump Service',
    shortDesc: 'Installation, repair, and automatic float switch wiring for donkey suction pumps, 1HP/2HP centrifugal motors, and overhead tank systems.',
    fullDesc: 'In Pakistani cities, water motors (donkey pumps, centrifugal monoblock pumps, and submersible bore pumps) are the lifeline of every household. When your motor trips, makes grinding noises, or fails to lift water to the rooftop tank, our specialized technicians respond immediately. We handle pump installation, bearing replacements, capacitor fixes, brass non-return valves, and automatic tank float sensor switches.',
    heroHeadline: 'Never Run Out of Water: Motor & Pump Experts at Your Doorstep',
    iconName: 'ShieldCheck',
    badge: 'Vital Home Utility',
    image: siteImages.waterMotorService,
    commonProblems: [
      'Motor is running and humming loudly but not pulling water from municipal line',
      'Water overflowing from rooftop tank due to faulty or missing auto shut-off switch',
      'Burnt motor capacitor or tripping circuit breaker when pump is switched on',
      'Severe vibration and water leakage from motor mechanical seal or shaft',
      'Underground sump pump failing to start during heavy basement flooding'
    ],
    whatWeDo: [
      'Installation of 0.5 HP, 1 HP, 1.5 HP, and 2 HP water suction and lifting motors',
      'Automatic water level controller (float switch) installation to prevent tank overflows',
      'Mechanical shaft seal, impeller, and bearing replacement for noisy pumps',
      'Borehole submersible pump extraction, servicing, and electrical connection',
      'Complete bypass plumbing with bypass valves to fill ground tank directly'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Diagnostic Test',
        description: 'We test motor electrical voltage, amp draw, capacitor health, and verify suction line vacuum.'
      },
      {
        step: '02',
        title: 'Servicing & Alignment',
        description: 'We replace damaged seals, grease bearings, check impeller clearance, or fit a brand-new high-efficiency pump.'
      },
      {
        step: '03',
        title: 'Flow & Automation Verification',
        description: 'We verify strong lifting discharge to the rooftop tank and test the auto float switch cutoff sensor.'
      }
    ],
    benefits: [
      'Ensures reliable water supply even during low municipal pressure hours',
      'Auto-switch saves thousands of rupees on monthly electricity bills and prevents water loss',
      'Quiet vibration-damped mounting so motor noise does not disturb neighbors',
      '24/7 on-call emergency service for sudden motor breakdowns'
    ],
    warningSigns: [
      'High-pitched screeching or loud rattling sound from the motor pump',
      'Water motor casing feels burning hot to the touch within 5 minutes of running',
      'Water leaking from underneath the pump motor body onto the ground',
      'Continuous water overflowing from rooftop pipe down onto the street'
    ],
    pricingNote: 'Affordable fixed rates in PKR. All electrical & plumbing connections fully guaranteed.',
    faqs: [
      {
        question: 'How does an automatic float switch save electricity and water?',
        answer: 'An automatic float switch turns your water motor ON when the rooftop tank drops below 30% and turns it OFF the moment it reaches full capacity. This eliminates human error, prevents tank overflow damage, and saves electricity.'
      },
      {
        question: 'Can you install a pressure booster pump for low bathroom shower pressure?',
        answer: 'Yes! We install smart automatic pressure booster pumps with digital flow switches that instantly boost water pressure for rainfall showers and vanity taps whenever a faucet is turned on.'
      }
    ]
  },
  {
    id: 'water-tank-cleaning',
    slug: 'water-tank-cleaning',
    title: 'Water Tank Cleaning & Leakage Repair',
    shortDesc: 'Deep hygienic pressure cleaning, sludge removal, and chemical waterproofing for underground (zeer-e-zameen) and rooftop water tanks.',
    fullDesc: 'Overhead plastic tanks and underground concrete tanks in Pakistan accumulate silt, sand from municipal lines, bird droppings, algae, and dangerous bacteria over time. Our tank cleaning specialists pump out residual dirty water, scrub tank walls with high-pressure jets, treat with food-grade disinfectants, and apply specialized waterproof chemical coatings to permanently stop underground water seepage (sem) and tank leaks.',
    heroHeadline: 'Crystal Clean, Hygienic Water for Your Family’s Health',
    iconName: 'Sparkles',
    badge: 'Health & Hygiene',
    image: siteImages.waterTankCleaning,
    commonProblems: [
      'Mud, silt, or reddish sand settling at the bottom of taps and washing machines',
      'Underground concrete water tank leaking water into house foundation walls (seepage)',
      'Foul odor or brownish tint in shower and kitchen sink water',
      'Algae, slime, and bacteria growth inside rooftop plastic Sintex/Master tanks',
      'Broken tank lid allowing airborne dust, insects, and rainwater contamination'
    ],
    whatWeDo: [
      'High-pressure rotary wash and mechanical vacuum sludge evacuation',
      'Anti-bacterial chemical disinfection with chlorine and food-safe sanitizers',
      'Crack sealing and epoxy/elastomeric waterproofing for underground concrete tanks',
      'Replacement of broken plastic tank lids, float ball valves, and overflow pipes',
      'Installation of inline sediment cartridge pre-filters for whole-home water supply'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Draining & Sludge Extraction',
        description: 'We de-water the tank using high-flow submersible sludge pumps down to the very last millimeter.'
      },
      {
        step: '02',
        title: 'Deep Pressure Scrubbing',
        description: 'Technicians physically enter or reach into the tank to scrub all walls, ceiling, and floor with disinfectant.'
      },
      {
        step: '03',
        title: 'Sanitization & Leak Proofing',
        description: 'We apply waterproof sealing coats to any cracks, sterilize with UV/sanitizer, and rinse thoroughly before refilling.'
      }
    ],
    benefits: [
      'Protects your family against waterborne diseases, typhoid, and skin irritation',
      'Prevents costly foundation weakening and dampness caused by underground tank leaks',
      'Restores clear, odor-free water flow throughout your entire plumbing system',
      'Fast 2-hour completion with minimal household disruption'
    ],
    warningSigns: [
      'Tap water looks yellow, cloudy, or has a murky sediment deposit',
      'Your water motor fills the underground tank but water levels drop overnight without usage',
      'Damp, bubbling paint on exterior boundary walls near underground water tank',
      'It has been more than 6 months since your last professional tank cleaning'
    ],
    pricingNote: 'Fixed package rates in PKR according to tank capacity (500 gal, 1000 gal, 2000 gal).',
    faqs: [
      {
        question: 'How often should water tanks be cleaned in Pakistan?',
        answer: 'Due to sand, silt, and rust carried in municipal water lines, health authorities recommend cleaning both underground and overhead tanks every 4 to 6 months.'
      },
      {
        question: 'Can you stop water seepage from an underground concrete tank without rebuilding it?',
        answer: 'Yes! We apply specialized polymer-modified waterproof cementitious and epoxy coatings on the inside of the tank that form an impermeable barrier, completely sealing micro-fissures and preventing water loss.'
      }
    ]
  },
  {
    id: 'geyser-service',
    slug: 'geyser-service',
    title: 'Geyser & Water Heater Installation',
    shortDesc: 'Expert fitting, gas leak inspection, thermostat replacement, and descaling for instant gas geysers, storage geysers, and electric heaters.',
    fullDesc: 'Hot water during Pakistani winters is essential. We provide professional installation, seasonal maintenance, and repairs for all leading Pakistani geyser brands including Canon, NasGas, Singer, Boss, and Super Asia. Whether you need a new instant gas geyser fitted with safety exhaust, an electric geyser element replaced, or a gas thermostat tuned for maximum heating efficiency, our technicians ensure total safety and comfort.',
    heroHeadline: 'Safe, Energy-Efficient Hot Water for Chilly Pakistani Winters',
    iconName: 'Flame',
    badge: 'Winter Ready',
    image: siteImages.geyserService,
    commonProblems: [
      'Instant gas geyser won’t ignite or turns off after 10 seconds of shower use',
      'Gas smell around geyser unit creating dangerous hazard for the household',
      'Electric geyser tripping the main breaker or failing to heat water',
      'Heavy calcium scale buildup blocking geyser copper heat exchanger coils',
      'Leaking safety pressure relief valve or rusted storage geyser tank'
    ],
    whatWeDo: [
      'New instant gas geyser installation with rigid flue exhaust ventilation pipes',
      'Gas pipe connection, bubble leak testing, and gas governor regulation',
      'Replacement of magnetic gas valves, ignition micro-switches, and thermocouples',
      'Electric water heater element, thermostat, and sacrificial anode replacement',
      'Installation of brass mixing valves and insulated PPR hot water lines'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Safety & Gas Line Check',
        description: 'We test gas pressure and exhaust ventilation to ensure zero carbon monoxide buildup in enclosed bathrooms.'
      },
      {
        step: '02',
        title: 'Precision Fitting & Mounting',
        description: 'We mount units securely on solid masonry anchors and connect heavy-duty flexible steel braided hoses.'
      },
      {
        step: '03',
        title: 'Flame Tuning & Leak Test',
        description: 'We verify clean blue flame combustion, zero gas leakage with soap detection, and calibrate optimal water temperature.'
      }
    ],
    benefits: [
      'Eliminates dangerous gas leaks with thorough safety testing',
      'Saves gas and electricity with precision thermostat tuning',
      'Fast same-day service before and during peak winter season',
      'Full guarantee on all spare parts and labor in Pakistani Rupees'
    ],
    warningSigns: [
      'Yellow or orange flickering flame instead of crisp blue flame on your geyser',
      'Faint smell of natural gas (Sui Gas) or LPG near the geyser or kitchen',
      'Water temperature fluctuates between boiling hot and freezing cold unexpectedly',
      'Metallic knocking sounds or rumbling inside storage water heater'
    ],
    pricingNote: 'Transparent flat PKR service fee. Standard instant geyser installation starting at affordable rates.',
    faqs: [
      {
        question: 'Is it safe to install an instant gas geyser inside an attached bathroom?',
        answer: 'We strictly recommend installing gas geysers either outside in the open galley/balcony or ensuring proper metallic exhaust ducting leading to the outdoors to avoid dangerous oxygen depletion.'
      },
      {
        question: 'Why does my instant geyser not ignite even when the tap is on?',
        answer: 'The most common causes are dead 1.5V igniter batteries, low water pressure failing to trigger the water flow sensor diaphragm, or clogged inlet filter screens. Our technician diagnoses and resolves this in minutes.'
      }
    ]
  }
];
