import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { INDUSTRIES_LIST } from '../data/siddhiContent';
import { PageVideoHero } from './PageVideoHero';

interface IndustriesViewProps {
  onContactClick: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onContactClick }) => {
  const showcaseIndustries = [
    {
      title: 'FOOD & BEVERAGE',
      image: '/assets/ind_food.jpg',
      badge: 'HYGIENIC SPEC',
      desc: 'Hygienic, chemical resistant, FDA compliant cables for bottling, packaging, and food processing lines.'
    },
    {
      title: 'TRANSPORT- RAIL',
      image: '/assets/ind_rail.jpg',
      badge: 'EN 50264 CERTIFIED',
      desc: 'EN 50264 / EN 50306 certified rolling stock, signaling, and trackside high-vibration cables.'
    },
    {
      title: 'CONSTRUCTION',
      image: '/assets/ind_construction.jpg',
      badge: 'IS / IEC STANDARDS',
      desc: 'High-rise residential and commercial electrical wiring, fire-alarm cables, and underground power mains.'
    }
  ];

  return (
    <section id="industries" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 pb-10 lg:pb-14">
      <PageVideoHero
        eyebrow="INDUSTRY EXPERTISE"
        title="Industries We Serve"
        description="Delivering engineered cabling and electrical switchgear to critical sectors across India with certified reliability."
      />
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12 relative z-10">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
            Explore our sector specializations and certified solutions for demanding industrial environments.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Pan-India Supply
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Authentic Industry List from Video with Interactive Hover */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>Sector Specializations:</span>
              <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-mono font-bold">
                PAN-INDIA SUPPLY
              </span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              {INDUSTRIES_LIST.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-slate-50 transition-all cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span className="text-slate-800 hover:text-blue-600 transition-colors font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: 3 Industry Cards with Authentic Images & Zoom Effect */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {showcaseIndustries.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  data-live-card
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-blue-400/60 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-36 bg-slate-900 overflow-hidden relative">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs border border-white/10">
                        {sec.badge}
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 text-white font-mono text-xs font-bold tracking-wider">
                        {sec.title}
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-blue-600 font-bold">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Turnkey Callout Banner */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-base font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Looking for industry compliance certifications?</span>
                </div>
                <div className="text-xs text-slate-400">
                  We provide Type Test certificates and MTCs with every consignment directly from Bangalore.
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onContactClick}
                className="px-6 py-3 bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors shrink-0 shadow-sm"
              >
                Inquire For Your Sector
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
