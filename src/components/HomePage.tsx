import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useInView, useScroll, useTransform, type Variants } from 'motion/react';
import { ArrowRight, ArrowUpRight, Award, ChevronLeft, ChevronRight, Cpu, Maximize2, Play, Shield, ShieldCheck, Wrench, X, Zap, ShieldAlert, MapPin, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onSelectBrand: (brandId: string) => void;
  onContactClick: (serviceName: string) => void;
}

/* ---------- shared motion helpers ---------- */
const vp = { once: true, margin: '-60px' } as const;
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const rise: Variants = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const word: Variants = { hidden: { opacity: 0, y: 25, filter: 'blur(5px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 260, damping: 24 } } };

const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let id = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / 1500, 1);
      setN(p === 1 ? target : Math.floor((1 - Math.pow(2, -10 * p)) * target));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, target]);
  return <span ref={ref} className="tabular-nums">{n}{suffix}</span>;
};

const Heading: React.FC<{ eyebrow: string; title: string; light?: boolean; center?: boolean }> = ({ eyebrow, title, light, center }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className={center ? 'text-center' : ''}>
    <motion.div variants={rise} className={`mb-2 font-mono text-xs font-semibold uppercase tracking-wider ${light ? 'text-sky-200' : 'text-slate-500'}`}>{eyebrow}</motion.div>
    <motion.h2 variants={rise} className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-[#0B2F5B]'}`}>{title}</motion.h2>
    <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }} className={`mt-3 h-1 w-16 rounded-full bg-[#F43F5E] ${center ? 'mx-auto origin-center' : 'origin-left'}`} />
  </motion.div>
);

/* ---------- content (unchanged) ---------- */
const slides = [
  { id: 1, video: '/assets/video/demo1.mp4', title: 'ELECTRICAL SOLUTIONS', subtitle: 'Power and control, Applications' },
  { id: 2, video: '/assets/video/demo2.mp4', title: 'INDUSTRIAL CABLING', subtitle: 'Precision Power & Automation Cables' },
];

const services = [
  { id: 'cost-effective-cables', title: 'Cost Effective and Reliable Electrical Solutions', image: '/assets/service_cables.jpg', icon: Wrench, description: 'We offer customized electrical control equipments and wire harness apart from LT and HT cables, cabel glands, conductors and connectors.', features: ['LT & HT Cables', 'Wire Harnessing', 'Control Equipment'] },
  { id: 'energy-saving-lighting', title: 'Energy Saving Solutions', image: '/assets/service_lighting.jpg', icon: Zap, description: 'Supply and installation of all kinds of LED light fittings for retrofit and new establishments.', features: ['LED Retrofits', 'Commercial Fixtures', 'Industrial Illumination'] },
  { id: 'earthing-lightning-protection', title: 'Earthing and Lightning Protection', image: '/assets/service_earthing.jpg', icon: ShieldAlert, description: 'Auditing & installation of Electrical earth pits, Chemical Electrical Grounding / earthing solutions, Lightning arrestors.', features: ['Earth Pit Audits', 'Chemical Grounding', 'IS-IEC Standards'] },
];

const brands = [
  { id: 'lapp', name: 'LAPP', tagline: '', color: '#EA580C', category: 'cables', description: 'Lapp Cables produces cables and conductors for different industries and markets.' },
  { id: 'havells', name: 'HAVELLS', tagline: '', color: '#F43F5E', category: 'switchgear', description: 'Havells India Limited is a leading Fast Moving Electrical Goods (FMEG) Company.' },
  { id: 'eaton', name: 'EATON', tagline: 'Powering Business Worldwide', color: '#0284C7', category: 'switchgear', description: 'Eaton produces a broad range of products and services, for power and control, applications.' },
  { id: 'jef', name: 'JEF TECHNO', tagline: '', color: '#0284C7', category: 'earthing', description: 'Comprehensive solutions for maintaince free grounding and lighting protection system.' },
  { id: 'mennekes', name: 'MENNEKES®', tagline: 'Plugs for the world', color: '#F43F5E', category: 'plugs', description: 'MENNEKES is a leading manufacturer of industrial plugs and sockets for various applications.' },
  { id: 'hager', name: ':hager', tagline: '', color: '#0284C7', category: 'switchgear', description: 'Hager is the specialist for electrical installations in residential and commercial sectors.' },
  { id: 'luker', name: 'LUKER®', tagline: '', color: '#2563A6', category: 'lighting', description: 'Manufactures cost effective LED solutions in India for domestic and commercial needs.' },
  { id: 'neptune', name: 'NEPTUNE', tagline: 'NAME THAT CARRIES POWER', color: '#0284C7', category: 'switchgear', description: 'Neptune India offers global products and solutions in the field of Power & Energy based on latest technology.' },
];
const categories = [
  { id: 'all', label: 'All Brands (8)' }, { id: 'cables', label: 'Cables & Conduits' }, { id: 'switchgear', label: 'Switchgear & Power' },
  { id: 'plugs', label: 'Plugs & Sockets' }, { id: 'earthing', label: 'Earthing Systems' }, { id: 'lighting', label: 'LED Lighting' },
];

const whyChoosePoints = [
  'One Trusted source for Complete Solution in Electrical, Safety, Energy and Automation products& Services.',
  'Multiple brands with huge range of world class products.',
  'Wide range of products for Industrial, Commercial and Domestic applications.',
  'Technically, commercially skilled dedicated team.',
  '25 years of presence across industry verticals.',
  'Customer specific and well-planned inventory added with reliable large network for better service.',
  'Complete statutory compliance for hassle free transaction',
  'Ethical business practice.',
];

const clientNames = ['ACE Designers', 'AMS', 'Apicom', 'Bharat Electronics Limited (BEL)', 'BEML Limited'];

export const HomePage: React.FC<HomePageProps> = ({ onSelectBrand, onContactClick }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [category, setCategory] = useState('all');
  const [lightbox, setLightbox] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const slide = slides[current];
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const shownBrands = category === 'all' ? brands : brands.filter((b) => b.category === category);

  const collageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: collageRef, offset: ['start end', 'end start'] });
  const parallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div className="bg-white">
      {/* ===== 1. HERO: framed video card + text, centered in the page container ===== */}
      <section className="relative overflow-hidden bg-[#F0F7FF]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] bg-gradient-to-r from-[#CFE1F5] via-[#DCEAF8] to-[#E8F1FB] lg:block [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]" />
        <motion.div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-rose-100/70 blur-3xl" animate={{ x: [0, -40, 0], y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-10">
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div key={slide.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-5 h-1.5 w-20 origin-left rounded-full bg-[#F43F5E]" />
                <h1 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#0B2F5B] sm:text-4xl lg:text-5xl">{slide.title}</h1>
                <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">{slide.subtitle}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex items-center gap-4">
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={prev} aria-label="Previous Slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-[#F43F5E] cursor-pointer"><ChevronLeft className="h-5 w-5" /></motion.button>
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} onClick={next} aria-label="Next Slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-[#F43F5E] cursor-pointer"><ChevronRight className="h-5 w-5" /></motion.button>
              <div className="flex items-center gap-2">
                {slides.map((sl, i) => (
                  <button key={sl.id} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} className="py-2 cursor-pointer">
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? 'w-10 bg-[#F43F5E]' : 'w-3 bg-slate-300 hover:bg-slate-400'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative lg:col-span-7">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-[3px] border-white bg-slate-200 shadow-xl shadow-slate-900/20 lg:aspect-auto lg:h-[320px]">
              <AnimatePresence initial={false}>
                <motion.div key={slide.id} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0.99, transition: { duration: 0.8 } }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0">
                  <video
                    src={slide.video} autoPlay muted playsInline preload="auto" aria-hidden="true"
                    style={{ opacity: 0, transition: 'opacity 600ms ease' }}
                    onLoadedData={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onEnded={(e) => { if (paused) { e.currentTarget.currentTime = 0; void e.currentTarget.play(); return; } next(); }}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div aria-hidden="true" className="absolute -bottom-2.5 -right-2.5 -z-10 h-full w-full rounded-2xl border-2 border-[#F43F5E]/30" />
          </motion.div>
        </div>

        {/* counters */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 pb-8 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-2xl shadow-slate-900/15">
            {[{ t: 15, l: 'Years Experience' }, { t: 20, l: 'Industrial Segments' }, { t: 289, l: 'Customers Served' }].map((s, i) => (
              <motion.div key={s.l} variants={rise} whileHover={{ y: -4, backgroundColor: '#FFF5F5' }} className={`group cursor-default p-3 sm:p-4 ${i < 2 ? 'border-r border-slate-200' : ''}`}>
                <div className="font-mono text-2xl font-extrabold text-blue-600 transition-transform group-hover:scale-105 sm:text-4xl"><Counter target={s.t} suffix="+" /></div>
                <div className="mt-1 text-xs font-semibold text-slate-800 sm:text-sm">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 2. TRANSFORMING INDUSTRY: centered statement, then overlapping image collage ===== */}
      <section className="overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="space-y-5">
            <motion.div variants={rise} className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F43F5E]" />We Are Siddhi Kabel
            </motion.div>
            <motion.h2 variants={stagger} className="text-4xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-5xl lg:text-6xl">
              {['Transforming', 'Indian', 'Industry', 'With', 'Innovative', 'Products'].map((w) => (
                <motion.span key={w} variants={word} className="mr-[0.22em] inline-block last:mr-0">{w}</motion.span>
              ))}
            </motion.h2>
            <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }} className="mx-auto h-1 w-16 origin-center rounded-full bg-[#F43F5E]" />
            <motion.p variants={rise} className="text-base font-bold leading-snug text-slate-900 sm:text-lg">Siddhi Kabel Corporation Private Limited is one of the leading and reliable suppliers of world class Industrial Electrical, Automation &amp; Safety Products.</motion.p>
            <motion.p variants={rise} className="text-sm leading-relaxed text-slate-600 sm:text-base">We at Siddhi Kabel specialize in providing solutions for High quality industrial products, Our primary focus is to service the needs of our customers for high quality products and services, with more than 15 years of experience in industrial Electrical field and association with leading national and multinational customers &amp; Suppliers, Siddhi Kabel offers superior quality products coupled with best technical support.</motion.p>
          </motion.div>
        </div>

        <div ref={collageRef} className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 items-start gap-6 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 8 }} whileInView={{ opacity: 1, x: 0, rotateY: 0 }} viewport={vp} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.015 }} style={{ transformPerspective: 1100 }} onClick={() => setLightbox(true)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-teal-300/80 bg-[#84BABF] shadow-xl md:col-span-5"
          >
            <img src="/assets/guiding_principle_card.jpg" alt="Our Guiding Principle - Swamy Vivekananda" className="h-auto min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <motion.div aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent mix-blend-screen" animate={{ x: ['-30%', '430%'] }} transition={{ duration: 1.25, delay: 1.1, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }} />
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-slate-950/50 p-2 font-mono text-[11px] text-white backdrop-blur-xs"><Maximize2 className="h-3.5 w-3.5" /><span className="hidden sm:inline">Enlarge</span></div>
          </motion.div>

          <motion.div style={{ y: parallax }} className="md:col-span-7 md:mt-20">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={vp} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl"
            >
              <img src="/assets/worker_robot.jpg" alt="Industrial Electrical Engineering and Robotics" className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[340px]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-3 bottom-3 flex items-center justify-between text-xs text-slate-800">
                <div className="flex items-center gap-2 rounded-lg border border-white/60 bg-white/85 px-3 py-1.5 font-mono backdrop-blur-xs"><Cpu className="h-3.5 w-3.5 text-sky-200" /><span>Industrial Robotics &amp; Automation</span></div>
                <div className="hidden items-center gap-1.5 rounded-lg border border-white/60 bg-white/85 px-2.5 py-1.5 font-mono text-[11px] text-emerald-700 backdrop-blur-xs sm:flex"><ShieldCheck className="h-3.5 w-3.5" /><span>Quality Assured</span></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. SERVICES: expanding accordion panels (hover / tap to open) ===== */}
      <section className="bg-[#F0F7FF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <Heading eyebrow="We Are Siddhi Kabel" title="Services For Industries" />
            <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} className="max-w-lg text-sm leading-relaxed text-slate-600">Get benefited with our unique solutions specially designed for Indian industries to enhance the performance and quality.</motion.p>
          </div>
          <div className="flex flex-col gap-3 lg:h-[480px] lg:flex-row">
            {services.map((s, i) => {
              const Icon = s.icon;
              const on = activeService === i;
              return (
                <motion.div
                  key={s.id} layout
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveService(i)} onClick={() => setActiveService(i)}
                  style={{ flexGrow: on ? 3 : 1, flexBasis: 0, transition: 'flex-grow 0.6s cubic-bezier(0.22,1,0.36,1)' }}
                  className="group relative flex min-h-[360px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative min-h-[170px] flex-1 overflow-hidden">
                    <img src={s.image} alt={s.title} className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${on ? 'scale-105' : 'scale-100'}`} />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#123D73] shadow-2xs backdrop-blur-xs"><Icon className="h-3.5 w-3.5 text-blue-600" /><span>Specialized Service</span></div>
                  </div>
                  <div className="relative space-y-3 bg-white p-6">
                    <h3 className="text-lg font-bold leading-snug text-[#0B2F5B]">{s.title}</h3>
                    <div className={`space-y-3 ${on ? '' : 'lg:hidden'}`}>
                      <p className="text-xs leading-relaxed text-slate-600">{s.description}</p>
                      <div className="flex flex-wrap gap-1.5">{s.features.map((f) => <span key={f} className="rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-slate-600">{f}</span>)}</div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); onContactClick(s.title); }} className="group/r inline-flex items-center gap-2 border-t border-slate-200 pt-3 text-xs font-semibold text-blue-600 cursor-pointer">
                        <span>Request Details</span><ArrowRight className="h-4 w-4 transition-transform group-hover/r:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 4. ABOUT: full-width photo with overlapping copy card ===== */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.button
            type="button" onClick={() => setVideoOpen(true)} aria-label="Play Siddhi Kabel corporate showcase video"
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.8 }}
            className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl bg-slate-900 p-0 shadow-xl lg:col-span-6"
          >
            <img src="/assets/worker_robot.jpg" alt="Industrial automation in action at a modern factory" className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[480px]" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/30 via-transparent to-transparent">
              <div className="relative flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.5, 2], opacity: [0.7, 0.3, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }} className="pointer-events-none absolute h-20 w-20 rounded-full bg-white/40" />
                <motion.div animate={{ scale: [1, 1.4, 1.8], opacity: [0.6, 0.25, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.7 }} className="pointer-events-none absolute h-20 w-20 rounded-full bg-[#F43F5E]/50" />
                <motion.span whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }} className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl sm:h-20 sm:w-20"><Play className="ml-1 h-7 w-7 fill-current text-blue-600 sm:h-9 sm:w-9" /></motion.span>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/60 bg-white/85 px-3.5 py-2 font-mono text-xs text-slate-800 backdrop-blur-md">
              <span className="flex items-center gap-2"><span className="h-2 w-2 animate-ping rounded-full bg-red-500" />Corporate Showcase Video</span>
              <span className="text-slate-500 group-hover:text-blue-600">Watch on YouTube</span>
            </div>
          </motion.button>

          <motion.div
            initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.15 } } }}
            className="space-y-5 lg:col-span-6"
          >
            <motion.div variants={rise} className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700"><span className="h-1.5 w-1.5 rounded-full bg-[#F43F5E]" />We Are Siddhi Kabel</motion.div>
            <motion.h2 variants={rise} className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl">About Siddhi Kabel</motion.h2>
            <motion.div variants={rise} className="h-1 w-16 rounded-full bg-[#F43F5E]" />
            <motion.p variants={rise} className="text-sm font-semibold leading-relaxed text-slate-900">Siddhi Kabel was established in the year 2008 by professionals with experience of more than 15 years in providing solutions for various needs of high quality Industrial electrical, automation and safety products.</motion.p>
            <motion.p variants={rise} className="text-sm leading-relaxed text-slate-600">Siddhi Kabel offers wide range of products like Cables, Glands, Conduits, Connectors, Circuit breakers – MCB, ELCB, DB, Safety relays, Isolators, Maintenance free Electrical earthing solutions, Lightning arrestors and much more, We also help customer in selecting the right products for different applications and standards.</motion.p>
            <motion.div variants={rise} className="flex flex-wrap gap-2 font-mono text-xs">
              <motion.div whileHover={{ y: -3 }} className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700"><Shield className="h-3.5 w-3.5 text-blue-600" /><span>Established 2008</span></motion.div>
              <motion.div whileHover={{ y: -3 }} className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700"><Award className="h-3.5 w-3.5 text-blue-600" /><span>IS / IEC Standards Compliant</span></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 5. BRANDS: sticky title column + interactive list rows ===== */}
      <section className="border-y border-slate-200 bg-[#F0F7FF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-8">
              <Heading eyebrow="Authorized Distribution Network" title="Brands we deal with" />
              <div className="flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button key={c.id} type="button" onClick={() => setCategory(c.id)} className={`rounded-lg border px-3 py-1.5 text-xs transition-all cursor-pointer ${category === c.id ? 'border-[#F43F5E] bg-[#F43F5E] font-bold text-white shadow-md' : 'border-slate-200 bg-white font-medium text-slate-600 hover:border-blue-200 hover:text-slate-900'}`}>{c.label}</button>
                ))}
              </div>
            </div>
          </div>
          <motion.ul key={category} initial="hidden" animate="visible" variants={stagger} className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-8">
            {shownBrands.map((b) => (
              <motion.li key={b.id} variants={rise}>
                <button type="button" onClick={() => onSelectBrand(b.id)} className="group relative flex w-full items-center gap-5 px-5 py-5 text-left transition-colors hover:bg-slate-50 cursor-pointer sm:px-7">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" style={{ backgroundColor: b.color }} />
                  <div className="w-36 shrink-0 sm:w-48">
                    <div className="text-xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl" style={{ color: b.color }}>{b.name}</div>
                    {b.tagline && <div className="mt-0.5 font-mono text-[10px] font-medium text-slate-500">{b.tagline}</div>}
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-slate-600 group-hover:text-slate-800">{b.description}</p>
                  <div className="flex shrink-0 flex-col items-center gap-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 transition-all group-hover:border-[#F43F5E] group-hover:bg-[#F43F5E] group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
                    <span className="hidden font-mono text-[10px] font-medium text-slate-400 group-hover:text-blue-600 sm:block">Explore Range</span>
                  </div>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===== 6. WHY CHOOSE US: network diagram on top, numbered tiles below ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5"><Heading eyebrow="" title="Why Choose Us" /></div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.6 }} className="lg:col-span-7">
              <div className="group w-full rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:p-5">
                <img src="/assets/authorized_supply_network.svg" alt="Authorized multi-brand portfolio showing LAPP, Eaton, Havells, Hager, Luminis, and Mennekes product ranges" className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]" />
              </div>
            </motion.div>
          </div>
          <motion.ul initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoosePoints.map((p, i) => (
              <motion.li key={i} variants={rise} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F0F7FF] p-6 transition-colors hover:border-blue-200 hover:bg-white hover:shadow-lg">
                <CheckCircle className="relative mb-3 h-5 w-5 text-[#F43F5E] transition-transform group-hover:scale-125 group-hover:text-blue-600" />
                <span className="relative block text-sm leading-snug text-slate-700 group-hover:font-semibold group-hover:text-slate-900">{p}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===== 7. PROJECTS: clean split, light ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10"><Heading eyebrow="We Are Siddhi Kabel" title="Recent Projects" /></div>
          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            <motion.div initial={{ clipPath: 'inset(0 100% 0 0 round 16px)' }} whileInView={{ clipPath: 'inset(0 0% 0 0 round 16px)' }} viewport={vp} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-7">
              <motion.img initial={{ scale: 1.18 }} whileInView={{ scale: 1 }} viewport={vp} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} src="/assets/project_grounding.jpg" alt="Grounding installation site - GE India, Toyota, NAL, Orb Energy" className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.7 }} className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1 font-mono text-[11px] font-bold text-blue-600 shadow-2xs"><MapPin className="h-3.5 w-3.5" /><span>Bangalore Facility Site</span></motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }} className="space-y-4 rounded-2xl border border-slate-200 bg-[#F0F7FF] p-7 lg:col-span-5">
              <motion.div variants={rise} className="inline-flex items-center gap-1.5 rounded bg-red-100/70 px-2.5 py-1 font-mono text-xs font-bold text-blue-600"><ShieldCheck className="h-3.5 w-3.5" />Turnkey Installation</motion.div>
              <motion.h3 variants={rise} className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Grounding</motion.h3>
              <motion.div variants={rise} className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs font-bold uppercase leading-snug tracking-wide text-slate-800 shadow-2xs">GE INDIA and TOYOTA, NATIONAL AEROSPACE LABORATORY (NAL), ORB Energy</motion.div>
              <motion.p variants={rise} className="text-sm leading-relaxed text-slate-600">Supply and installation of Grounding systems in Bangalore facility.</motion.p>
              <motion.div variants={rise} className="flex items-center gap-2 font-mono text-xs text-emerald-700"><CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" /><span>Full statutory compliance &amp; IEEE/IS/IEC grounding standard verification</span></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 8. CLIENTS: logo strip + endlessly scrolling name ticker ===== */}
      <section className="relative overflow-hidden bg-[#F0F7FF] py-14 lg:py-20">
        <motion.div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/60 blur-3xl" animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.36, 0.72, 0.36] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div initial={{ clipPath: 'inset(0 0 100% 0 round 12px)' }} whileInView={{ clipPath: 'inset(0 0 0% 0 round 12px)' }} viewport={vp} transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }} className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white p-6 shadow-xl sm:p-10">
            <motion.img initial={{ opacity: 0.65, scale: 1.08 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 1.2 }} src="/assets/clients_ace_beml.jpg" alt="ACE Designers, AMS, Apicom, Bharat Electronics Limited and BEML" className="mx-auto h-auto max-h-28 w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.015] sm:max-h-36 lg:max-h-44" />
            <motion.div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent mix-blend-screen" animate={{ x: ['-150%', '430%'] }} transition={{ duration: 1.35, delay: 1.25, repeat: Infinity, repeatDelay: 5.5, ease: 'easeInOut' }} />
          </motion.div>
        </div>
        <div className="relative mt-10 overflow-hidden border-y border-slate-200 bg-white/70 py-4">
          <motion.div className="flex w-max gap-12 whitespace-nowrap font-mono text-sm font-semibold text-slate-700" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
            {[...clientNames, ...clientNames, ...clientNames, ...clientNames].map((n, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="flex items-center gap-1.5">{i % clientNames.length === 0 && <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />}{n}</span>
                <span className="text-slate-300" aria-hidden="true">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== modals ===== */}
      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:p-8" onClick={() => setLightbox(false)}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-[#84BABF] shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={() => setLightbox(false)} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/60 text-white hover:bg-slate-950/90 cursor-pointer"><X className="h-5 w-5" /></button>
                <img src="/assets/guiding_principle_card.jpg" alt="Our Guiding Principle - Swamy Vivekananda full view" className="h-auto w-full object-contain" />
              </motion.div>
            </div>
          )}
          {videoOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm sm:p-8" onClick={() => setVideoOpen(false)}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 p-3 text-white">
                  <span className="flex items-center gap-2 font-mono text-xs font-bold"><span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />Siddhi Kabel Corporate Showcase</span>
                  <button onClick={() => setVideoOpen(false)} aria-label="Close video" className="rounded-lg p-1.5 text-slate-400 hover:text-white cursor-pointer"><X className="h-5 w-5" /></button>
                </div>
                <div className="aspect-video bg-slate-950">
                  <iframe src="https://www.youtube-nocookie.com/embed/e3a0qpri5NA?autoplay=1&rel=0" title="Siddhi Kabel Corporate Showcase" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full border-0" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
};