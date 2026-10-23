import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFQ }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-white flex items-center justify-center text-slate-950 font-mono font-bold text-xs tracking-wider">
                SK
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                SIDDHI KABEL
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Siddhi Kabel Corporation Private Limited is an authorized industrial distributor and importer of premium power, control, flexible instrumentation cables, and automation accessories based in Bangalore, India.
            </p>

            <div className="text-[11px] font-mono text-slate-400 space-y-1">
              <div>Incorporated Oct 10, 2008 · Bangalore, Karnataka</div>
              <div>Authorized Partner: Lapp Group · Polycab · Finolex · KEI</div>
            </div>
          </div>

          {/* Column 2: Product Lines */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase font-semibold text-white tracking-wider">
              Cable Solutions
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  ÖLFLEX® Control Cables
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  UNITRONIC® Shielded Data
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  1.1kV XLPE Armoured Power
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  ETHERLINE® Industrial Ethernet
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  FRLSH Building &amp; Panel Wire
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Heat Resistant Silicone Wires
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Engineering Tools */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase font-semibold text-white tracking-wider">
              Technical Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#selector" className="hover:text-white transition-colors">
                  Interactive Cable Selector
                </a>
              </li>
              <li>
                <a href="#anatomy" className="hover:text-white transition-colors">
                  Cable Layer Anatomy Visualizer
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Automotive &amp; Robotics Specs
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Solar &amp; Renewable Energy Lines
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Cable Sizing &amp; Voltage Drop Tool
                </a>
              </li>
              <li>
                <button onClick={onOpenRFQ} className="hover:text-white transition-colors text-left">
                  BOM Quotation Configurator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facilities */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase font-semibold text-white tracking-wider">
              Bangalore Logistics Hubs
            </div>
            <div className="space-y-2 text-slate-400">
              <p>
                <strong className="text-slate-300 block font-mono text-[11px]">Primary Central Warehouse:</strong>
                No. 3, 1st Main Rd, Banashankari 3rd Stage, Bangalore 560085
              </p>
              <p className="pt-1">
                <strong className="text-slate-300 block font-mono text-[11px]">City Logistics Office:</strong>
                Chamrajpet, Bangalore 560018
              </p>
              <p className="pt-1 font-mono text-[11px]">
                Tel: +91 (080) 2672-0085
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2008–2026 Siddhi Kabel Corporation Private Limited. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono">ISO 9001:2015 Registered</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
