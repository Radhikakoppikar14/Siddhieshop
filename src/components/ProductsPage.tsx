import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download,
  Zap,
  Sliders,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageVideoHero } from './PageVideoHero';

interface ProductsViewProps {
  onOpenOffer: () => void;
}

export const ProductsPage: React.FC<ProductsViewProps> = ({ onOpenOffer }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('lapp');
  const [selectedLappSubCategory, setSelectedLappSubCategory] = useState<string>('olflex');

  const brandList = [
    { id: 'lapp', name: 'Lapp', desc: 'World leader in flexible control, servo, crane & data cables' },
    { id: 'havells', name: 'Havells', desc: 'Industrial cables, switchgear & professional LED lighting' },
    { id: 'eaton', name: 'Eaton - Moeller', desc: 'Industrial switchgears, motor protection & safety breakers' },
    { id: 'jef', name: 'JEF Eco Safe', desc: 'Maintenance free electrical grounding & surge arrestors' },
    { id: 'mennekes', name: 'Mennekes', desc: 'Heavy-duty industrial plugs, sockets & combination boxes' },
    { id: 'hager', name: 'Hager', desc: 'Commercial distribution boards, modular protection devices' },
    { id: 'luker', name: 'Luker', desc: 'Energy-efficient commercial & industrial LED fixtures' },
    { id: 'neptune', name: 'Neptune', desc: 'Industrial plugs, sockets & power distribution panels' },
  ];
  const activeBrand = brandList.find((brand) => brand.id === selectedBrand);

  const lappSubCategories = [
    {
      id: 'olflex',
      label: 'Olflex Power and Control Cables',
      badge: 'Core Line',
      desc: 'The World’s first brand cable is available in the most Varied of Versions to match Maximum requirement.'
    },
    {
      id: 'servo',
      label: 'Servo & Motor Supply Cables',
      badge: 'VFD Spec',
      desc: 'Screened super flexible 0.6/1 KV motor supply cables for power chains, VFDs and servo drives.'
    },
    {
      id: 'crane',
      label: 'Crane, Lift & Conveyor Cables',
      badge: 'Heavy Duty',
      desc: 'Weatherproof rubber flat cables and textile-braided steel supported lift cables.'
    },
    {
      id: 'unitronic',
      label: 'Unitronic Data Cables',
      badge: 'Shielded',
      desc: 'Fast, safe and forward-thinking shielded twisted-pair solutions for industrial data transmission.'
    },
    {
      id: 'etherline',
      label: 'Etherline Industrial Ethernet',
      badge: 'Cat5e / Cat6 / Cat7',
      desc: 'Industrial Ethernet, Profibus and Fieldbus cables for rugged automation networks.'
    },
    {
      id: 'skintop',
      label: 'Skintop Cable Glands & Epic Connectors',
      badge: 'IP68 / IP69K',
      desc: 'High strain relief polyamide/metallic glands and heavy-duty circular/rectangular connectors.'
    },
  ];

  return (
    <section id="products" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white pb-10 lg:pb-14">
      <PageVideoHero
        eyebrow="AUTHORIZED DISTRIBUTION NETWORK"
        title="Products"
        description="Explore trusted industrial electrical, automation, and safety products from our authorized brand partners."
      />
      {/* Subtle background glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-slate-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12 relative z-10">
        {/* Breadcrumb with Subtle Glow */}
        <div className="text-xs font-mono text-slate-500 mb-6 flex items-center gap-1.5">
          <span className="hover:text-slate-900 cursor-pointer">Home</span>
          <span>|</span>
          <span className="text-blue-600 font-semibold uppercase">Products</span>
        </div>

        {/* Section Heading & Offer Trigger Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span>Selected brand portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {activeBrand?.name ?? 'Product'} Range
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              {activeBrand?.desc}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenOffer}
            className="pulse-glow inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#F43F5E] hover:bg-[#E11D48] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all self-start md:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Check Special Discounted Stock List</span>
          </motion.button>
        </div>

        {/* Brand Selector Bar with Pill Indicators */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-7 border-b border-slate-200 no-scrollbar">
          {brandList.map((b) => {
            const isBrandActive = selectedBrand === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id)}
                className={`relative px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  isBrandActive
                    ? 'text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100/80 hover:text-slate-900'
                }`}
              >
                {isBrandActive && (
                  <motion.div
                    layoutId="activeBrandButton"
                    className="absolute inset-0 bg-red-500 rounded-xl -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{b.name}</span>
              </button>
            );
          })}
        </div>

        {selectedBrand === 'lapp' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 lg:order-2 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden sticky top-28">
              <div className="p-4 bg-[#F0F7FF] text-[#0B2F5B] border-b border-slate-200 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Lapp Product Lines</span>
                <span className="text-[10px] text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200">
                  Authorized
                </span>
              </div>
              <div className="p-2 space-y-1">
                {lappSubCategories.map((sub) => {
                  const isActive = selectedLappSubCategory === sub.id;
                  return (
                    <motion.button
                      key={sub.id}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedLappSubCategory(sub.id)}
                      className={`w-full text-left p-3.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-red-500 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-950'
                      }`}
                    >
                      <div className="flex flex-col pr-2">
                        <span className="leading-snug">{sub.label}</span>
                        <span
                          className={`text-[10px] font-mono mt-0.5 font-normal ${
                            isActive ? 'text-red-100' : 'text-slate-400'
                          }`}
                        >
                          {sub.badge}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'text-white translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Sidebar Quick Specs */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="font-mono font-bold text-slate-800 uppercase text-[10px] tracking-wider">
                  Direct Warehouse Dispatch
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Custom drum cuts available</span>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Test certificates &amp; MTC provided</span>
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div className="lg:col-span-8 lg:order-1 space-y-8">
              {/* Lapp Brand Introduction */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-1">
                  We Are Authorized Distributor For
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Lapp
                </h3>
                <div className="w-12 h-1 bg-red-500 mt-2 mb-4 rounded-full" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lapp Cables produces cables and conductors for different industries and markets: mechanical and systems engineering, the automotive industry, MSR technology, electrical and installations engineering, EDC and more.
                </p>
              </div>

              {/* Our Brands Sub-cards (Olflex & Unitronic) with Gleam Animation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -4 }}
                  data-live-card
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-amber-300 hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-bold text-sm shadow-2xs">
                    ÖLF
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    Olflex Power and Control Cables
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The World’s first brand cable is available in the most Varied of Versions to match Maximum requirement.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  data-live-card
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold text-sm shadow-2xs">
                    UNI
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                    Unitronic
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This is the brand of choice if you want fast, safe and forward-thinking solutions for transferring data.
                  </p>
                </motion.div>
              </div>

              {/* Servo Cables Section with Authentic Video Image & Hover Zoom */}
              <motion.div
                whileHover={{ y: -2 }}
                data-live-card
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="px-6 py-4 bg-[#F0F7FF] border-b border-slate-200 text-[#0B2F5B] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <h4 className="text-base font-bold text-[#0B2F5B] tracking-wide">
                      Servo Cables
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded">
                    VFD &amp; Servo Drive Spec
                  </span>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group relative">
                    <img
                      src="/assets/lapp_servo_cable.jpg"
                      alt="Lapp Make Olflex Servo Combined PVC Control Cable"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      ÖLFLEX® SERVO FD 7TCE
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex Servo Combined PVC Control and supply Cable for Motors of Variable Frequency Drives</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex Servo for Power Chain with Long Travel Cable</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex Servo Encoder and Resolver Cables</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex Servo Screened Super Flexible 0.6/1 KV Motor Supply Cable for Power Chains, Halogen Free Cables</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Crane Cables Section with Authentic Video Image & Hover Zoom */}
              <motion.div
                whileHover={{ y: -2 }}
                data-live-card
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="px-6 py-4 bg-[#F0F7FF] border-b border-slate-200 text-[#0B2F5B] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <h4 className="text-base font-bold text-[#0B2F5B] tracking-wide">
                      Crane Cables
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded">
                    Lift &amp; Conveyor Spec
                  </span>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group relative">
                    <img
                      src="/assets/lapp_crane_cable.jpg"
                      alt="Lapp Make Olflex Crane F Weatherproof Rubber Flat Cables"
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      ÖLFLEX® CRANE F
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex Lift Flat Cables</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex Crane F Weatherproof Rubber Flat Cables</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Lapp Make Olflex PVC Lift Cable with Textile Braiding and Steel Supporting</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Inquire on offer button banner */}
              <div className="p-6 bg-[#F0F7FF] text-slate-800 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#0B2F5B]">Need specific Lapp part numbers or custom drum cut?</div>
                  <div className="text-xs text-slate-600 mt-0.5">Immediate ex-stock availability check from Bangalore warehouse</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenOffer}
                  className="px-5 py-2.5 bg-[#F43F5E] text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors shrink-0 shadow-sm"
                >
                  View Discounted Stock
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          /* Other Authorized Brands View */
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 space-y-6 shadow-sm"
          >
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-1">
                Authorized Distribution Partner
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                {selectedBrand} Solutions
              </h3>
              <div className="w-12 h-1 bg-red-500 mt-2 mb-4 rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
              Siddhi Kabel Corporation Private Limited is an authorized stockist and dealer for {selectedBrand.toUpperCase()} across Karnataka and South India, supplying genuine factory certified products with complete technical assurance.
            </p>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenOffer}
                className="px-6 py-3 bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-sm"
              >
                Inquire Special Rates
              </button>
              <button
                onClick={() => setSelectedBrand('lapp')}
                className="px-5 py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
              >
                Back to Lapp Cables
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};