import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Tag, Truck, Clock, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

interface StockItem {
  partNo: string;
  description: string;
  brand: string;
  packing: string;
  status: string;
}

const STOCK_ITEMS: StockItem[] = [
  { partNo: 'OLFLEX-110-3G1.5', description: 'Lapp Olflex Classic 110 3 Core 1.5 sq.mm Flexible Control Cable', brand: 'Lapp', packing: '100m Coils / Reels', status: 'In Stock - Special Lot' },
  { partNo: 'PKZM0-16', description: 'Eaton Moeller Motor Protective Circuit Breaker 10A - 16A', brand: 'Eaton', packing: 'Units', status: 'Limited Stock' },
  { partNo: 'MENN-13A-32A-4P', description: 'Mennekes 32A 4P 400V IP44 CEE Panel Mounted Socket', brand: 'Mennekes', packing: 'Pack of 5', status: 'Ready for Dispatch' },
  { partNo: 'JEF-ECO-100', description: 'JEF Eco Safe Chemical Earth Electrode 3m with Carbon Loresco Compound', brand: 'JEF Eco Safe', packing: 'Set', status: 'Direct Dispatch' },
  { partNo: 'SKIN-MS-M25', description: 'Lapp Skintop MS-M Nickel Plated Brass Cable Glands M25', brand: 'Lapp', packing: 'Box of 25', status: 'Special Clearance' },
  { partNo: 'LUK-HB-100W', description: 'Luker 100W High Bay Industrial Shop Floor LED Luminaire', brand: 'Luker', packing: 'Piece', status: 'Project Lot' },
];

const BRANDS = ['All Brands', 'Lapp', 'Eaton', 'Mennekes', 'JEF Eco Safe', 'Luker'];
const serif = { fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" } as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const TERMS = [
  'The above special Prices are discounted; GST Extra as applicable.',
  'Payment 100% through bank transfer along with the order after confirmation.',
  'Delivery: Free Delivery to Bangalore urban and industrial area.',
  'Warranty: 12 months from the date of sale against any manufacturing defects.',
  'We look forward to receive your valued order.',
  'Contact Details: info@siddhikabel.com, 080 – 2672 0440',
];

interface RfqSiteViewProps {
  onNavigate: (tab: string) => void;
  onQuote: (label: string) => void;
}

export const RfqPage: React.FC<RfqSiteViewProps> = ({ onNavigate, onQuote }) => {
  const [brand, setBrand] = useState('All Brands');
  const rows = useMemo(
    () => (brand === 'All Brands' ? STOCK_ITEMS : STOCK_ITEMS.filter((i) => i.brand === brand)),
    [brand],
  );

  return (
    <div className="bg-[#F0F7FF]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="about-hero-video absolute inset-0 -z-10 h-full w-full object-cover object-[center_42%] "
        >
          <source src="/assets/video/demo3.mp4" type="video/mp4" />
        </video>
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            <button type="button" onClick={() => onNavigate('home')} className="hover:text-[#123D73] cursor-pointer">Home</button>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-[#123D73]">RFQ Site &amp; Special Offers</span>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="mt-5 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#E11D48]">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Siddhi Kabel Ltd.
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
              <ShieldCheck className="h-4 w-4 text-[#2563A6]" /> Official Channel Partner
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={serif} className="mt-5 text-4xl font-medium tracking-tight text-[#0B2F5B] sm:text-6xl">
            Check our RFQ site
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            Delivering manufacturer-certified cables, industrial switchgear, automation accessories, and electrical safety solutions with guaranteed reliability across India.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Direct Factory Sourcing', '100% Genuine MTC', 'Pan-India Logistics'].map((chip, i) => (
              <motion.span key={chip} {...fadeUp(0.4 + i * 0.1)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F43F5E]" /> {chip}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Special offer list */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div {...inView(0)} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E11D48]">
              <Tag className="h-3.5 w-3.5" /> Special Factory Stock Lot
            </span>
            <h2 style={serif} className="mt-4 text-3xl font-medium tracking-tight text-[#0B2F5B] sm:text-5xl">
              Products On Special Offer
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Discounted inventory available for immediate dispatch from our Bangalore warehouse while stocks last.
          </p>
        </motion.div>

        {/* Customer notice */}
        <motion.div {...inView(0.05)} className="mt-8 grid gap-6 rounded-3xl border border-slate-200 bg-[#F0F7FF] p-6 text-slate-800 shadow-sm sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F43F5E]">Customer Notice</p>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Dear Customers, greetings... We are pleased to offer the below list of items with a very special rates, this offer is valid till the stock is available, we request you to kindly select the items required and send us your requirement or order for confirmation on the stock status.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">
            {[
              { icon: Truck, label: 'Free Bangalore Delivery' },
              { icon: ShieldCheck, label: '12 Months Warranty' },
              { icon: Clock, label: 'Ready for Dispatch' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                <Icon className="h-4 w-4" /> {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Brand filter */}
        <motion.div {...inView(0.05)} className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Filter by brand">
          {BRANDS.map((b) => (
            <button
              key={b}
              type="button"
              role="tab"
              aria-selected={brand === b}
              onClick={() => setBrand(b)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                brand === b
                  ? 'border-[#F43F5E] bg-[#F43F5E] text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-[#123D73]'
              }`}
            >
              {b}
            </button>
          ))}
        </motion.div>

        {/* Stock cards */}
        <motion.div key={brand} initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((item) => (
            <motion.div key={item.partNo} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -6 }} className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded bg-[#F0F7FF] px-2 py-0.5 font-mono text-[11px] font-bold text-blue-600">{item.brand}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700"><CheckCircle2 className="h-3.5 w-3.5" /> {item.status}</span>
                </div>
                <p className="font-mono text-xs font-bold text-slate-500">{item.partNo}</p>
                <p className="text-sm font-semibold leading-6 text-slate-900">{item.description}</p>
                <p className="text-xs text-slate-500">Packing / Unit: <span className="font-semibold text-slate-700">{item.packing}</span></p>
              </div>
              <button type="button" onClick={() => onQuote(`Quote request: ${item.partNo}`)} className="mt-5 inline-flex w-full items-center justify-between rounded-lg bg-[#F43F5E] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#E11D48] cursor-pointer">
                <span>Quote</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          ))}
        </motion.div>
        {/* Terms & conditions */}
        <motion.div {...inView(0.05)} className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#0B2F5B]">Terms &amp; Conditions:</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 sm:text-base">
            {TERMS.map((term, i) => (
              <motion.li
                key={term}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-3"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F43F5E]" />
                <span>{term}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
};