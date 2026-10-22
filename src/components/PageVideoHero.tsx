import React from 'react';

interface PageVideoHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const PageVideoHero: React.FC<PageVideoHeroProps> = ({ eyebrow, title, description }) => (
  <section className="relative z-10 isolate overflow-hidden border-b border-slate-200/80 bg-slate-100">
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <img
        src="/assets/industrial_banner.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="page-hero-video absolute inset-0 h-full w-full object-cover object-center opacity-70 brightness-110 saturate-75"
      >
        <source src="/assets/video/demo3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/65 to-white/40" />
      <div className="absolute inset-0 bg-white/5" />
    </div>

    <div className="mx-auto flex min-h-[250px] max-w-7xl items-center px-4 py-11 sm:min-h-[290px] sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#A91A23] shadow-sm backdrop-blur-sm sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C81E27]" />
          {eyebrow}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#202538] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#C81E27] to-red-400" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  </section>
);
