import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenOffer: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About us' },
  { id: 'products', label: 'Products', hasDropdown: true },
  { id: 'industries', label: 'Industries' },
  { id: 'contact', label: 'Contact' },
];
const productBrands = ['Lapp', 'Havells', 'Eaton - Moeller', 'JEF Eco Safe', 'Mennekes', 'Hager', 'Luker', 'Neptune'];

export const SideNav: React.FC<SideNavProps> = ({ activeTab, setActiveTab }) => {
  const [open, setOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const go = (tab: string) => {
    setActiveTab(tab);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const panel = (
    <div className="flex h-full flex-col gap-6 overflow-y-auto px-6 py-7">
      <button onClick={() => go('home')} className="self-start rounded-xl bg-white p-2.5 shadow-lg cursor-pointer">
        <img src="/assets/siddhi_logo.png" alt="Siddhi Kabel Corporation Private Limited" className="h-10 w-auto object-contain" />
      </button>

      <p className="flex items-start gap-2 text-[11px] font-medium leading-relaxed tracking-wide text-white/80">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#F43F5E]" />
        Dependable Electrical Solutions for your Industrial Requirements
      </p>

      <nav className="flex flex-col gap-1">
        {navItems.map((item, i) => {
          const active = activeTab === item.id;
          return (
            <motion.div key={item.id} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}>
              <button
                onClick={() => (item.hasDropdown ? (setBrandsOpen((v) => !v), go('products')) : go(item.id))}
                className={`relative flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-bold transition-colors cursor-pointer ${active ? 'text-white' : 'text-white/65 hover:bg-white/5 hover:text-white'}`}
              >
                {active && <motion.span layoutId="sideActive" className="absolute inset-0 rounded-lg bg-white/10 border-l-4 border-[#F43F5E]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span className="relative">{item.label}</span>
                {item.hasDropdown && <ChevronDown className={`relative h-4 w-4 transition-transform ${brandsOpen ? 'rotate-180' : ''}`} />}
              </button>
              {item.hasDropdown && (
                <AnimatePresence initial={false}>
                  {brandsOpen && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="ml-5 mt-1 overflow-hidden border-l border-white/15">
                      <li className="px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-sky-200">Authorized Brands</li>
                      {productBrands.map((b) => (
                        <li key={b}>
                          <button onClick={() => go('products')} className="group flex w-full items-center justify-between px-4 py-2 text-left text-xs font-semibold text-white/70 transition-all hover:pl-5 hover:text-white cursor-pointer">
                            {b}
                            <span className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#F43F5E]">→</span>
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <motion.button
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => go('offer')}
          className="pulse-glow flex w-full items-center justify-center gap-2 rounded-lg bg-[#F43F5E] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E11D48] cursor-pointer"
        >
          <span>Check our RFQ Site</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </motion.button>
        <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-xs text-white/80">
          <a href="tel:09620000947" className="flex items-center gap-2 hover:text-white"><Phone className="h-3.5 w-3.5 text-[#F43F5E]" />096200 00947, 098860 58511</a>
          <a href="mailto:info@siddhikabel.com" aria-label="Email Siddhi Kabel at info@siddhikabel.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-3.5 w-3.5" />info@siddhikabel.com</a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop: fixed vertical sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 bg-[#0B2F5B] lg:block">{panel}</aside>

      {/* Mobile: compact top bar + slide-in drawer */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-[#0B2F5B] px-4 py-2.5 shadow-lg lg:hidden">
        <button onClick={() => go('home')} className="rounded-lg bg-white p-1.5 cursor-pointer">
          <img src="/assets/siddhi_logo.png" alt="Siddhi Kabel" className="h-8 w-auto object-contain" />
        </button>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-white hover:bg-white/10" aria-label="Toggle mobile menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 300, damping: 32 }} className="fixed inset-y-0 left-0 z-[55] w-72 max-w-[85vw] bg-[#0B2F5B] pt-14 shadow-2xl lg:hidden">
            {panel}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
