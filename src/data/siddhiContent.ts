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
  }
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
