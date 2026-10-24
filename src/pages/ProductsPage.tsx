import React, { useEffect, useState } from 'react';
import partexLogo from '../assets/partex_logo.png';
import lappLogo from '../assets/lapp_logo.png';
import eatonLogo from '../assets/eaton_logo.png';
import mennekesLogo from '../assets/mennekes_logo.png';
import { Activity, Cable, ChevronRight, Network, Plug, Radio, ShieldCheck, Wrench } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { BRAND_PAGES, PARTEX_PRODUCTS, type BrandId, type BrandPage } from '../data/brandProducts';

interface ProductsViewProps {
  onOpenOffer: () => void;
  onRequestQuote?: () => void;
  initialBrand?: string;
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  cable: Cable, activity: Activity, network: Network, radio: Radio, shield: ShieldCheck, plug: Plug, wrench: Wrench,
};
const LOGOS: Record<BrandId, string> = { lapp: lappLogo, eaton: eatonLogo, mennekes: mennekesLogo, partex: partexLogo };

const tabs: { id: BrandId; label: string }[] = [
  { id: 'lapp', label: 'Lapp' },
  { id: 'eaton', label: 'Eaton - Moeller' },
  { id: 'mennekes', label: 'Mennekes' },
  { id: 'partex', label: 'Partex' },
];

/* full static class names so Tailwind keeps them */
const THEME: Record<BrandId, {
  banner: string; section: string; heading: string; card: string; accent: string; link: string; focus: string; tab: string;
}> = {
  lapp: {
    banner: 'bg-gradient-to-r from-[#E8590C] to-[#F2791F]', section: 'bg-white', heading: 'text-slate-900',
    card: 'border-orange-200 bg-[#FFF8F2]', accent: 'bg-orange-500', link: 'text-orange-700', focus: 'border-orange-400', tab: 'bg-orange-500',
  },
  eaton: {
    banner: 'bg-gradient-to-r from-[#2B67C8] to-[#3E80E0]', section: 'bg-[#EAF1FD]', heading: 'text-[#1D4DB0]',
    card: 'border-[#2B67C8] bg-white', accent: 'bg-[#2B67C8]', link: 'text-[#1D4DB0]', focus: 'border-[#1D4DB0]', tab: 'bg-[#2B67C8]',
  },
  mennekes: {
    banner: 'bg-gradient-to-r from-[#EE4B58] to-[#F46A74]', section: 'bg-[#FDE9EB]', heading: 'text-[#8B1235]',
    card: 'border-[#E5303F] bg-white', accent: 'bg-[#E5303F]', link: 'text-[#8B1235]', focus: 'border-[#8B1235]', tab: 'bg-[#E5303F]',
  },
  partex: {
    banner: 'bg-gradient-to-r from-[#4B5563] to-[#6B7280]', section: 'bg-white', heading: 'text-slate-900',
    card: 'border-slate-200 bg-[#FFF8F2]', accent: 'bg-[#2563A6]', link: 'text-[#123D73]', focus: 'border-slate-400', tab: 'bg-[#123D73]',
  },
};

const vp = { once: true, margin: '-60px' } as const;
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const rise: Variants = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const FeaturedGrid: React.FC<{ page: BrandPage; onQuote: () => void }> = ({ page, onQuote }) => {
  const t = THEME[page.id];
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {page.featured!.map((item) => {
        const Icon = item.icon ? ICONS[item.icon] : undefined;
        return (
          <motion.article
            key={item.title}
            variants={rise}
            whileHover={{ y: -6 }}
            data-live-card
            className={`group flex flex-col overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-xl ${t.card} ${page.id === 'lapp' ? 'hover:border-orange-400' : 'hover:border-slate-400'}`}
          >
            <div className="flex h-36 items-center justify-center">
              {Icon ? (
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-slate-900 bg-orange-400 text-slate-900 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-10 w-10" />
                </span>
              ) : (
                <img src={LOGOS[page.id]} alt="" className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
              )}
            </div>
            <div className={`h-0.5 w-full ${t.accent}`} />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-sm font-extrabold leading-snug text-slate-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              <button
                type="button"
                onClick={onQuote}
                className={`mt-auto inline-flex w-fit cursor-pointer items-center gap-1 pt-5 text-xs font-bold ${t.link} hover:underline`}
              >
                View specifications <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
};

const BulletGrid: React.FC<{ page: BrandPage }> = ({ page }) => {
  const t = THEME[page.id];
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid gap-5 md:grid-cols-2">
      {page.bullets!.map((item) => (
        <motion.article
          key={item.title}
          variants={rise}
          whileHover={{ y: -4 }}
          data-live-card
          className={`rounded-lg border p-5 shadow-sm transition-shadow hover:shadow-lg ${t.card}`}
        >
          <h3 className={`text-sm font-extrabold ${t.heading}`}>{item.title}</h3>
          <ul className="mt-3 space-y-1.5">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${t.accent}`} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </motion.div>
  );
};

const TextGrid: React.FC<{ page: BrandPage }> = ({ page }) => {
  const t = THEME[page.id];
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid gap-5 md:grid-cols-2">
      {page.text!.map((item) => (
        <motion.article
          key={item.title}
          variants={rise}
          whileHover={{ y: -4 }}
          data-live-card
          className={`rounded-lg border p-5 shadow-sm transition-shadow hover:shadow-lg ${t.card}`}
        >
          <h3 className={`text-sm font-extrabold ${t.heading}`}>{item.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.text}</p>
        </motion.article>
      ))}
    </motion.div>
  );
};

export const ProductsPage: React.FC<ProductsViewProps> = ({ onOpenOffer, onRequestQuote, initialBrand = 'lapp' }) => {
  const valid = (id: string): BrandId => (id in BRAND_PAGES ? (id as BrandId) : 'lapp');
  const [brand, setBrand] = useState<BrandId>(valid(initialBrand));
  useEffect(() => { setBrand(valid(initialBrand)); }, [initialBrand]);

  const page = BRAND_PAGES[brand];
  const t = THEME[brand];
  const quote = onRequestQuote ?? onOpenOffer;

  return (
    <section id="products" className="relative border-b border-slate-200 bg-white">
      {/* brand switcher */}
      <div className="border-b border-slate-200 bg-white">
        <div className="no-scrollbar mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {tabs.map((tab) => {
            const active = brand === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setBrand(tab.id)}
                className={`relative isolate shrink-0 cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  active ? 'text-white' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {active && (
                  <motion.span layoutId="brandTab" className={`absolute inset-0 -z-10 rounded-lg ${t.tab}`} transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* banner with background video */}
      <div className="relative isolate overflow-hidden bg-slate-800">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="brand-banner-video pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/assets/video/demo3.mp4" type="video/mp4" />
        </video>
        <div key={`banner-${brand}`} className={`absolute inset-0 -z-10 opacity-80 ${t.banner}`} />
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[11px] font-medium text-white/80">
            <span>Home</span><ChevronRight className="h-3 w-3" /><span>Products</span><ChevronRight className="h-3 w-3" />
            <span className="font-bold text-white">{page.name}</span>
          </div>
          <motion.div key={`banner-content-${brand}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-5 flex flex-wrap items-center gap-5 sm:gap-7">
            <div className="flex h-20 w-48 items-center justify-center rounded-xl bg-white px-5 shadow-lg sm:h-24 sm:w-60">
              <img src={LOGOS[brand]} alt={`${page.name} logo`} className="max-h-12 w-auto max-w-full object-contain sm:max-h-14" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{page.name}</h2>
              <p className="mt-1 text-xs font-semibold text-white/85">{page.country}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* intro + photo */}
      <div key={`intro-${brand}`} className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-14">
        <motion.p initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="text-sm leading-7 text-slate-600 lg:col-span-8 lg:pr-12">
          {page.intro}
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.6 }} className={`group overflow-hidden rounded-lg border-2 p-1 shadow-md lg:col-span-4 ${t.focus}`}>
          <img src={page.introImage} alt={page.introAlt} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>
      </div>

      {/* products */}
      <div key={`range-${brand}`} className={`${t.section} px-4 py-12 sm:px-6 lg:px-8 lg:py-16`}>
        <div className="mx-auto max-w-7xl">
          <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} className={`mb-7 text-2xl font-extrabold tracking-tight sm:text-3xl ${t.heading}`}>
            {page.sectionTitle}
          </motion.h3>
          {page.layout === 'featured' && <FeaturedGrid page={page} onQuote={quote} />}
          {page.layout === 'bullets' && <BulletGrid page={page} />}
          {page.layout === 'text' && <TextGrid page={page} />}

          {brand === 'partex' && (
            <div className="mt-14">
              <h3 className="mb-7 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Partex product details</h3>
              <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {PARTEX_PRODUCTS.map((p) => (
                  <motion.article
                    key={p.id}
                    variants={rise}
                    whileHover={{ y: -6 }}
                    data-live-card
                    className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-t-[5px] border-slate-200 border-t-slate-500/70 bg-white shadow-sm transition-shadow hover:shadow-xl"
                  >
                    <div className="flex h-36 items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
                      <img src={p.image} alt={p.name} loading="lazy" className="h-28 w-auto max-w-[80%] rounded-md object-cover shadow-md ring-1 ring-slate-200 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                      <span className="mb-3 inline-flex w-fit rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-700">PARTEX SWEDEN</span>
                      <h4 className="text-base font-bold leading-snug text-slate-900">{p.name}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          )}

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row">
            <div>
              <div className="text-sm font-bold text-[#0B2F5B]">Need specific {page.name.split(' ')[0]} part numbers or sizes?</div>
              <div className="mt-0.5 text-xs text-slate-600">Immediate ex-stock availability check from our Bangalore warehouse.</div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button type="button" onClick={quote} className="cursor-pointer rounded-lg bg-[#123D73] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#D7263D]">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};