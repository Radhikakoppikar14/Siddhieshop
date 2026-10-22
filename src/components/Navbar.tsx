import React, { useState } from 'react';
import { Menu, X, FileText, ChevronRight, Phone, Calculator } from 'lucide-react';

interface NavbarProps {
  onOpenRFQ: () => void;
  rfqItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ, rfqItemCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-8 h-8 rounded-sm bg-slate-900 flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider shadow-sm group-hover:bg-slate-800 transition-colors">
            SK
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
              SIDDHI KABEL
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-0.5">
              Corporation Pvt Ltd
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#products"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Products
          </a>
          <a
            href="#selector"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Technical Selector
          </a>
          <a
            href="#calculator"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Sizing Calculator
          </a>
          <a
            href="#anatomy"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Cable Anatomy
          </a>
          <a
            href="#industries"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Industries
          </a>
          <a
            href="#about"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About Siddhi
          </a>
          <a
            href="#contact"
            className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRFQ}
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Quote</span>
            {rfqItemCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] font-mono font-bold bg-amber-500 text-slate-950 rounded-full">
                {rfqItemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              Products &amp; Cables
            </a>
            <a
              href="#selector"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              Interactive Technical Selector
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              Cable Sizing &amp; Voltage Drop Calculator
            </a>
            <a
              href="#anatomy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              Cable Engineering Anatomy
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              Industries Served
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              About Siddhi Kabel
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            >
              Bangalore HQ &amp; Inquiries
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              +91 (080) 2672-0085
            </span>
            <span>Mon–Sat 10:00–18:00</span>
          </div>
        </div>
      )}
    </header>
  );
};
