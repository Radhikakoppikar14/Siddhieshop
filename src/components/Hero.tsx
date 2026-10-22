import React from 'react';
import { ArrowRight, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenRFQ: () => void;
  onExploreCatalog: () => void;
  onOpenSelector: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ, onExploreCatalog, onOpenSelector }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      {/* Subtle geometric hairline grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Quiet 1-line text kicker without pill boxes */}
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest">
              <span>Bangalore Distribution Hub</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Est. 2008</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-700">ISO 9001 Certified</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.12]">
              Engineered Conduction for Critical Industry
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty">
              Authorized direct distributor and importer of premium power, control, flexible instrumentation cables, and industrial automation assemblies. Supplying high-specification electrical infrastructure across India and Southeast Asia.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Authorized Lapp, Polycab &amp; Finolex partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Ex-stock ready dispatch from Bangalore warehouse</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Certified to IS, IEC, VDE &amp; CE standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Custom cut lengths &amp; complete project BOMs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-[0.99] transition-all shadow-sm"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSelector}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 active:scale-[0.99] transition-all"
              >
                <span>Interactive Cable Selector</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Asset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              <img
                src="/src/assets/images/hero_industrial_cables_1792651589510.jpg"
                alt="Siddhi Kabel precision industrial warehouse spools and cable inventory"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom engineering overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>FACILITY SPECIFICATION</span>
                  <span>99.99% CU PURITY</span>
                </div>
                <div className="text-sm font-medium text-white">
                  Heavy Industrial Armoured &amp; Robotic Drag-Chain Inventory
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
                  <span>Flame Retardant IEC 60332</span>
                  <span aria-hidden="true">·</span>
                  <span>-40°C to +105°C</span>
                  <span aria-hidden="true">·</span>
                  <span>RoHS Compliant</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width 4-Column KPI Trust Strip below hero split */}
      <div className="border-t border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-1">
              <div className="font-mono text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                18+ Years
              </div>
              <div className="text-xs text-slate-600">
                Industry distribution track record since 2008
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                3,500+ SKUs
              </div>
              <div className="text-xs text-slate-600">
                Power, control, bus &amp; flexible cables in stock
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                100% Certified
              </div>
              <div className="text-xs text-slate-600">
                BIS / IS 694 / IS 7098 / VDE / CE approved
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-mono text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                24–48h Dispatch
              </div>
              <div className="text-xs text-slate-600">
                Direct from Bangalore hubs across South &amp; West India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
