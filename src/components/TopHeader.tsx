import React, { useEffect, useState } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, Tag, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Optional: put an external RFQ website address here, e.g. 'https://rfq.siddhikabel.com'.
// While it is empty, the button opens the Products on Offer page inside this site.
const RFQ_SITE_URL = '';

interface TopHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenOffer: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenOffer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' },
  ];

  const productBrands = [
    { id: 'lapp', label: 'Lapp' },
    { id: 'havells', label: 'Havells' },
    { id: 'eaton', label: 'Eaton - Moeller' },
    { id: 'jef', label: 'JEF Eco Safe' },
    { id: 'mennekes', label: 'Mennekes' },
    { id: 'hager', label: 'Hager' },
    { id: 'luker', label: 'Luker' },
    { id: 'neptune', label: 'Neptune' },
  ];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setProductsDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Strip: Deep navy strip */}
      <div className="bg-[#123D73] text-white text-xs border-b border-[#2563A6]">
      <div className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Tagline */}
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-white/90 text-center sm:text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Dependable Electrical Solutions for your Industrial Requirements</span>
          </div>

          {/* Direct Phone & Email */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono sm:text-sm">
            {/* Phone */}
            <motion.a
              href="tel:09620000947"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>096200 00947, 098860 58511</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@siddhikabel.com"
              aria-label="Email Siddhi Kabel at info@siddhikabel.com"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-1.5 text-slate-100 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-white transition-transform group-hover:scale-110 sm:h-[18px] sm:w-[18px]" />
              <span>info@siddhikabel.com</span>
            </motion.a>
          </div>
        </div>
      </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`sticky top-0 z-50 w-full border-b border-slate-200/80 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${isScrolled ? 'bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl' : 'bg-white shadow-xs'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 py-3.5">
        {/* Authentic Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
        >
          <img
            src="/assets/siddhi_logo.png"
            alt="Siddhi Kabel Corporation Private Limited"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.035]"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700 relative">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setProductsDropdown(true)}
                  onMouseLeave={() => setProductsDropdown(false)}
                >
                  <button
                    onClick={() => handleNavClick('products')}
                    className={`relative py-1 text-sm font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                      isActive ? 'text-slate-900' : 'text-slate-900/75 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        productsDropdown ? 'rotate-180 text-slate-900' : 'text-slate-400'
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1 inset-x-0 h-0.5 bg-[#F43F5E] rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {productsDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-60 bg-white/95 backdrop-blur-xl text-slate-700 rounded-2xl shadow-[0_24px_50px_-20px_rgba(47,91,142,0.5)] py-2 z-50 border border-blue-100 mt-2 overflow-hidden"
                      >
                        <div className="px-4 py-2 text-[10px] font-mono font-semibold text-blue-600 uppercase tracking-widest bg-[#E7F0FA] border-b border-blue-100 mb-1">
                          Authorized Brands
                        </div>
                        {productBrands.map((b) => (
                          <button
                            key={b.id}
                            onClick={() => handleNavClick('products')}
                            className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 hover:pl-5 shadow-[inset_0_0_0_0_#F43F5E] hover:shadow-[inset_3px_0_0_0_#F43F5E] transition-all duration-200 flex items-center justify-between group cursor-pointer"
                          >
                            <span>{b.label}</span>
                            <span className="text-[11px] text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                              →
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm font-bold transition-colors cursor-pointer ${
                  isActive ? 'text-slate-900' : 'text-slate-900/75 hover:text-slate-900'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 inset-x-0 h-0.5 bg-[#F43F5E] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary Action Button: Exactly styled as in video with vibrant red #F43F5E */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (RFQ_SITE_URL) window.open(RFQ_SITE_URL, '_blank', 'noopener,noreferrer');
              else handleNavClick('offer');
            }}
            className="pulse-glow inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#F43F5E] hover:bg-[#E11D48] rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Check our RFQ Site</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </motion.button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 space-y-1">
              <div>Tel: 096200 00947, 098860 58511</div>
              <div>Email: info@siddhikabel.com</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
};