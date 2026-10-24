import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import {
  Anchor, ArrowRight, Bot, Car, CheckCircle2, Cog, Factory, FlaskConical, Fuel,
  HardHat, Play, Shield, ShieldCheck, Stethoscope, Truck, X, Award, MapPin,
} from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/siddhiContent';
import { PageVideoHero } from './PageVideoHero';

interface IndustriesPageProps {
  onContactClick: () => void;
}

/* ------------------------------------------------------------------
   VIDEO FILES  ->  public/assets/video/
   File names below match the files in your folder (they contain spaces).
   If any file name differs, change ONLY the text inside the quotes here.
------------------------------------------------------------------- */
const VIDEO_DIR = '/assets/video/';
const VIDEOS = {
  automobile: VIDEO_DIR + 'automobile industries.mp4',
  automation: VIDEO_DIR + 'automation and conveyers.mp4',
  machine: VIDEO_DIR + 'machine tools.mp4',
};
const videoUrl = (path: string) => encodeURI(path); // spaces -> %20

const showcase = [
  {
    no: '01',
    title: 'AUTOMOBILE INDUSTRIES',
    video: VIDEOS.automobile,
    badge: 'Automobile & Rail transport',
    desc: 'Flexible control and power cables, connectors and glands for assembly lines, robotic cells and vehicle manufacturing plants.',
    points: ['Flexible control cables', 'Connectors & glands', 'Robotic cell cabling'],
    icon: Car,
  },
  {
    no: '02',
    title: 'AUTOMATION & CONVEYERS',
    video: VIDEOS.automation,
    badge: 'Automation & Robotics',
    desc: 'Servo, data and control cabling with industrial plugs and motor protection for conveyor systems and automated material handling.',
    points: ['Servo & data cables', 'Industrial plugs', 'Motor protection'],
    icon: Truck,
  },
  {
    no: '03',
    title: 'MACHINE TOOLS',
    video: VIDEOS.machine,
    badge: 'Mechanical & Plant Engineering',
    desc: 'Cables, connectors, circuit breakers and safety relays for machine tool builders and plant engineering requirements.',
    points: ['Circuit breakers', 'Safety relays', 'Machine-grade cables'],
    icon: Cog,
  },
];

const sectorIcons = [HardHat, Car, Bot, Stethoscope, Cog, Anchor, Shield, FlaskConical, Fuel];

const highlights = [
  { icon: Factory, value: `${INDUSTRIES_LIST.length}+`, label: 'Sectors Served' },
  { icon: MapPin, value: 'Pan-India', label: 'Supply Network' },
  { icon: Award, value: 'Type Tests', label: 'Certificates & MTCs' },
  { icon: ShieldCheck, value: 'Certified', label: 'Reliable Quality' },
];

const vp = { once: true, margin: '-60px' } as const;
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ---------- Video tile (with graceful fallback if file is missing) ---------- */
const SectorVideo: React.FC<{ src: string; title: string; badge: string; no: string; onOpen: () => void }> = ({
  src, title, badge, no, onOpen,
}) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-[#0B2F5B] shadow-2xl shadow-[#123D73]/25 ring-1 ring-[#123D73]/10">
      {!failed && (
        <video
          src={videoUrl(src)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={title}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#123D73] to-[#0B2F5B] text-center text-xs font-mono text-white/70">
          Video not found:<br />{src}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5B]/80 via-[#0B2F5B]/10 to-transparent" />
      <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#123D73] shadow-sm backdrop-blur">
        {badge}
      </div>
      <div className="pointer-events-none absolute bottom-3 left-5 select-none font-mono text-6xl font-black leading-none text-white/20 sm:text-7xl">
        {no}
      </div>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Watch ${title} video`}
        className="absolute bottom-4 right-4 flex cursor-pointer items-center gap-2 rounded-full bg-white/95 py-2 pl-2 pr-4 font-mono text-[11px] font-bold uppercase tracking-wider text-[#123D73] shadow-lg backdrop-blur transition hover:bg-white"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563A6] text-white">
          <Play className="h-3.5 w-3.5 translate-x-px fill-white" />
        </span>
        Watch
      </button>
    </div>
  );
};

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onContactClick }) => {
  const [active, setActive] = useState<(typeof showcase)[number] | null>(null);

  // close lightbox with Esc + lock page scroll while open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  const ribbon = [...INDUSTRIES_LIST, ...INDUSTRIES_LIST];

  return (
    <div className="bg-white">
      <PageVideoHero
        eyebrow="INDUSTRY EXPERTISE"
        title="Industries We Serve"
        description="Delivering engineered cabling and electrical switchgear to critical sectors across India with certified reliability."
        videoSrc={VIDEOS.automation}
      />

      {/* floating highlight strip overlapping the hero */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-2xl shadow-[#123D73]/15 lg:grid-cols-4"
        >
          {highlights.map(({ icon: Icon, value, label }) => (
            <motion.div key={label} variants={rise} className="group flex items-center gap-3 bg-white p-4 sm:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#123D73] to-[#2563A6] text-white shadow-md transition-transform group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-base font-extrabold leading-tight text-[#123D73] sm:text-lg">{value}</div>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* intro */}
      <section className="px-4 pt-14 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mx-auto max-w-3xl text-center">
          <motion.div variants={rise} className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />Pan-India Supply
          </motion.div>
          <motion.h2 variants={rise} className="mt-4 text-3xl font-extrabold tracking-tight text-[#123D73] sm:text-4xl">
            Built for <span className="bg-gradient-to-r from-[#D7263D] to-[#B81E32] bg-clip-text text-transparent">demanding</span> industrial environments
          </motion.h2>
          <motion.p variants={rise} className="mt-3 text-base leading-relaxed text-slate-600">
            Explore our sector specializations and certified solutions for demanding industrial environments.
          </motion.p>
        </motion.div>
      </section>

      {/* featured sectors: video rows */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#2563A6]/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#D7263D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl space-y-14 lg:space-y-20">
          {showcase.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <SectorVideo src={s.video} title={s.title} badge={s.badge} no={s.no} onOpen={() => setActive(s)} />
                </div>

                <div className={`space-y-5 lg:col-span-5 ${i % 2 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D7263D] to-[#B81E32] text-white shadow-lg shadow-[#D7263D]/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Sector {s.no}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#123D73] sm:text-3xl">{s.title}</h3>
                  <div className="h-1 w-14 rounded-full bg-[#D7263D] transition-all duration-500 group-hover:w-28" />
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{s.desc}</p>
                  <ul className="flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="inline-flex items-center gap-1.5 rounded-full border border-[#123D73]/10 bg-[#F4F6F9] px-3 py-1.5 text-xs font-semibold text-[#123D73]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#D7263D]" />{p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onContactClick}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#D7263D] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#B81E32]"
                    >
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActive(s)}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#123D73]/20 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#123D73] hover:border-[#123D73]/50"
                    >
                      <Play className="h-3.5 w-3.5 fill-[#123D73]" /> Watch Video
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* scrolling sector ribbon */}
      <section aria-hidden className="overflow-hidden border-y border-[#123D73]/10 bg-white py-4">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {ribbon.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-200 bg-[#F4F6F9] px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#123D73]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D7263D]" />{item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* sector specializations: dark showcase */}
      <section
        className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        style={{
          background:
            'radial-gradient(900px circle at 85% 0%, rgba(37, 99, 166,0.18), transparent 55%), radial-gradient(900px circle at 0% 100%, rgba(37,99,166,0.45), transparent 55%), #0B2F5B',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <motion.span variants={rise} className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF6B7D]">What we cover</motion.span>
              <motion.h2 variants={rise} className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Sector Specializations</motion.h2>
              <motion.div variants={rise} className="mt-3 h-1 w-16 rounded-full bg-[#D7263D]" />
            </div>
            <motion.span variants={rise} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              Pan-India Supply
            </motion.span>
          </motion.div>

          <motion.ul initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_LIST.map((item, i) => {
              const Icon = sectorIcons[i] ?? Factory;
              return (
                <motion.li
                  key={item}
                  variants={rise}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/[0.12]"
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-black text-white/[0.06] transition-colors group-hover:text-[#2563A6]/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D7263D] to-[#B81E32] text-white shadow-lg shadow-[#D7263D]/25 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative text-sm font-bold leading-snug text-white sm:text-base">{item}</h3>
                  <div className="mt-4 h-0.5 w-8 rounded-full bg-[#2563A6] transition-all duration-500 group-hover:w-full" />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>

      {/* callout */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#123D73] to-[#0B2F5B] p-8 shadow-2xl shadow-[#123D73]/30 sm:flex-row sm:p-10"
        >
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[#D7263D]/25 blur-3xl" />
          <div className="relative space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-lg font-bold text-white sm:justify-start">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>Looking for industry compliance certifications?</span>
            </div>
            <p className="text-sm text-blue-100/80">We provide Type Test certificates and MTCs with every consignment directly from Bangalore.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onContactClick}
            className="pulse-glow relative shrink-0 cursor-pointer rounded-xl bg-[#D7263D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#B81E32]"
          >
            Inquire For Your Sector
          </motion.button>
        </motion.div>
      </section>

      {/* video lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B2F5B]/90 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video src={videoUrl(active.video)} controls autoPlay playsInline className="aspect-video w-full bg-black" />
              <div className="flex items-center justify-between gap-3 bg-[#0B2F5B] px-5 py-3">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-white">{active.title}</div>
                <button
                  type="button"
                  onClick={() => { setActive(null); onContactClick(); }}
                  className="cursor-pointer rounded-lg bg-[#D7263D] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#B81E32]"
                >
                  Get a Quote
                </button>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-[#123D73]"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};