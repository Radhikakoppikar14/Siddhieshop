import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { Award, Building2, CheckCircle2, Factory, Quote, ShieldCheck, Sparkles, Users, X, Zap } from 'lucide-react';
import { PageVideoHero } from '../components/PageVideoHero';
import teamGroup from '../assets/about_team_group_hd.jpg';
import teamMeeting from '../assets/about_team_meeting_hd.jpg';
import lappLogo from '../assets/lapp_logo.png';
import eatonLogo from '../assets/eaton_logo.png';
import mennekesLogo from '../assets/mennekes_logo.png';
import partexLogo from '../assets/partex_logo.png';

const principals = [
  { name: 'LAPP INDIA Pvt Ltd', category: 'Cables & conductors', logo: lappLogo },
  { name: 'EATON Power Quality Pvt Ltd', category: 'Power & control', logo: eatonLogo },
  { name: 'MENNEKES Electric India Pvt Ltd', category: 'Industrial plugs', logo: mennekesLogo },
  { name: 'PARTEX Marking Systems', category: 'Marking systems', logo: partexLogo },
];
const strengths = [
  { icon: ShieldCheck, label: 'Proven technical solutions' },
  { icon: CheckCircle2, label: 'Ethical business practices' },
  { icon: Building2, label: 'Careful inventory planning' },
  { icon: Award, label: '15+ years in industrial supply' },
];
const metrics = [
  { value: '15+', label: 'Years of experience', icon: Award },
  { value: '20+', label: 'Industrial segments', icon: Factory },
  { value: '300+', label: 'Customers served', icon: Users },
];

const vp = { once: true, margin: '-60px' } as const;
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const rise: Variants = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

const Tag: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) => (
  <p className={`mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] ${light ? 'text-sky-200' : 'text-blue-600'}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-[#D7263D]" />{children}
  </p>
);

export const AboutPage: React.FC = () => {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  // close the enlarged photo with Esc and lock page scroll while it is open
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [zoom]);

  return (
  <div className="bg-white">
    <PageVideoHero eyebrow="Corporate profile · Since 2008" title="About Siddhi Kabel" description="A dependable partner for industrial electrical, automation and safety solutions." videoSrc="/assets/video/demo3.mp4" />

    <div className="relative z-10 mx-auto mt-0 max-w-4xl px-4 sm:px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div key={m.label} variants={rise} whileHover={{ y: -4, backgroundColor: '#F4F6F9' }} className={`group px-2 py-5 text-center sm:px-6 sm:py-7 ${i < 2 ? 'border-r border-slate-200' : ''}`}>
              <Icon className="mx-auto mb-2 h-4 w-4 text-[#2563A6] transition-transform group-hover:-translate-y-0.5" />
              <div className="text-2xl font-extrabold tracking-tight text-[#0B2F5B] sm:text-4xl">{m.value}</div>
              <div className="mt-1 text-[10px] font-semibold text-slate-600 sm:text-xs">{m.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>

    {/* ===== WHO WE ARE: sticky heading left, copy right, strengths as a full-width row ===== */}
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <motion.div variants={rise}><Tag>Who we are</Tag></motion.div>
            <motion.h2 variants={rise} className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">Connecting industry with the products it relies on.</motion.h2>
            <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }} className="mt-6 h-1 w-16 origin-left rounded-full bg-[#D7263D]" />
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base lg:col-span-7 lg:pt-12">
          <motion.p variants={rise} className="border-l-4 border-[#2563A6] pl-5 text-lg font-semibold leading-8 text-slate-800">Siddhi Kabel was established in 2008 by professionals with more than 15 years of experience supporting industrial electrical, automation and safety requirements.</motion.p>
          <motion.p variants={rise}>We work with leading Indian and multinational manufacturers to supply LT and HT cables, conduits, connectors, LED lighting, circuit breakers, safety relays, isolators, earthing solutions and lightning protection products.</motion.p>
          <motion.p variants={rise}>Our role goes beyond supply. We help customers choose products for their applications and standards, then support them with responsive service and reliable sourcing across machine tools, pharmaceutical, process, automotive, oil and gas, chemical and project industries.</motion.p>
        </motion.div>
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.label} variants={rise} whileHover={{ y: -6 }} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F4F6F9] p-5 text-sm font-semibold text-slate-800 transition-shadow hover:bg-white hover:shadow-xl">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-colors group-hover:bg-[#2563A6] group-hover:text-white"><Icon className="h-5 w-5" /></span>
              {s.label}
            </motion.div>
          );
        })}
      </motion.div>
    </section>

    {/* ===== VISION & MISSION: bento grid mixing text tiles and team photos ===== */}
    <section className="relative isolate overflow-hidden bg-[#F4F6F9] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[28rem] w-[28rem] rounded-full bg-rose-100/60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <motion.div variants={rise}><Tag>What guides our work</Tag></motion.div>
            <motion.h2 variants={rise} className="text-3xl font-extrabold tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">Vision &amp; mission</motion.h2>
          </div>
          <motion.p variants={rise} className="max-w-md text-sm leading-6 text-slate-600">A clear purpose, a capable team and a consistent focus on customer outcomes.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          <motion.figure initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }} whileHover={{ y: -4 }} onClick={() => setZoom({ src: teamGroup, alt: "Siddhi Kabel team standing together" })} className="group relative min-h-[320px] cursor-zoom-in overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
            <img src={teamGroup} decoding="async" alt="Siddhi Kabel team standing together" className="absolute inset-0 h-full w-full object-cover object-[center_30%] [image-rendering:auto] contrast-[1.04] saturate-[1.05]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <span className="max-w-xs text-base font-semibold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">The people behind every promise</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-white"><Users className="h-4 w-4" /></span>
            </figcaption>
          </motion.figure>

          <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6, delay: 0.1 }} whileHover={{ y: -4 }} className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Our vision</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:-rotate-6 group-hover:scale-105"><Building2 className="h-5 w-5" /></span>
            </div>
            <p className="text-xl font-semibold leading-relaxed tracking-tight text-[#0B2F5B] lg:text-2xl">To be a leading, preferred and respected solution partner for customers in the field of electrical products and services.</p>
            <div className="mt-6 h-1 w-12 rounded-full bg-[#D7263D] transition-all duration-500 group-hover:w-24" />
          </motion.article>

          <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6, delay: 0.2 }} whileHover={{ y: -4 }} onClick={() => setZoom({ src: teamMeeting, alt: "Siddhi Kabel colleagues reviewing customer requirements together" })} className="group relative min-h-[220px] cursor-zoom-in overflow-hidden rounded-3xl">
            <img src={teamMeeting} decoding="async" alt="Siddhi Kabel colleagues reviewing customer requirements together" className="absolute inset-0 h-full w-full object-cover object-[center_30%] [image-rendering:auto] contrast-[1.04] saturate-[1.05]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <span className="text-sm font-semibold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">Working closely with our customers</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-white"><Sparkles className="h-4 w-4" /></span>
            </figcaption>
          </motion.figure>

          <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6, delay: 0.3 }} whileHover={{ y: -4 }} className="group flex flex-col justify-between rounded-3xl border border-rose-100 bg-white p-6 text-[#0B2F5B] shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our mission</span>
              <CheckCircle2 className="h-5 w-5 text-[#D7263D] transition-transform group-hover:scale-125" />
            </div>
            <p className="text-base font-semibold leading-relaxed">Work towards continuous improvement and stay focused on achieving customer satisfaction.</p>
          </motion.article>
        </div>
      </div>
    </section>

    {/* ===== AUTHORIZED PARTNERS: numbered grid on light background ===== */}
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <motion.div variants={rise}><Tag>Our supply network</Tag></motion.div>
            <motion.h2 variants={rise} className="text-3xl font-extrabold tracking-tight text-[#0B2F5B] sm:text-4xl">Authorized partners</motion.h2>
          </div>
          <motion.p variants={rise} className="max-w-md text-sm leading-6 text-slate-600">Trusted channels for genuine products and dependable technical support.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principals.map((p) => (
            <motion.div key={p.name} variants={rise} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl">
              <div className="relative mb-5 flex h-16 items-center justify-start rounded-xl bg-white"><img src={p.logo} alt={`${p.name} logo`} loading="lazy" decoding="async" className="max-h-12 w-auto max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105" /></div>
              <p className="relative text-sm font-bold leading-snug text-slate-900">{p.name}</p>
              <p className="relative mt-2 font-mono text-[11px] text-slate-500">{p.category}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#2563A6] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600"><CheckCircle2 className="h-4 w-4" />Verified supply relationships</div>
      </div>
    </section>

    {/* ===== AT A GLANCE ===== */}
    <section className="border-y border-slate-200 bg-[#F4F6F9] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
          <motion.div variants={rise} className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600"><Zap className="h-3.5 w-3.5" />Siddhi Kabel at a glance</motion.div>
          <motion.h2 variants={rise} className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl">The right products, supported by people who understand the work.</motion.h2>
          <motion.p variants={rise} className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">We monitor changing requirements, review applications carefully and plan inventory around customer needs. Our sourcing network and technical team help keep projects and day-to-day operations moving.</motion.p>
          <motion.div variants={rise} whileHover={{ x: 4 }} className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Quote className="h-4 w-4" /></span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">Technical services</p>
              <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">Electrical earthing and lightning protection audits and installation, LED lighting projects, customized electrical control equipment and wire harnessing.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <AnimatePresence>
      {zoom && (
        <motion.div
          key="photo-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-slate-950/90 p-2 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt}
        >
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Close photo"
            className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 transition hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            src={zoom.src}
            alt={zoom.alt}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-auto max-w-[98vw] cursor-default rounded-2xl object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
};