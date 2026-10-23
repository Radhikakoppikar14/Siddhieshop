import React from 'react';
import { ArrowRight, Cable, Factory, Lightbulb, Mail, Phone, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface SiddhiFooterProps {
  onNavigate: (tab: string) => void;
}

const navigationLinks = [
  { label: 'Home', tab: 'home' },
  { label: 'About us', tab: 'about' },
  { label: 'Products', tab: 'products' },
  { label: 'Industries', tab: 'industries' },
  { label: 'Contact', tab: 'contact' },
];

const productAreas = [
  {
    icon: Cable,
    title: 'Cables & connectivity',
    detail: 'Power, control, data, instrumentation, servo and flexible cables.',
  },
  {
    icon: Factory,
    title: 'Automation & control',
    detail: 'Switchgear, contactors, motor protection, connectors and industrial plugs.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting & distribution',
    detail: 'Industrial LED lighting, drivers and electrical distribution products.',
  },
  {
    icon: ShieldCheck,
    title: 'Earthing & protection',
    detail: 'Grounding, lightning arrestors and surge protection solutions.',
  },
];

const partnerBrands = ['LAPP', 'EATON', 'HAVELLS', 'HAGER', 'MENNEKES', 'JEF ECO SAFE'];

export const SiddhiFooter: React.FC<SiddhiFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#0B2F5B] text-slate-200">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-11 py-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-14 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-5 md:col-span-2 lg:col-span-5"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex rounded-xl bg-white p-2.5 shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Siddhi Kabel home"
            >
              <img
                src="/assets/siddhi_logo.png"
                alt="Siddhi Kabel Corporation Private Limited"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </button>

            <p className="max-w-md text-sm leading-7 text-slate-200">
              Reliable industrial electrical, automation and safety products, backed by knowledgeable support and dependable supply.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href="tel:09620000947"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-blue-300/70 hover:text-blue-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Phone className="h-3.5 w-3.5 text-sky-200 transition-transform group-hover:rotate-[-12deg]" />
                096200 00947
              </a>
              <a
                href="mailto:info@siddhikabel.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-blue-300/70 hover:text-blue-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Mail className="h-3.5 w-3.5 text-sky-200 transition-transform group-hover:-translate-y-0.5" />
                Email our team
              </a>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            aria-label="Footer navigation"
            className="lg:col-span-3"
          >
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">Explore Siddhi Kabel</h2>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navigationLinks.map((link) => (
                <li key={link.tab}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.tab)}
                    className="group inline-flex items-center gap-1.5 text-sm text-white transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:text-blue-300"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">Serving industry since</div>
              <div className="text-2xl font-bold tracking-tight text-white">2008</div>
              <div className="mt-1 text-xs text-slate-200">Bangalore, India</div>
            </div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">Product expertise</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
              {productAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.button
                    key={area.title}
                    type="button"
                    onClick={() => onNavigate('products')}
                    whileHover={{ y: -3 }}
                    className="group rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5 text-left transition-colors hover:border-blue-300/70 hover:text-blue-300 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-sky-200 transition-colors group-hover:bg-red-500/20">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="block text-xs font-semibold text-slate-100">{area.title}</span>
                    <span className="mt-1 block text-[11px] leading-5 text-slate-200">{area.detail}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-y border-white/10 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-200 sm:mb-0">Authorized multi-brand supply</p>
          <div className="flex flex-wrap gap-2">
            {partnerBrands.map((brand) => (
              <motion.span
                key={brand}
                whileHover={{ y: -2 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold tracking-wide text-slate-200 transition-colors hover:border-white/20 hover:text-white"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="py-5 text-center text-[11px] text-slate-200 sm:text-left">
          <p>© {new Date().getFullYear()} Siddhi Kabel Corporation Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
