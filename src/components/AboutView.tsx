import React from 'react';
import { motion } from 'motion/react';
import industrialCablesHero from '../assets/images/hero_industrial_cables_1792651589510.jpg';
import {
  Award,
  Building2,
  Cable,
  CheckCircle2,
  ChevronRight,
  Factory,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

const principals = [
  { name: 'LAPP INDIA Pvt Ltd', category: 'Cables & conductors' },
  { name: 'EATON Power Quality Pvt Ltd', category: 'Power & control' },
  { name: 'HAVELLS INDIA LTD', category: 'Switchgear & FMEG' },
  { name: 'JEF TECHNO solutions pvt ltd', category: 'Earthing & lightning' },
  { name: 'HAGER Electro Private Limited', category: 'Electrical protection' },
  { name: 'LUKER Electric Technologies Pvt Ltd', category: 'LED lighting' },
  { name: 'MENNEKES Electric India Pvt Ltd', category: 'Industrial plugs' },
  { name: 'NEPTUNE INDIA LTD', category: 'Energy management' },
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

const visionMissionTiles = [
  {
    kind: 'vision',
    title: 'Our vision',
    text: 'To be a leading, preferred and respected solution partner for customers in the field of electrical products and services.',
    icon: Building2,
  },
  {
    kind: 'group',
    image: '/assets/about_team_group.jpg',
    alt: 'Siddhi Kabel team standing together',
    caption: 'The people behind every promise',
    icon: Users,
  },
  {
    kind: 'meeting',
    image: '/assets/about_team_meeting.jpg',
    alt: 'Siddhi Kabel colleagues reviewing customer requirements together',
    caption: 'Working closely with our customers',
    icon: Sparkles,
  },
  {
    kind: 'mission',
    title: 'Our mission',
    text: 'Work towards continuous improvement and stay focused on achieving customer satisfaction.',
    icon: CheckCircle2,
  },
];

export const AboutView: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Full-width profile banner */}
      <section className="relative isolate min-h-[260px] overflow-hidden bg-[#F0F7FF] border-b border-slate-200 sm:min-h-[310px]">
        <img
          src={industrialCablesHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-50"
        />
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-hidden="true"
  className="about-hero-video absolute inset-0 h-full w-full object-cover object-[center_42%] brightness-[0.65]"
>
  <source src="/assets/video/demo3.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-slate-950/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        
        <div className="relative mx-auto flex min-h-[260px] max-w-7xl items-center px-4 py-8 sm:min-h-[310px] sm:px-6 sm:py-10 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900 shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Corporate profile · Since 2008
            </div>
            <h1 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              About Siddhi Kabel
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              A dependable partner for industrial electrical, automation and safety solutions.
            </p>
            <div className="mt-6 h-1 w-20 origin-left rounded-full bg-[#F43F5E]" />
          </motion.div>
        </div>
      </section>

      {/* Company overview and authorized partner network */}
      <section className="relative overflow-hidden py-9 sm:py-8 lg:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-blue-600">About us</span>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-70px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              data-live-card
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/[0.045] sm:p-7 lg:col-span-7 lg:p-8"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F43F5E]" />
                Who we are
              </div>
              <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl">
                Connecting industry with the products it relies on.
              </h2>
              <div className="my-6 h-1 w-16 rounded-full bg-[#F43F5E]" />

              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                <p className="font-semibold text-slate-800">
                  Siddhi Kabel was established in 2008 by professionals with more than 15 years of experience supporting industrial electrical, automation and safety requirements.
                </p>
                <p>
                  We work with leading Indian and multinational manufacturers to supply LT and HT cables, conduits, connectors, LED lighting, circuit breakers, safety relays, isolators, earthing solutions and lightning protection products.
                </p>
                <p>
                  Our role goes beyond supply. We help customers choose products for their applications and standards, then support them with responsive service and reliable sourcing across machine tools, pharmaceutical, process, automotive, oil and gas, chemical and project industries.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {strengths.map((strength, index) => {
                  const Icon = strength.icon;
                  return (
                    <motion.div
                      key={strength.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.42, delay: index * 0.08, ease: 'easeOut' }}
                      whileHover={{ y: -3 }}
                      data-live-card
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs font-semibold text-slate-700 transition-shadow hover:shadow-md sm:text-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      {strength.label}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-70px' }}
              transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl bg-[#123D73] p-5 text-white shadow-2xl shadow-[#123D73]/15 sm:p-7 lg:col-span-5"
            >
              <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-500/15 blur-3xl" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-200">Our supply network</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Authorized partners</h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-sky-200">
                    <Cable className="h-5 w-5" />
                  </div>
                </div>
                <p className="mb-6 text-sm leading-6 text-slate-300">
                  Trusted channels for genuine products and dependable technical support.
                </p>

                <div className="space-y-2">
                  {principals.map((principal, index) => (
                    <motion.div
                      key={principal.name}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.35, delay: index * 0.045, ease: 'easeOut' }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3.5 py-3 transition-colors hover:border-blue-200 hover:bg-white/[0.08]"
                    >
                      <span className="flex min-w-0 items-center gap-2.5 text-xs font-semibold text-slate-100 sm:text-sm">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400 transition-transform group-hover:scale-125" />
                        <span className="truncate">{principal.name}</span>
                      </span>
                      <span className="shrink-0 text-right text-[9px] text-slate-400 sm:text-[10px]">{principal.category}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified supply relationships
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Visual approach and company statistics */}
      <section className="border-y border-slate-200 bg-[#F0F7FF] py-9 sm:py-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <motion.figure
            initial={{ opacity: 0, scale: 0.96, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            data-live-card
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/[0.06] sm:p-5 lg:col-span-6"
          >
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
              <Sparkles className="h-3.5 w-3.5" />
              Why customers choose us
            </div>
            <img
              src="/assets/authorized_supply_network.svg"
              alt="Authorized multi-brand integrated supply network showing product categories and partner brands"
              className="mx-auto h-auto w-full max-w-none object-contain transition-transform duration-500 hover:scale-[1.015]"
            />
            <figcaption className="mt-4 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
              Product choice, reliable sourcing and responsive support in one connected service.
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
              <Zap className="h-3.5 w-3.5" />
              Siddhi Kabel at a glance
            </div>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#0B2F5B] sm:text-4xl">
              The right products, supported by people who understand the work.
            </h2>

            <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/[0.04]">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                    whileHover={{ y: -4 }}
                    className={`group px-2 py-4 text-center sm:px-5 sm:py-6 ${index < metrics.length - 1 ? 'border-r border-slate-200' : ''}`}
                  >
                    <Icon className="mx-auto mb-2 h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <div className="text-2xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">{metric.value}</div>
                    <div className="mt-1 text-[9px] font-semibold leading-4 text-slate-600 sm:text-xs">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-[15px]">
              We monitor changing requirements, review applications carefully and plan inventory around customer needs. Our sourcing network and technical team help keep projects and day-to-day operations moving.
            </p>

            <motion.div
              whileHover={{ x: 4 }}
              data-live-card
              className="mt-5 flex gap-3 rounded-2xl border border-blue-200 bg-red-50 p-4 sm:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <Quote className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">Technical services</p>
                <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                  Electrical earthing and lightning protection audits and installation, LED lighting projects, customized electrical control equipment and wire harnessing.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision and mission: same team imagery, refreshed as an animated editorial grid */}
      <section className="relative isolate overflow-hidden bg-[#123D73] py-9 sm:py-8 lg:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-48 right-0 h-[28rem] w-[28rem] rounded-full bg-red-500/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-200">What guides our work</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Vision &amp; mission</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-300">
              A clear purpose, a capable team and a consistent focus on customer outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {visionMissionTiles.map((tile, index) => {
              const Icon = tile.icon;
              const isPhoto = 'image' in tile;

              if (isPhoto) {
                return (
                  <motion.figure
                    key={tile.kind}
                    initial={{ opacity: 0, x: index === 1 ? 28 : -28, scale: 0.98 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.06, ease: 'easeOut' }}
                    whileHover={{ y: -4 }}
                    data-live-card
                    className="group relative isolate aspect-[1.72] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl sm:rounded-3xl"
                  >
                    <img
                      src={tile.image}
                      alt={tile.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F5B]/85 via-[#0B2F5B]/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                      <span className="max-w-xs text-sm font-semibold text-white sm:text-base">{tile.caption}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                        <Icon className="h-4 w-4" />
                      </span>
                    </figcaption>
                  </motion.figure>
                );
              }

              return (
                <motion.article
                  key={tile.kind}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: '-50px' }}
                  transition={{ duration: 0.58, delay: index === 0 ? 0 : 0.12, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  data-live-card
                  className="group flex min-h-[210px] flex-col justify-center rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-xl shadow-black/10 transition-shadow hover:shadow-2xl sm:min-h-[240px] sm:rounded-3xl sm:p-7 lg:p-9"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      {tile.title}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="max-w-xl text-xl font-semibold leading-relaxed tracking-tight text-[#0B2F5B] sm:text-2xl lg:text-3xl">
                    {tile.text}
                  </p>
                  <div className="mt-6 h-1 w-12 origin-left rounded-full bg-[#F43F5E] transition-all duration-500 group-hover:w-20" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};