import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/siddhiContent';
import { PageVideoHero } from './PageVideoHero';

interface IndustriesPageProps {
  onContactClick: () => void;
}

const showcase = [
  { title: 'AUTOMOBILE INDUSTRIES', video: '/assets/video/automobile_industries.mp4', badge: 'Automobile & Rail transport', desc: 'Flexible control and power cables, connectors and glands for assembly lines, robotic cells and vehicle manufacturing plants.' },
  { title: 'AUTOMATION & CONVEYERS', video: '/assets/video/automation_and_conveyers.mp4', badge: 'Automation & Robotics', desc: 'Servo, data and control cabling with industrial plugs and motor protection for conveyor systems and automated material handling.' },
  { title: 'MACHINE TOOLS', video: '/assets/video/machine_tools.mp4', badge: 'Mechanical & Plant Engineering', desc: 'Cables, connectors, circuit breakers and safety relays for machine tool builders and plant engineering requirements.' },
];

const vp = { once: true, margin: '-60px' } as const;
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const rise: Variants = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onContactClick }) => (
  <div className="bg-white">
    <PageVideoHero eyebrow="INDUSTRY EXPERTISE" title="Industries We Serve" description="Delivering engineered cabling and electrical switchgear to critical sectors across India with certified reliability." />

    {/* intro line + badge */}
    <section className="px-4 pt-14 sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <motion.p variants={rise} className="max-w-2xl text-base leading-relaxed text-slate-600">Explore our sector specializations and certified solutions for demanding industrial environments.</motion.p>
        <motion.div variants={rise} className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />Pan-India Supply</motion.div>
      </motion.div>
    </section>

    {/* featured sectors: zig-zag rows */}
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-10">
        {showcase.map((s, i) => (
          <motion.article key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="group grid items-center gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-[#F0F7FF] shadow-sm transition-shadow hover:shadow-xl md:grid-cols-2">
            <div className={`relative h-64 overflow-hidden md:h-full md:min-h-[300px] ${i % 2 ? 'md:order-2' : ''}`}>
              <video src={s.video} autoPlay muted loop playsInline preload="metadata" aria-label={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-md border border-white/70 bg-white/90 px-2.5 py-1 font-mono text-[10px] font-bold text-blue-600 shadow-2xs">{s.badge}</div>
            </div>
            <div className="space-y-4 p-7 sm:p-10">
              <div className="h-1 w-12 rounded-full bg-[#F43F5E] transition-all duration-500 group-hover:w-24" />
              <h3 className="font-mono text-lg font-bold tracking-wider text-[#0B2F5B] sm:text-xl">{s.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{s.desc}</p>
              <button type="button" onClick={onContactClick} className="flex items-center gap-2 font-mono text-[11px] font-bold text-blue-600 cursor-pointer"><span>View Specifications</span><ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    {/* sector specializations: two-column checklist */}
    <section className="border-y border-slate-200 bg-[#F0F7FF] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <motion.h2 variants={rise} className="font-mono text-sm font-bold uppercase tracking-wider text-slate-900">Sector Specializations:</motion.h2>
          <motion.span variants={rise} className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-600">PAN-INDIA SUPPLY</motion.span>
        </motion.div>
        <motion.ul initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_LIST.map((item) => (
            <motion.li key={item} variants={rise} whileHover={{ y: -4 }} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 shadow-2xs transition-shadow hover:shadow-md">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F43F5E] transition-transform group-hover:scale-125" />
              <span className="transition-colors group-hover:text-blue-600">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>

    {/* callout */}
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.6 }} className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:flex-row sm:p-10">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 text-lg font-bold text-[#0B2F5B] sm:justify-start"><ShieldCheck className="h-5 w-5 text-emerald-600" /><span>Looking for industry compliance certifications?</span></div>
          <p className="text-sm text-slate-600">We provide Type Test certificates and MTCs with every consignment directly from Bangalore.</p>
        </div>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={onContactClick} className="pulse-glow shrink-0 rounded-xl bg-[#F43F5E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E11D48] cursor-pointer">Inquire For Your Sector</motion.button>
      </motion.div>
    </section>
  </div>
);