export interface DealBrand {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
}

export const BRANDS_WE_DEAL_WITH: DealBrand[] = [
  {
    id: 'lapp',
    name: 'LAPP',
    category: 'Cables & Conductors',
    description: 'Lapp Cables produces cables and conductors for different industries and markets: mechanical and systems engineering, the automotive industry, MSR technology, electrical and installations engineering, EDC and more.',
    highlights: ['ÖLFLEX® Power & Control', 'UNITRONIC® Data Cables', 'ETHERLINE® Ethernet', 'SKINTOP® Glands', 'EPIC® Connectors']
  },
  {
    id: 'eaton',
    name: 'EATON - Moeller',
    category: 'Power Quality & Switchgear',
    description: 'Eaton produces a broad range of products and solutions in the field of Power & Energy, Industrial switchgears and safety products.',
    highlights: ['Motor Protective Circuit Breakers (MPCB)', 'Contactors & Relays', 'Switch Disconnectors', 'Industrial MCBs']
  },
  {
    id: 'mennekes',
    name: 'MENNEKES',
    category: 'Industrial Plugs & Sockets',
    description: 'MENNEKES is a leading manufacturer of industrial plugs and sockets for various applications.',
    highlights: ['CEE Plugs & Sockets', 'Receptacle Combinations', 'Switched Interlocked Sockets', 'Harsh Environment IP67']
  },
  {
    id: 'hager',
    name: 'HAGER',
    category: 'Electrical Installations',
    description: 'Hager is the specialist for electrical installations in residential and commercial sectors.',
    highlights: ['Power Distribution Boards', 'Modular Protection Devices', 'Enclosure Systems', 'Commercial Switchgear']
  },
  {
    id: 'luker',
    name: 'LUKER',
    category: 'LED Lighting Solutions',
    description: 'Manufactures cost effective LED solutions in India for domestic and commercial needs.',
    highlights: ['Commercial LED Panels', 'Industrial High-Bay Lights', 'Downlights & Troffers', 'Retrofit Energy Savers']
  },
  {
    id: 'neptune',
    name: 'NEPTUNE INDIA',
    category: 'Power & Energy Solutions',
    description: 'Neptune India offers global products and solutions in the field of Power & Energy based on latest technology.',
    highlights: ['Power Factor Correction', 'Harmonic Filters', 'Energy Meters', 'Industrial Plugs & Sockets']
  },
  {
    id: 'havells',
    name: 'HAVELLS',
    category: 'Cables & Commercial Lighting',
    description: 'India’s renowned manufacturer of industrial cables, commercial LED fixtures, and domestic building wires.',
    highlights: ['Industrial Power Cables', 'Commercial LED Troffers', 'Flame Retardant House Wires', 'Distribution Boards']
  },
  {
    id: 'jef',
    name: 'JEF TECHNO SOLUTIONS',
    category: 'Grounding & Lightning Safety',
    description: 'Specialists in chemical maintenance-free electrical grounding solutions and advanced lightning arrestor systems.',
    highlights: ['JEF ECO SAFE Earthing', 'Carbon-Based Chemical Compound', 'ESE Lightning Arrestors', 'Surge Protection Devices']
  }
];

export interface SpecialOfferItem {
  slNo: number;
  partNo: string;
  description: string;
  qty: string;
  price: number;
}

export const PRODUCTS_ON_OFFER_DATA: SpecialOfferItem[] = [
  {
    slNo: 1,
    partNo: 'SK-OLF-110-4G1.5',
    description: 'LAPP ÖLFLEX® CLASSIC 110 Control Cable, 4G1.5 mm², 300/500V, Flexible PVC',
    qty: '500 Mtr',
    price: 94
  },
  {
    slNo: 2,
    partNo: 'SK-OLF-110-4G2.5',
    description: 'LAPP ÖLFLEX® CLASSIC 110 Control Cable, 4G2.5 mm², VDE Certified',
    qty: '350 Mtr',
    price: 152
  },
  {
    slNo: 3,
    partNo: 'SK-UNI-CY-4X0.5',
    description: 'LAPP UNITRONIC® LiYCY Shielded Data Cable, 4x0.5 mm², DIN 47100 Screened',
    qty: '600 Mtr',
    price: 68
  },
  {
    slNo: 4,
    partNo: 'SK-SRV-FD7-4G1.5',
    description: 'LAPP ÖLFLEX® SERVO FD 7TCE Variable Frequency Drive Motor Cable',
    qty: '200 Mtr',
    price: 285
  },
  {
    slNo: 5,
    partNo: 'SK-CRN-FLAT-12G1.5',
    description: 'LAPP ÖLFLEX® CRANE F Weatherproof Rubber Flat Traveling Lift Cable',
    qty: '150 Mtr',
    price: 340
  },
  {
    slNo: 6,
    partNo: 'SK-SKN-M25-BRASS',
    description: 'LAPP SKINTOP® MS-M Nickel-Plated Brass Metric Cable Gland M25x1.5 (IP68)',
    qty: '100 Pcs',
    price: 195
  },
  {
    slNo: 7,
    partNo: 'SK-EPC-HBE16',
    description: 'LAPP EPIC® H-BE 16 Pin Heavy Duty Rectangular Industrial Connector Set',
    qty: '40 Sets',
    price: 1450
  },
  {
    slNo: 8,
    partNo: 'SK-ETN-PKZM0-16',
    description: 'EATON - Moeller PKZM0-16 Motor-Protective Circuit Breaker (10-16A)',
    qty: '25 Pcs',
    price: 2150
  },
  {
    slNo: 9,
    partNo: 'SK-MNK-16A-5P',
    description: 'MENNEKES 16A 5-Pin (3P+N+E) 400V IP44 CEE Industrial Plug and Socket',
    qty: '60 Sets',
    price: 890
  },
  {
    slNo: 10,
    partNo: 'SK-JEF-EARTH-ROD',
    description: 'JEF ECO SAFE Maintenance Free Chemical Earthing Electrode with Compound',
    qty: '30 Sets',
    price: 3600
  }
];

export const AUTHORIZED_PRINCIPALS = [
  'LAPP INDIA PVT LTD',
  'EATON Power Quality Pvt Ltd',
  'HAVELLS INDIA LTD',
  'JEF Techno solutions Pvt Ltd',
  'HAGER Electro Private Limited',
  'LUKER Electric Technologies Pvt Ltd',
  'MENNEKES Electric India Pvt Ltd',
  'NEPTUNE INDIA LTD'
];

export const CORE_PILLARS = [
  'Technically, commercially skilled dedicated team.',
  '25 years of presence across industry verticals.',
  'Customer specific and well-planned inventory added with reliable large network for better service.',
  'Complete statutory compliance for hassle free transaction',
  'Ethical business practice.'
];

export const INDUSTRIES_LIST = [
  'Contractors & projects management',
  'Automobile & Rail transport',
  'Automation & Robotics',
  'Medical Equipment',
  'Mechanical & Plant Engineering',
  'Marine Engineering',
  'Defense',
  'Pharmaceutical & Process industry',
  'Oil & Gas, Chemical & Paint industries'
];
