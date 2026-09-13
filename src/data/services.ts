import { ServiceItem } from '../types';
import { siteImages } from './images';

export const servicesData: ServiceItem[] = [
  {
    id: 'emergency-plumbing',
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortDesc: 'Rapid 24/7 on-site emergency dispatch for burst pipes, severe flooding, overflowing drains, and sudden water loss.',
    fullDesc: 'When water is flooding your floors or sewage is backing into your tubs, waiting until regular business hours causes catastrophic property damage. Our on-call certified emergency plumbing team arrives equipped with industrial extraction pumps, pipe freezing kits, replacement fittings, and high-resolution camera tools to stop leaks and restore safety immediately.',
    heroHeadline: '24/7 Rapid Response When Minutes Matter',
    iconName: 'AlertTriangle',
    badge: 'Immediate Dispatch',
    isEmergency: true,
    image: siteImages.emergencyPlumbing,
    commonProblems: [
      'Burst or frozen water supply lines under high pressure',
      'Sewage backing up into tubs, toilets, or floor drains',
      'Severe flooding from fractured washing machine hoses or water heater tanks',
      'Sudden complete loss of residential water supply',
      'Gas line smell or suspected gas water heater leak (requires immediate shut-off)',
      'Uncontrollable leaking underneath slabs or inside drywall'
    ],
    whatWeDo: [
      'Immediate main water shut-off verification and emergency containment',
      'Pipe freeze isolation and rapid high-pressure copper/PEX section replacement',
      'Emergency hydro-flushing of main sewer obstruction blockages',
      'Temporary bypass installation to keep drinking water flowing safely',
      'Complete moisture scanning behind walls with FLIR thermal imaging'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Instant Dispatch',
        description: 'Our 24/7 dispatcher answers live, guides you through emergency shut-off, and sends the nearest master technician immediately.'
      },
      {
        step: '02',
        title: 'On-Site Containment',
        description: 'We arrive with fully stocked trucks, halt water ingress within minutes, and assess structural containment.'
      },
      {
        step: '03',
        title: 'Permanent Repair',
        description: 'We execute permanent code-compliant repairs with high-grade copper or Uponor PEX with a written warranty.'
      }
    ],
    benefits: [
      'Guaranteed rapid arrival across the service territory',
      'Transparent flat emergency rates with upfront authorization',
      'Stocked rolling warehouses with 98% first-visit fix rate',
      'Licensed, bonded, background-checked master plumbers'
    ],
    warningSigns: [
      'Sudden drop in entire house water pressure accompanied by hissing behind walls',
      'Water meter triangle dial spinning rapidly when all fixtures are turned off',
      'Warm or hot spots developing on ground floor concrete slabs',
      'Soggy pooling water bubbling up in front yards or basements'
    ],
    pricingNote: 'Transparent upfront diagnostic quote provided before any tools touch your pipes. No surprise overtime charges.',
    faqs: [
      {
        question: 'What should I do immediately while waiting for the emergency plumber?',
        answer: 'Locate your main water shut-off valve (typically located in the basement, garage, or near your water meter curb) and turn it clockwise 90 degrees or until tight. Switch off circuit breakers near standing water, and keep children and pets away from wet zones.'
      },
      {
        question: 'Do you charge extra for late-night or weekend emergency calls?',
        answer: 'We provide clear, upfront pricing before beginning any emergency work. We explain the complete scope and diagnostic results so you can authorize the exact cost without surprises.'
      },
      {
        question: 'Can you work directly with my homeowner insurance provider?',
        answer: 'Yes. We document all water intrusion, photograph failed pipe segments, and provide comprehensive line-item diagnostic reports directly acceptable by insurance adjusters.'
      }
    ]
  },
  {
    id: 'drain-cleaning',
    slug: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro-Jetting',
    shortDesc: 'Eliminate stubborn clogs, tree roots, grease buildup, and recurring slow drains with commercial hydro-jetting and motorized snaking.',
    fullDesc: 'Store-bought chemical drain cleaners eat away at your metal pipes and only bore small pinholes through sludge. Our commercial hydro-jetting services utilize 4,000 PSI high-velocity water streams to scour pipe walls clean of decades of grease, mineral scale, and invasive root intrusions, restoring full gravity drainage flow.',
    heroHeadline: 'Restore Maximum Flow to Sluggish Drains',
    iconName: 'Droplets',
    badge: 'Hydro-Jetting Available',
    image: siteImages.drainCleaning,
    commonProblems: [
      'Gurgling noises from sink drains when the washing machine drains',
      'Water pooling around your feet during morning showers',
      'Foul sour odors emanating from kitchen garbage disposal lines',
      'Multiple slow-draining fixtures across the entire ground floor',
      'Recurring clogs despite multiple chemical cleaner applications',
      'Grease coagulation in kitchen main discharge lines'
    ],
    whatWeDo: [
      'High-Definition CCTV video inspection of interior drain walls',
      'Industrial power snaking with specialty cutting heads for root extraction',
      '4,000 PSI commercial hydro-jet scouring of grease and scale',
      'Enzymatic biological pipe conditioning treatment to prevent future buildup',
      'Main sewer line cleanout cap replacement and sealing'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Video Inspection',
        description: 'We feed a self-leveling HD fiber-optic camera through your cleanout to see the exact obstruction type and location.'
      },
      {
        step: '02',
        title: 'Precision Clearing',
        description: 'Depending on the obstruction, we deploy mechanical augers or hydro-jetting nozzles tailored to your pipe material.'
      },
      {
        step: '03',
        title: 'Post-Clean Verification',
        description: 'We run a secondary camera check to verify 100% pipe diameter restoration and provide video footage for your records.'
      }
    ],
    benefits: [
      'Safe for all PVC, ABS, cast iron, and clay pipe materials',
      'Eliminates foul sewage and grease odors at the source',
      'Extends the lifespan of your drainage system by decades',
      '90-day no-clog satisfaction guarantee on hydro-jetted lines'
    ],
    warningSigns: [
      'Water backing up into the shower when the toilet is flushed',
      'Bubbles rising in the toilet bowl when running adjacent sinks',
      'Fruit flies or sewer gnats gathering near basement floor drains'
    ],
    pricingNote: 'Flat-rate standard drain clearing packages starting with camera diagnostic included on qualifying services.',
    faqs: [
      {
        question: 'Is hydro-jetting safe for older cast iron or clay pipes?',
        answer: 'Yes, because our master technicians always conduct a preliminary fiber-optic camera inspection to verify structural pipe integrity and tune the pressure regulators safely.'
      },
      {
        question: 'Why avoid chemical drain cleaners from hardware stores?',
        answer: 'Chemical cleaners rely on sulfuric acid or caustic sodium hydroxide which generates intense thermal heat. This warps PVC joints, corrodes vintage cast iron, and creates hazardous conditions for technicians.'
      }
    ]
  },
  {
    id: 'water-heater',
    slug: 'water-heater',
    title: 'Water Heater Repair & Installation',
    shortDesc: 'Fast diagnostics, element replacement, tank flushing, and high-efficiency tankless conversions for uninterrupted hot water.',
    fullDesc: 'Whether you wake up to an ice-cold morning shower, notice rust-colored water, or are looking to convert to an endlessly flowing on-demand tankless system, our factory-certified technicians handle all major electric, natural gas, and propane water heating equipment.',
    heroHeadline: 'Dependable, Endless Hot Water When You Need It',
    iconName: 'Flame',
    badge: 'Same-Day Replacement',
    image: siteImages.waterHeater,
    commonProblems: [
      'Lukewarm water that runs out after only 5 minutes',
      'Loud popping, knocking, or boiling sounds inside the tank',
      'Rusty, discolored, or metallic-smelling hot water',
      'Moisture pooling in the safety drain pan beneath the unit',
      'Pilot light repeatedly blowing out or error codes flashing',
      'Units older than 10-12 years nearing catastrophic tank failure'
    ],
    whatWeDo: [
      'Thermostat and thermocouple testing and precise calibration',
      'Sacrificial anode rod inspection and replacement to stop tank corrosion',
      'Complete sediment flushing and descaling of heating coils',
      'Temperature and pressure relief (T&P) valve safety certification',
      'Complete turnkey tankless upgrade consultations and gas line sizing'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Diagnostic Audit',
        description: 'We test electrical resistance on heating elements, measure gas line pressure, and test thermostat tolerances.'
      },
      {
        step: '02',
        title: 'Repair vs. Replace Advice',
        description: 'We calculate repair costs vs unit age to recommend the most economical long-term path without aggressive upselling.'
      },
      {
        step: '03',
        title: 'Clean Installation',
        description: 'We install high-efficiency units with thermal expansion tanks, code-compliant earthquake strapping, and safe venting.'
      }
    ],
    benefits: [
      'Authorized warranty service for Bradford White, Rheem, Navien, and Rinnai',
      'Energy-efficient tankless systems save up to 30% on annual gas bills',
      'Same-day replacement available with old unit haul-away and disposal',
      '10-year manufacturer tank warranties with labor guarantees'
    ],
    warningSigns: [
      'Visible rust streaks on the outer steel casing of the heater',
      'Popping sounds like popcorn inside the tank caused by boiling trapped beneath sediment',
      'Damp drywall or warped flooring near your water heater closet'
    ],
    pricingNote: 'Transparent flat pricing on standard repairs. Free upfront estimates on all new tank and tankless installations.',
    faqs: [
      {
        question: 'Should I repair or replace my water heater?',
        answer: 'If your water heater is under 8 years old and the repair is a simple thermocouple, element, or valve, repair is ideal. If the tank itself is leaking, over 10 years old, or heavily rusted, replacement is strongly recommended.'
      },
      {
        question: 'What are the benefits of switching to a tankless water heater?',
        answer: 'Tankless water heaters heat water continuously on demand, meaning you never run out of hot water. They also occupy 80% less space mounted on a wall and last 20+ years compared to 10-12 years for storage tanks.'
      }
    ]
  },
  {
    id: 'leak-detection',
    slug: 'leak-detection',
    title: 'Leak Detection & Pipe Repair',
    shortDesc: 'Non-invasive electronic acoustic listening and thermal imaging to find hidden leaks inside slabs, walls, and foundations.',
    fullDesc: 'A tiny pinhole leak inside drywall or under a concrete slab foundation can waste thousands of gallons of water each month and trigger black mold colonies before you even notice dampness. We utilize state-of-the-art non-invasive acoustic listening sensors, FLIR thermal imaging cameras, and helium tracer gas to pinpoint leaks without needlessly tearing up your flooring.',
    heroHeadline: 'Pinpoint Hidden Leaks Before Structural Damage Strikes',
    iconName: 'Search',
    badge: 'Non-Invasive Tech',
    image: siteImages.leakDetection,
    commonProblems: [
      'Unexplained spikes on your monthly municipal water utility bill',
      'Sound of trickling or running water when every faucet is shut',
      'Warped hardwood planks, buckling laminate, or damp carpet',
      'Moldy musty odors behind baseboards or inside linen closets',
      'Warm hot spots noticeable under tiled or carpeted concrete slabs',
      'Cracks appearing in drywall corners or foundation perimeter'
    ],
    whatWeDo: [
      'Electronic amplified acoustic subterranean pipe frequency tracing',
      'FLIR infrared thermographic scanning for thermal anomalies',
      'Pressure decay testing on isolated cold and hot distribution lines',
      'Targeted, minimal-invasive access opening directly above the leak point',
      'Epoxy pipe relining and permanent PEX bypass line installations'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Pressure Isolation',
        description: 'We test your main line and split indoor manifolds to determine exactly which supply loop is losing hydrostatic pressure.'
      },
      {
        step: '02',
        title: 'Acoustic & Thermal Mapping',
        description: 'Using ground microphones and infrared thermal optics, we trace pipe conduits to mark the precise leak spot to within inches.'
      },
      {
        step: '03',
        title: 'Surgical Repair',
        description: 'Rather than trenching whole rooms, we perform surgical spot repairs or routed overhead reroutes with minimal cosmetic disruption.'
      }
    ],
    benefits: [
      'Saves thousands in unnecessary demolition and restoration costs',
      'Prevents dangerous mold proliferation and wood rot in walls',
      'Insurance claim ready diagnostic reports with photographic evidence',
      'Complete post-repair hydrostatic pressure hold testing'
    ],
    warningSigns: [
      'The municipal water meter dial spins while all faucets are off',
      'Paint bubbling or peeling off walls near plumbing chases',
      'Patches of lawn that remain wet and green during hot dry spells'
    ],
    pricingNote: 'Flat-rate non-invasive diagnostic leak detection fees with transparent repair estimates provided on-site.',
    faqs: [
      {
        question: 'Will you have to break my tiles or hardwood to find the leak?',
        answer: 'No! Our acoustic and thermal imaging equipment detects water sound frequencies and heat differentials straight through tile, concrete, and hardwood without any drilling or demolition during diagnosis.'
      },
      {
        question: 'What is a slab leak?',
        answer: 'A slab leak is a rupture in the copper or PEX water supply pipes installed beneath the poured concrete foundation of your home. If left unchecked, it erodes foundation subsoil and can cause structural settling.'
      }
    ]
  },
  {
    id: 'sewer-line',
    slug: 'sewer-line',
    title: 'Sewer Line Repair & Replacement',
    shortDesc: 'Trenchless pipe bursting, relining, and camera inspections that protect your lawn, driveway, and landscaping.',
    fullDesc: 'Broken, bellied, or root-choked sewer main lines used to mean having an excavator dig an ugly 8-foot trench across your pristine lawn and driveway. We specialize in modern trenchless sewer replacement technologies, including Cured-In-Place Pipe (CIPP) relining and pipe bursting, which install brand new seamless pipes using only two small access pits.',
    heroHeadline: 'Modern Trenchless Sewer Solutions That Spare Your Yard',
    iconName: 'ShieldCheck',
    badge: 'Trenchless Available',
    image: siteImages.sewerLine,
    commonProblems: [
      'Frequent sewage backups occurring in lowest level fixtures',
      'Aggressive tree roots penetrating clay or cast iron pipe joints',
      'Soggy sunken depressions or foul odors in your front lawn',
      'Collapsed, cracked, or offset pipe transitions beneath driveways',
      'Cast iron channeling where bottom pipe walls have rusted away',
      'Multiple simultaneous fixture clogs across the home'
    ],
    whatWeDo: [
      'Full continuous HD video reel inspection with depth beacon transmitter',
      'Trenchless CIPP epoxy sleeve relining that creates a pipe within a pipe',
      'Hydraulic pipe bursting to pull seamless HDPE pipe through old lines',
      'Hydro-scrubbing descaling to remove heavy rust tuberculation',
      'City cleanout installation for straightforward future maintenance access'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Video Diagnostics',
        description: 'We run a high-resolution color camera through the cleanout, measuring exact footage, depth, and structural defects.'
      },
      {
        step: '02',
        title: 'Trenchless Engineering',
        description: 'We evaluate if epoxy lining or pipe bursting provides the strongest long-term solution with minimal landscape impact.'
      },
      {
        step: '03',
        title: 'Seamless Installation',
        description: 'We install seamless joint-free HDPE or epoxy, pull permits, schedule municipal inspection, and test flow.'
      }
    ],
    benefits: [
      'Protects expensive concrete driveways, mature trees, and pavers',
      'Seamless 50+ year life expectancy resistant to tree root intrusion',
      'Completed in 1-2 days compared to a week of open trenching',
      'Meets and exceeds all municipal plumbing and building codes'
    ],
    warningSigns: [
      'Distinct sewer gas smells outdoors near the front path or in the basement',
      'Lush green patches of grass growing far faster than the rest of the lawn',
      'Gurgling sounds in toilets when the washing machine drains'
    ],
    pricingNote: 'Free in-depth video inspection consultation for homeowners facing sewer repairs, with detailed written estimates.',
    faqs: [
      {
        question: 'What is trenchless sewer repair?',
        answer: 'Trenchless sewer repair allows us to replace or line damaged underground sewer pipes without digging a long open trench across your yard. We either pull a new pipe through the old one or line the existing pipe with epoxy resin.'
      },
      {
        question: 'How long does a trenchless sewer replacement last?',
        answer: 'Modern HDPE pipe and seamless cured-in-place epoxy liners have an estimated design lifespan of 50 to 100 years and are completely impervious to root penetration.'
      }
    ]
  },
  {
    id: 'faucet-repair',
    slug: 'faucet-repair',
    title: 'Faucet & Fixture Repair & Install',
    shortDesc: 'Fix annoying drippy faucets, running toilets, low pressure valves, garbage disposals, and install modern designer fixtures.',
    fullDesc: 'A single dripping faucet can waste over 3,000 gallons of water a year, while a silent running toilet flapper can double your monthly water bill. We repair and install all top brands including Moen, Delta, Kohler, Grohe, and American Standard, ensuring quiet operation, leak-free seals, and optimal water pressure.',
    heroHeadline: 'End Annoying Drips & Upgrade Your Living Comfort',
    iconName: 'Wrench',
    badge: 'All Major Brands',
    image: siteImages.faucetRepair,
    commonProblems: [
      'Persistent steady dripping from kitchen or bathroom faucets',
      'Toilets that periodically run or whistle throughout the night',
      'Weak or sputtering water pressure from showerheads and aerators',
      'Humming garbage disposals that are jammed or leaking from bottom seals',
      'Corroded under-sink shut-off valves that will not turn off',
      'Loose, rocking toilet bases that damage subfloor wax rings'
    ],
    whatWeDo: [
      'Cartridge, O-ring, and ceramic disc replacements for all brands',
      'Complete toilet rebuilds with fluidmaster valves and waxless seals',
      'High-torque InSinkErator garbage disposal installation with quiet shields',
      'Quarter-turn ball valve supply stop upgrades under all sinks',
      'Customer-supplied designer faucet and rain showerhead installations'
    ],
    ourProcess: [
      {
        step: '01',
        title: 'Precision Assessment',
        description: 'We inspect the internal cartridge, valve seat, and supply line connections to identify wear and corrosion.'
      },
      {
        step: '02',
        title: 'Factory-Grade Parts',
        description: 'We use genuine manufacturer parts (OEM) or heavy-duty brass components rather than cheap generic plastic fittings.'
      },
      {
        step: '03',
        title: 'Pressure & Seal Testing',
        description: 'We test for dynamic pressure, water hammer, and zero micro-drip tolerances under full household pressure.'
      }
    ],
    benefits: [
      'Instantly halts water waste and lowers monthly utility expenses',
      'Genuine factory parts guaranteed for quiet, smooth operation',
      'Clean shoe covers, drop cloths, and spotless cleanup after every job',
      'One-year parts and labor warranty on all fixture services'
    ],
    warningSigns: [
      'Stains or dampness on cabinet flooring underneath your sink',
      'Ghost flushing where the toilet refills randomly without being used',
      'Rust flakes or white calcium buildup coating your aerator screens'
    ],
    pricingNote: 'Upfront flat pricing per fixture. Multi-fixture discount packages available during the same visit.',
    faqs: [
      {
        question: 'Can you install a faucet or fixture that I bought myself online or at a store?',
        answer: 'Absolutely! We frequently install customer-supplied faucets, vanity sinks, designer shower systems, and bidets, and we guarantee the quality of our labor and piping connections.'
      },
      {
        question: 'Why does my toilet occasionally make a running sound by itself?',
        answer: 'This is commonly known as a "phantom flush." It usually means the rubber flapper valve inside the tank has deteriorated or warped, slowly leaking water into the bowl until the fill valve kicks on to replenish the tank.'
      }
    ]
  }
];
