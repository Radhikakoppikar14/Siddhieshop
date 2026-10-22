export interface CableProduct {
  id: string;
  name: string;
  code: string;
  category: 
    | 'power-control' 
    | 'armoured-ht' 
    | 'data-instrumentation' 
    | 'house-panel-wires' 
    | 'specialty-av' 
    | 'switchgear-accessories';
  categoryLabel: string;
  brand: string;
  image: string;
  shortDesc: string;
  conductor: string;
  voltageGrade: string;
  insulation: string;
  armoring: string;
  sheath: string;
  tempRange: string;
  standards: string[];
  coreRange: string;
  sizeRange: string;
  featured: boolean;
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const CABLE_PRODUCTS: CableProduct[] = [
  // 1. Power & Flexible Control Cables
  {
    id: 'lapp-olflex-classic-110',
    name: 'LAPP ÖLFLEX® CLASSIC 110 Control Cable',
    code: 'SK-OLF-110',
    category: 'power-control',
    categoryLabel: 'Power & Flexible Control',
    brand: 'Lapp Group',
    image: '/src/assets/images/power_control_cables_1792651590664.jpg',
    shortDesc: 'VDE-registered PVC control cable for flexible use and fixed installation under medium mechanical stress in dry, damp, or wet rooms.',
    conductor: 'Bare copper wire strands, Class 5 fine-wired (IEC 60228)',
    voltageGrade: '300 / 500 V (Test voltage: 4000 V)',
    insulation: 'Special PVC compound LAPP P8/1',
    armoring: 'Unarmoured / Oil-resistant flexible jacket',
    sheath: 'PVC, silver-grey (RAL 7001), flame retardant to IEC 60332-1-2',
    tempRange: '-40°C to +80°C (fixed) / -5°C to +70°C (flexing)',
    standards: ['VDE Reg. No. 7030', 'IEC 60332-1-2', 'CE', 'RoHS', 'EAC'],
    coreRange: '2 to 100 Cores (Numbered cores with gn/ye earth)',
    sizeRange: '0.50 mm² to 35.0 mm²',
    featured: true,
    applications: [
      'Machine tool manufacturing & CNC machining centers',
      'Automotive assembly conveyors and robotics',
      'Control panels & HVAC switchboard wiring',
      'Packaging machinery and automated lines'
    ],
    specifications: [
      { label: 'Conductor Resistance', value: 'According to IEC 60228 Class 5' },
      { label: 'Minimum Bending Radius', value: '4x outer diameter (fixed), 10x (flexing)' },
      { label: 'Oil Resistance', value: 'High chemical resistance to industrial oils' },
      { label: 'Flame Retardance', value: 'Self-extinguishing according to IEC 60332-1-2' },
      { label: 'Authorized Origin', value: 'Direct Authorized Stockist (Lapp Germany)' }
    ]
  },
  {
    id: 'lapp-olflex-fd-855-cp',
    name: 'LAPP ÖLFLEX® FD 855 CP Continuous Drag-Chain Cable',
    code: 'SK-OLF-FD855',
    category: 'power-control',
    categoryLabel: 'Power & Flexible Control',
    brand: 'Lapp Group',
    image: '/src/assets/images/automation_instrumentation_1792651590978.jpg',
    shortDesc: 'Halogen-free, screened PUR power & control cable engineered for up to 10 million continuous flexing cycles in energy cable chains.',
    conductor: 'Extra-fine wire strand of bare copper (IEC 60228 Class 6)',
    voltageGrade: '300 / 500 V (Test voltage: 3000 V)',
    insulation: 'Polypropylene (PP) core insulation',
    armoring: 'Tinned copper wire screening braid (85% coverage)',
    sheath: 'Polyurethane (PUR), grey (RAL 7001), tear & notch resistant',
    tempRange: '-50°C to +80°C (fixed) / -40°C to +80°C (flexing)',
    standards: ['UL/CSA AWM 21576', 'IEC 60754-1', 'VDE Tested', 'CE', 'RoHS'],
    coreRange: '2 to 41 Cores',
    sizeRange: '0.50 mm² to 2.5 mm²',
    featured: false,
    applications: [
      'High-speed robotic gantry systems',
      'Energy drag chains up to 100m horizontal travel',
      'Automated automated pick-and-place robots',
      'Severe industrial flex applications'
    ],
    specifications: [
      { label: 'Bending Cycles', value: 'Tested for > 10 million continuous flex cycles' },
      { label: 'Travel Velocity', value: 'Up to 5 m/s acceleration 50 m/s²' },
      { label: 'Halogen-Free', value: 'Zero corrosive acid gases (IEC 60754-1)' },
      { label: 'Abrasion Resistance', value: 'High abrasion and mineral oil resistant PUR' }
    ]
  },

  // 2. Armoured & Underground Power Cables
  {
    id: 'copper-armoured-cable-4core',
    name: 'Core Copper Armoured Power Cable (1.1kV XLPE)',
    code: 'SK-CU-ARM4C',
    category: 'armoured-ht',
    categoryLabel: 'Armoured & HT Mains',
    brand: 'Polycab / KEI',
    image: '/src/assets/images/cable_cross_section_1792651589893.jpg',
    shortDesc: 'Heavy-duty multi-core copper power cable with cross-linked polyethylene dielectric and galvanized steel wire armour for direct ground burial.',
    conductor: 'Electrolytic grade annealed plain copper, Class 2 stranded (IS 8130)',
    voltageGrade: '650 / 1100 V (1.1 kV grade)',
    insulation: 'Extruded XLPE suitable for 90°C continuous conductor operation',
    armoring: 'Galvanized round steel wire / formed steel strip (IS 3975)',
    sheath: 'Extruded Type ST2 PVC / FRLS compound, UV stabilized black',
    tempRange: '-15°C to +90°C (short circuit withstand temp: 250°C)',
    standards: ['IS 7098 (Part 1)', 'IEC 60502-1', 'BS 5467', 'ISI Marked'],
    coreRange: '2 Core, 3 Core, 3.5 Core, 4 Core',
    sizeRange: '1.5 mm² to 400.0 mm²',
    featured: true,
    applications: [
      'Substations & main industrial power distribution grids',
      'Direct underground burial in high-stress rocky soil',
      'Industrial motor feeders & captive generation power plants',
      'Commercial infrastructure & data center utility mains'
    ],
    specifications: [
      { label: 'Short Circuit Rating', value: '250°C maximum conductor temp for 5s' },
      { label: 'Dielectric Constant', value: '2.3 (low dielectric loss factor)' },
      { label: 'Armour Resistance', value: 'Low resistance dedicated earthing path' },
      { label: 'Authorized Origin', value: 'Polycab / KEI Authorized Channel Supply' }
    ]
  },
  {
    id: 'aluminum-armoured-cable-35mm',
    name: 'Aluminum Armoured Power Cable (35mm² & Above)',
    code: 'SK-AL-ARM35',
    category: 'armoured-ht',
    categoryLabel: 'Armoured & HT Mains',
    brand: 'Polycab / Finolex',
    image: '/src/assets/images/hero_industrial_cables_1792651589510.jpg',
    shortDesc: 'Cost-effective high-ampacity stranded aluminum XLPE armoured feeder cable for commercial transformer runs and utility mains.',
    conductor: 'Electrolytic grade aluminum (H4 grade conductor, IS 8130)',
    voltageGrade: '1100 V (1.1 kV) / Available in 11kV & 33kV HT variants',
    insulation: 'Extruded XLPE 90°C rated',
    armoring: 'Galvanized steel wire armour (SWA) or Aluminum wire for single core',
    sheath: 'Heavy duty PVC ST2 black, anti-termite and anti-rodent',
    tempRange: '-15°C to +90°C',
    standards: ['IS 7098 (Part 1 & 2)', 'IEC 60502-2', 'ISI Marked'],
    coreRange: '3 Core, 3.5 Core, 4 Core',
    sizeRange: '25.0 mm² to 630.0 mm²',
    featured: false,
    applications: [
      'Heavy factory incoming supply lines',
      'Solar farm DC/AC inverters to grid tie-in',
      'Commercial high-rise transformer distribution risers',
      'Municipal water pumping and sewage plant power'
    ],
    specifications: [
      { label: 'Current Rating', value: 'Approx. 120A in air / 115A in ground (35mm² 4C)' },
      { label: 'Weight Reduction', value: '~55% lighter than equivalent copper runs' },
      { label: 'Termite Protection', value: 'Anti-termite and anti-rodent additives' }
    ]
  },

  // 3. Data, Signal & Instrumentation Cables
  {
    id: 'unitronic-liyy-liycy',
    name: 'LAPP UNITRONIC® LiYCY Screened Data Cable',
    code: 'SK-UNI-CY',
    category: 'data-instrumentation',
    categoryLabel: 'Data & Instrumentation',
    brand: 'Lapp Group',
    image: '/src/assets/images/automation_instrumentation_1792651590978.jpg',
    shortDesc: 'Screened data transmission cable with colour code to DIN 47100, providing total electromagnetic interference (EMI) protection.',
    conductor: 'Multi-wire strands of bare copper wires (0.14 - 0.75 mm²)',
    voltageGrade: 'Peak operating voltage: 350 V / 500 V',
    insulation: 'Special PVC core insulation (DIN 47100 color code)',
    armoring: 'Tinned-copper wire screening braid (approx. 85% optical coverage)',
    sheath: 'PVC outer sheath, pebble grey (RAL 7032)',
    tempRange: '-40°C to +80°C (fixed) / -5°C to +70°C (flexing)',
    standards: ['DIN 47100', 'VDE 0812', 'IEC 60332-1-2', 'CE', 'RoHS'],
    coreRange: '2 to 36 Cores',
    sizeRange: '0.14 mm² to 1.5 mm²',
    featured: true,
    applications: [
      'Industrial automation bus systems & PLC I/O signal links',
      'Instrumentation & precision sensor telemetry',
      'Computer systems & electronic control gear',
      'Noise-sensitive analog signal lines (4-20mA & 0-10V)'
    ],
    specifications: [
      { label: 'Screen Coverage', value: 'Tinned copper braid ~85% optical coverage' },
      { label: 'Mutual Capacitance', value: 'Approx. 120 nF/km core/core' },
      { label: 'Inductance', value: 'Approx. 0.65 mH/km' },
      { label: 'Shielding Protection', value: 'Maximum attenuation of stray EMI / RFI' }
    ]
  },
  {
    id: 'industrial-lan-cat6-dlink',
    name: 'Industrial Cat6 / Cat6A UTP/STP Networking Cable',
    code: 'SK-LAN-CAT6',
    category: 'data-instrumentation',
    categoryLabel: 'Data & Instrumentation',
    brand: 'D-Link / Finolex',
    image: '/src/assets/images/automation_instrumentation_1792651590978.jpg',
    shortDesc: 'High-speed 4-pair 1000Base-T Ethernet networking cable for enterprise structured cabling, server racks, and industrial switch interconnects.',
    conductor: 'Solid bare electrolytic copper (23 AWG / 24 AWG)',
    voltageGrade: 'Low voltage signal grade (30V / 60V)',
    insulation: 'High-density polyethylene (HDPE)',
    armoring: 'Available in Unshielded (UTP) and Foil Screened (FTP)',
    sheath: 'FR-PVC / LSZH flame retardant grey or blue',
    tempRange: '-20°C to +60°C',
    standards: ['ANSI/TIA-568.2-D', 'ISO/IEC 11801', 'UL Listed', 'ETL Verified'],
    coreRange: '4-Pair (8 Cores) twisted',
    sizeRange: '23 AWG Solid',
    featured: false,
    applications: [
      'Factory floor Ethernet backbone and IP camera surveillance',
      'Data centers, patch panels, and server cabinets',
      'Building automation and access control networks',
      'Gigabit network drops and PoE / PoE+ endpoints'
    ],
    specifications: [
      { label: 'Bandwidth', value: 'Certified up to 250 MHz (500 MHz for Cat6A)' },
      { label: 'Crosstalk', value: 'Integrated cross-divider separator for zero NEXT' },
      { label: 'Packing', value: 'Available in 305m pull-box and 500m drums' }
    ]
  },
  {
    id: 'fiber-optical-cable-ofc',
    name: 'Fiber Optical Cable (OFC Multi-Core Armoured)',
    code: 'SK-OFC-ARM',
    category: 'data-instrumentation',
    categoryLabel: 'Data & Instrumentation',
    brand: 'Polycab / Finolex',
    image: '/src/assets/images/hero_industrial_cables_1792651589510.jpg',
    shortDesc: 'Steel-tape armoured outdoor underground fiber optic cable for long-distance high-bandwidth telecommunications and campus backbones.',
    conductor: 'Silica glass fibers (Single Mode 9/125µm or Multimode OM3/OM4)',
    voltageGrade: 'Dielectric / Optical',
    insulation: 'Thixotropic jelly filled loose tube',
    armoring: 'Corrugated steel tape armor (ECCS tape) with FRP central strength member',
    sheath: 'UV-resistant high density polyethylene (HDPE) black',
    tempRange: '-40°C to +70°C',
    standards: ['ITU-T G.652D', 'IEC 60794', 'Telecordia GR-20'],
    coreRange: '6, 12, 24, 48 to 96 Fibers',
    sizeRange: 'Loose tube multi-fiber design',
    featured: false,
    applications: [
      'Campus area networks and underground metro ring runs',
      'Substation SCADA optical relay communications',
      'Immune to lightning and extreme electromagnetic fields',
      'Long-haul carrier and ISP transmission networks'
    ],
    specifications: [
      { label: 'Attenuation', value: '≤ 0.35 dB/km at 1310nm, ≤ 0.22 dB/km at 1550nm' },
      { label: 'Crush Resistance', value: '2000 N/100mm' },
      { label: 'Water Seepage', value: 'Water swellable tape longitudinal water-blocking' }
    ]
  },

  // 4. House Wires & Panel Flexible Wires
  {
    id: 'polycab-frls-lead-free-wire',
    name: 'Polycab Flame Retardant Lead-Free (FRLS) House Wire',
    code: 'SK-POL-FRLS',
    category: 'house-panel-wires',
    categoryLabel: 'House Wires & Panel Wires',
    brand: 'Polycab India',
    image: '/src/assets/images/hero_industrial_cables_1792651589510.jpg',
    shortDesc: 'India’s trusted 100% conductivity lead-free FRLS copper wire with enhanced oxygen index for maximum fire safety in residential and commercial premises.',
    conductor: '100% pure electrolytic annealed bright bare copper strands',
    voltageGrade: 'Up to and including 1100 V',
    insulation: 'Specially engineered high oxygen index lead-free FRLS PVC compound',
    armoring: 'Unarmoured single core flexible',
    sheath: 'Self-colored virgin polymer (Red, Yellow, Blue, Black, Green)',
    tempRange: '-15°C to +70°C (+85°C heat resistant variant)',
    standards: ['IS 694:2010', 'BS EN 50525', 'IEC 60332-3', 'RoHS', 'ISI Marked'],
    coreRange: 'Single Core Flexible',
    sizeRange: '0.75 mm², 1.0 mm², 1.5 mm², 2.5 mm², 4.0 mm², 6.0 mm², 10.0 mm²',
    featured: true,
    applications: [
      'Luxury residential apartments and high-rise condominiums',
      'Hospitals, commercial malls, multiplexes and hotels',
      'Industrial switchgear and distribution boards',
      'Conduit wiring and concealed circuit runs'
    ],
    specifications: [
      { label: 'Oxygen Index', value: 'Minimum 29% (standard wire: 21%)' },
      { label: 'Temperature Index', value: '250°C at 21% Oxygen' },
      { label: 'Smoke Density', value: 'Maximum 60% light transmittance' },
      { label: 'Lead Free', value: '100% RoHS compliant green formulation' },
      { label: 'Packaging', value: 'Available in standard 90m coils and 180m project packs' }
    ]
  },
  {
    id: 'finolex-house-wire-fr',
    name: 'Finolex Flame Retardant (FR) PVC Insulated Wires',
    code: 'SK-FIN-FR',
    category: 'house-panel-wires',
    categoryLabel: 'House Wires & Panel Wires',
    brand: 'Finolex Cables',
    image: '/src/assets/images/power_control_cables_1792651590664.jpg',
    shortDesc: 'Finolex high-conductivity copper building wires insulated with flame-retardant virgin grade PVC compound for uninterrupted power reliability.',
    conductor: 'High-purity bright annealed copper conductor conforming to IS 8130',
    voltageGrade: '1100 V Grade',
    insulation: 'Specially formulated Flame Retardant (FR) PVC',
    armoring: 'Unarmoured single core',
    sheath: 'Virgin grade PVC in standard color codes',
    tempRange: '-15°C to +70°C',
    standards: ['IS 694', 'ISI Marked', 'FIA/TAC Approved', 'ISO 9001'],
    coreRange: 'Single Core',
    sizeRange: '1.0 mm² to 16.0 mm²',
    featured: false,
    applications: [
      'Internal domestic wiring and commercial circuits',
      'Appliance power cords and control panel links',
      'UPS wiring and battery cabinet interconnects'
    ],
    specifications: [
      { label: 'Conductor Resistance', value: 'Strictly verified to IS 8130 Class 5' },
      { label: 'Flame Retardant', value: 'Self-extinguishing with limited flame spread' },
      { label: 'Current Capacity', value: '16A (1.5mm²), 22A (2.5mm²), 29A (4.0mm²)' }
    ]
  },
  {
    id: 'isi-panel-wires-tri-rated',
    name: 'Tri-Rated Switchboard & Panel Flexible Wire',
    code: 'SK-PNL-TRI',
    category: 'house-panel-wires',
    categoryLabel: 'House Wires & Panel Wires',
    brand: 'R Sons / Polycab',
    image: '/src/assets/images/hero_industrial_cables_1792651589510.jpg',
    shortDesc: 'High-temperature flame-retardant single-core switchboard wire meeting BS 6231, UL 1015, and CSA standards for export electrical enclosures.',
    conductor: 'Fine stranded plain copper Class 5',
    voltageGrade: '600 / 1000 V (BS) / 600 V (UL/CSA)',
    insulation: 'Heat resistant PVC Class 105°C',
    armoring: 'Unarmoured',
    sheath: 'High-visibility colors for control cabinet terminal dressing',
    tempRange: '-15°C to +105°C continuous',
    standards: ['BS 6231 Type CK', 'UL Subject 758 (Style 1015)', 'CSA C22.2 No. 127'],
    coreRange: 'Single Core',
    sizeRange: '0.50 mm² to 50.0 mm²',
    featured: false,
    applications: [
      'Internal wiring of electrical control panels and switchboards',
      'Relay logic racks and motor starter cubicles',
      'Export machinery destined for Europe or North America'
    ],
    specifications: [
      { label: 'Temperature Class', value: '105°C continuous thermal rating' },
      { label: 'Tri-Certification', value: 'Meets British (BS), American (UL), Canadian (CSA)' }
    ]
  },

  // 5. Specialty, Broadcast / AV & Flat Elevator Cables
  {
    id: 'flat-elevator-travelling-cable',
    name: 'Flat Elevator Travelling Cable (With Steel Strain Relief)',
    code: 'SK-ELV-FLAT',
    category: 'specialty-av',
    categoryLabel: 'Specialty, AV & Elevator',
    brand: 'Siddhi Cables / Lapp',
    image: '/src/assets/images/power_control_cables_1792651590664.jpg',
    shortDesc: 'Flat PVC flexible elevator travelling cable with integrated high-tensile steel wire suspension members for high-rise lift shafts.',
    conductor: 'High flexibility bare copper strands Class 6 (IEC 60228)',
    voltageGrade: '450 / 750 V',
    insulation: 'Special flexible PVC core insulation',
    armoring: 'High-tensile zinc-coated steel wire rope strain members',
    sheath: 'Cold-resistant, oil-resistant flexible black PVC',
    tempRange: '-20°C to +70°C',
    standards: ['EN 50214', 'IEC 60227-6', 'CE'],
    coreRange: '12, 18, 24, 30 Cores + Video Coax + Shielded Pairs',
    sizeRange: '0.75 mm² and 1.0 mm²',
    featured: false,
    applications: [
      'Passenger & freight elevator car power & control',
      'In-car CCTV camera video feed & intercom circuits',
      'Suspended pendant cranes and hoists'
    ],
    specifications: [
      { label: 'Suspension Height', value: 'Free suspension up to 80 meters' },
      { label: 'Travelling Speed', value: 'Rated up to 6.3 m/s' },
      { label: 'Tensile Members', value: 'Dual high-tensile steel wire ropes' }
    ]
  },
  {
    id: 'cctv-coaxial-3plus1-4plus1',
    name: 'CCTV 3+1 & 4+1 Camera Video & Power Cables',
    code: 'SK-CCTV-3P1',
    category: 'specialty-av',
    categoryLabel: 'Specialty, AV & Elevator',
    brand: 'Finolex / Siddhi',
    image: '/src/assets/images/automation_instrumentation_1792651590978.jpg',
    shortDesc: 'Composite surveillance cable integrating low-loss RG-59 video coaxial conductor with 3 or 4 insulated copper power cores.',
    conductor: 'Solid copper video core + multi-strand power cores',
    voltageGrade: 'Signal & Low Voltage DC 12V/24V',
    insulation: 'Gas-injected physical foam PE dielectric',
    armoring: 'Bonded aluminum foil + dense aluminum/copper alloy braid',
    sheath: 'Flame retardant PVC white/black',
    tempRange: '-10°C to +70°C',
    standards: ['IS 694', 'RoHS Compliant'],
    coreRange: 'RG59 Coax + 3 Power Cores (or 4 Cores for PTZ telemetry)',
    sizeRange: '0.50 mm² / 0.75 mm² power wires',
    featured: false,
    applications: [
      'High-definition analog and IP CCTV surveillance cameras',
      'Security boundary fencing and perimeter monitoring',
      'Audio intercom and PTZ dome motorized pan-tilt-zoom'
    ],
    specifications: [
      { label: 'Impedance', value: '75 Ohm ± 3 Ohm video conductor' },
      { label: 'Attenuation', value: 'Low video signal loss across 150m distances' }
    ]
  },
  {
    id: 'silicon-rubber-heat-resistant',
    name: 'ÖLFLEX® HEAT 180 SiHF Silicone Heat Cable',
    code: 'SK-HEAT-180',
    category: 'specialty-av',
    categoryLabel: 'Specialty, AV & Elevator',
    brand: 'Lapp Group',
    image: '/src/assets/images/power_control_cables_1792651590664.jpg',
    shortDesc: 'Silicone-insulated high-temperature multiconductor cable for blast furnaces, foundries, industrial ovens, and thermal processing plants.',
    conductor: 'Tinned-copper wire strands (IEC 60228 Class 5)',
    voltageGrade: 'U0/U: 300/500 V',
    insulation: 'Silicone-based cross-linked elastomer',
    armoring: 'Silicone outer sheath, reddish brown',
    sheath: 'Silicone rubber, halogen-free, resistant to oils and chemical fats',
    tempRange: '-50°C to +180°C (short periods up to +200°C)',
    standards: ['EN 50525-2-83', 'IEC 60754-1', 'IEC 60332-1-2', 'CE'],
    coreRange: '2 to 24 Cores',
    sizeRange: '0.75 mm² to 16.0 mm²',
    featured: false,
    applications: [
      'Steel mills, blast furnaces, foundries and rolling plants',
      'Industrial baking ovens, heaters, and dryers',
      'Glass manufacturing plants and kiln machinery'
    ],
    specifications: [
      { label: 'Thermal Endurance', value: 'Continuous operation at +180°C' },
      { label: 'Halogen Free', value: 'Zero corrosive gases according to IEC 60754-1' },
      { label: 'Cold Flexibility', value: 'Retains high flexibility down to -50°C' }
    ]
  },

  // 6. Switchgear, Circuit Breakers & Cable Accessories
  {
    id: 'circuit-breakers-mcb-mpcb',
    name: 'Miniature & Motor-Protective Circuit Breakers (MCB / MPCB)',
    code: 'SK-SWG-MCB',
    category: 'switchgear-accessories',
    categoryLabel: 'Switchgear & Components',
    brand: 'GE / Siemens / Schneider',
    image: '/src/assets/images/automation_instrumentation_1792651590978.jpg',
    shortDesc: 'High-breaking capacity miniature circuit breakers, motor protection switches, safety relays, and isolators for industrial switchgear boards.',
    conductor: 'Silver-cadmium oxide contacts with copper terminal lugs',
    voltageGrade: '240 / 415 V AC, 50/60 Hz (Breaking capacity: 10kA to 15kA)',
    insulation: 'Self-extinguishing thermoset polymer housing',
    armoring: 'DIN-rail 35mm mountable chassis',
    sheath: 'IP20 finger-safe terminal shrouds',
    tempRange: '-25°C to +60°C',
    standards: ['IS/IEC 60898-1', 'IS/IEC 60947-2', 'CE', 'ISI Marked'],
    coreRange: 'Single Pole (1P), 2 Pole, 3 Pole (3P), 4 Pole (4P)',
    sizeRange: 'Current ratings: 6A, 10A, 16A, 25A, 32A, 40A, 63A',
    featured: false,
    applications: [
      'Main distribution switchboards and motor control centers (MCC)',
      'Short circuit and thermal overload protection for industrial motors',
      'Commercial building sub-panel protection'
    ],
    specifications: [
      { label: 'Breaking Capacity', value: '10kA according to IEC 60898 / 15kA IEC 60947-2' },
      { label: 'Tripping Curves', value: 'Available in B, C, and D characteristic curves' },
      { label: 'Mechanical Life', value: '> 20,000 switching operations' }
    ]
  },
  {
    id: 'industrial-switchgear-accessories',
    name: 'LAPP EPIC® Heavy-Duty Connectors & SKINTOP® Glands',
    code: 'SK-ACC-EPIC',
    category: 'switchgear-accessories',
    categoryLabel: 'Switchgear & Components',
    brand: 'Lapp Group',
    image: '/src/assets/images/cable_cross_section_1792651589893.jpg',
    shortDesc: 'IP65/IP68 rated modular industrial rectangular connectors, metric SKINTOP® cable glands, and heavy-duty tubular copper crimp lugs.',
    conductor: 'Silver-plated / Gold-plated solid brass contact pins',
    voltageGrade: 'Up to 690 V / 16A to 100A per pin',
    insulation: 'Thermoplastic PBT / Polyamide UL94 V-0 flame rated',
    armoring: 'Die-cast aluminum housing with powder-coated corrosion finish',
    sheath: 'Neoprene / NBR sealing rings with metric threading M12 to M63',
    tempRange: '-40°C to +125°C',
    standards: ['DIN EN 61984', 'UL 1977', 'IP65 / IP67 / IP68', 'RoHS'],
    coreRange: '3 to 108 Contact Inserts',
    sizeRange: 'M12 to M63 threading, crimp & screw termination',
    featured: false,
    applications: [
      'Modular machine wiring & quick-disconnect harnesses',
      'Robotics control cabinets and power junctions',
      'Harsh outdoor industrial machinery enclosures',
      'Rail rolling stock and marine switchboards'
    ],
    specifications: [
      { label: 'Ingress Protection', value: 'IP65 to IP68 certified' },
      { label: 'Mating Cycles', value: '> 500 mechanical mating cycles' },
      { label: 'Locking Mechanism', value: 'Single or double stainless steel locking levers' },
      { label: 'Strain Relief', value: 'Integrated SKINTOP cable clamping system' }
    ]
  }
];

export interface IndustryApplication {
  id: string;
  title: string;
  desc: string;
  stats: string;
  cablesUsed: string[];
}

export const INDUSTRIES_SERVED: IndustryApplication[] = [
  {
    id: 'automotive-robotics',
    title: 'Automotive & Robotics',
    desc: 'Continuous-flex drag chain cables, Profinet industrial Ethernet, and Lapp Olflex multi-core wiring powering high-speed robotic spot welding and press lines.',
    stats: '15+ Assembly Lines Powered',
    cablesUsed: ['ÖLFLEX® FD 855 CP', 'ETHERLINE® Cat.6A', 'LiYCY Shielded']
  },
  {
    id: 'power-renewables',
    title: 'Solar & Renewable Energy',
    desc: 'UV-stabilized, halogen-free 1.5kV solar DC cables and underground XLPE armoured transmission lines delivering uninterrupted green energy grid feeds.',
    stats: '120 MW Solar Capacity Connected',
    cablesUsed: ['1.1kV XLPE Armoured', 'Aluminum Armoured 35mm²', 'HT XLPE 33kV']
  },
  {
    id: 'machine-tools',
    title: 'Machine Tool & Automation',
    desc: 'Oil-resistant, vibration-proof servo motor feedback cables and compact flexible control lines engineered for high-precision CNC machining centers.',
    stats: '2,800+ CNC Machines Wired',
    cablesUsed: ['ÖLFLEX® CLASSIC 110', 'Tri-Rated Panel Wires', 'SKINTOP® Glands']
  },
  {
    id: 'infrastructure-pharma',
    title: 'Process Plants & Cleanrooms',
    desc: 'Zero-halogen low-smoke (LSZH) and heat-resistant silicone cables meeting rigid pharmaceutical hygiene standards and chemical resistance benchmarks.',
    stats: '35+ Turnkey Facilities',
    cablesUsed: ['ÖLFLEX® HEAT 180', 'Polycab FRLS Wires', 'EPIC® Connectors']
  }
];

export interface QualityBrand {
  name: string;
  role: string;
  standards: string;
  focus: string;
}

export const AUTHORIZED_BRANDS: QualityBrand[] = [
  {
    name: 'Lapp Group',
    role: 'Authorized Importer & Stockist',
    standards: 'VDE, CE, UL, CSA, EAC',
    focus: 'ÖLFLEX®, UNITRONIC®, ETHERLINE®, SKINTOP®, EPIC®'
  },
  {
    name: 'Polycab India',
    role: 'Authorized Strategic Dealer',
    standards: 'IS 694, IS 7098, IS 1554',
    focus: 'Armoured Power Cables, FRLS House Wires, Optical Fiber'
  },
  {
    name: 'Finolex Cables',
    role: 'Authorized Distributor',
    standards: 'ISI Marked, ISO 9001, RoHS',
    focus: 'FR Building Wires, Telecommunication, Submersible Cables'
  },
  {
    name: 'KEI Industries',
    role: 'Stockist & Project Partner',
    standards: 'IS 7098 (Part 2), IEC 60502',
    focus: 'Extra High Voltage (EHV), Heavy Armoured Copper Mains'
  },
  {
    name: 'D-Link & Networking',
    role: 'Authorized Channel Partner',
    standards: 'ANSI/TIA-568.2-D, ISO/IEC 11801',
    focus: 'Cat6/Cat6A LAN Cables, Structured Cabling, Patch Panels'
  }
];
