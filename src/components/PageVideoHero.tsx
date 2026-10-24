import React from 'react';
import { motion } from 'motion/react';

interface PageVideoHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  videoSrc?: string;
}

/**
 * ONE hero used by every inner page (About, Products, Industries, Contact, RFQ),
 * so they all have exactly the same height on every screen size.
 * Change HERO_HEIGHT below to resize all of them together.
 */
const HERO_HEIGHT = 'h-[290px] sm:h-[310px]';

export const PageVideoHero: React.FC<PageVideoHeroProps> = ({
  eyebrow,
  title,
  description,
  videoSrc = '/assets/video/demo3.mp4',
}) => (
  <section className={`relative isolate overflow-hidden bg-[#0B2F5B] ${HERO_HEIGHT}`}>
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="about-hero-video absolute inset-0 h-full w-full object-cover object-[center_42%]"
      >
        <source src={encodeURI(videoSrc)} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F5B]/90 via-[#123D73]/70 to-[#0B2F5B]/40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D7263D]/25 blur-3xl" />
    </div>

    <div className="mx-auto flex h-full max-w-7xl items-center px-4 pb-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur sm:text-xs">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7263D]" />
          <span className="truncate">{eyebrow}</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
        <div className="mt-3 h-1 w-16 rounded-full bg-[#D7263D]" />
        <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-relaxed text-blue-100/90 sm:text-base">{description}</p>
      </motion.div>
    </div>
  </section>
);