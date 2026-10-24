import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  Copy,
  ArrowUpRight,
  Building2,
  Warehouse,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  category?: string;
  bgImage?: string;
  /** Optional background video. When set, the header switches to a light, bright look. */
  bgVideo?: string;
  onOpenRfq?: (subject?: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumb,
  category = 'Siddhi Kabel LTD.',
  bgImage = '/images/main-slider/1.jpg',
  bgVideo,
  onOpenRfq,
}) => {
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const light = false;

  // Light-mode colour mapper: dark-on-dark classes become dark-on-light when a video background is used
  const T = (cls: string): string =>
    !light
      ? cls
      : cls
          .replace(/(?<![:\w-])text-white(?![\w-])/g, 'text-[#231815]')
          .replace(/(?<![:\w-])text-\[#FFFAF6\]/g, 'text-[#231815]')
          .replace(/(?<![:\w-])text-\[#F1D9CA\]/g, 'text-[#5F524C]')
          .replace(/(?<![:\w-])hover:text-white/g, 'hover:text-[#231815]')
          .replace(/(?<![:\w-])bg-white\/\[0\.07\]/g, 'bg-white/75')
          .replace(/(?<![:\w-])bg-white\/\[0\.05\]/g, 'bg-white/60')
          .replace(/(?<![:\w-])bg-white\/5(?![\w])/g, 'bg-white/70')
          .replace(/(?<![:\w-])bg-white\/10(?![\w])/g, 'bg-white/70')
          .replace(/(?<![:\w-])hover:bg-white\/15/g, 'hover:bg-white')
          .replace(/(?<![:\w-])border-white\/(10|15)/g, 'border-[#5F524C]/15')
          .replace(/(?<![:\w-])border-\[#F1D9CA\]\/(\d+)/g, 'border-[#5F524C]/25')
          .replace(/(?<![:\w-])bg-\[#5F524C\]\/40/g, 'bg-[#F1D9CA]/70');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [bgVideo]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('info@siddhikabel.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className={light ? 'relative bg-[#FFFAF6] text-[#231815] py-8 sm:py-10 lg:py-12 border-b border-[#F1D9CA] overflow-hidden' : 'relative bg-[#D2430F] text-[#FFFAF6] py-8 sm:py-10 lg:py-12 border-b border-[#A8340A] overflow-hidden'}>
      {/* High-Resolution Industrial Photographic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
{bgVideo ? (
          <video
            ref={videoRef}
            src={bgVideo}
            poster={bgImage}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="no-zoom absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
                <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          src={bgImage}
          alt="Siddhi Kabel Industrial Environment"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
          referrerPolicy="no-referrer"
        />
        )}
        {/* Deep rich dark brown overlay with gentle gradient */}
        <div className={light ? 'absolute inset-0 bg-gradient-to-r from-[#FFFAF6]/90 via-[#FFFAF6]/62 to-[#FFFAF6]/12' : 'absolute inset-0 bg-gradient-to-r from-[#A8340A]/92 via-[#D2430F]/85 to-[#E8622A]/80 backdrop-blur-[1px]'} />

        {/* Blueprint & Circuit Matrix Dot Pattern */}
        <div className={light ? 'absolute inset-0 bg-[radial-gradient(#5F524C_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none' : 'absolute inset-0 bg-[radial-gradient(#F1D9CA_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none'} />

        {/* Ambient Animated Light Blooms */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-16 -top-16 w-[420px] h-[420px] bg-white/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/4 -bottom-24 w-[360px] h-[360px] bg-[#F5B83D]/25 rounded-full blur-3xl pointer-events-none"
        />

        {/* Diagonal Light Sweep Beam */}
        <motion.div
          initial={{ x: '-100%', opacity: 0.3 }}
          animate={{ x: '250%', opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Breadcrumb, Category, Page Headline & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-9 space-y-3 sm:space-y-4"
          >
            {/* Breadcrumb Navigation */}
            <nav className={T("inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F1D9CA]/25 text-xs text-[#F1D9CA] font-light shadow-2xs")} aria-label="Breadcrumb">
              <Link to="/" className={T("hover:text-white transition-colors flex items-center gap-1 font-medium")}>
                Home
              </Link>
              <ChevronRight className={T("w-3.5 h-3.5 text-[#F1D9CA]/60")} />
              <span className={T("text-[#FFFAF6] font-semibold")}>{breadcrumb}</span>
            </nav>

            {/* Category Tag with Animated Sparkle */}
            <div className="flex items-center gap-2">
              <span className={T("inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#F1D9CA] px-3 py-1 rounded-md bg-white/15 border border-white/30")}>
                <Sparkles className={T("w-3 h-3 text-[#FFD7C2]")} />
                <span>{category}</span>
              </span>
              <span className="hidden sm:inline-block w-8 h-px bg-[#FFF1E8]" />
              <span className={T("hidden sm:inline-flex items-center gap-1 text-[11px] text-[#F1D9CA]/70 font-light")}>
                <ShieldCheck className={T("w-3.5 h-3.5 text-[#F1D9CA]")} />
                Official Channel Partner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={T("text-3xl sm:text-4xl lg:text-5xl font-normal text-white font-editorial tracking-tight leading-[1.12]")}>
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle ? (
              <p className={T("text-sm sm:text-base text-[#FFFAF6]/85 font-light leading-relaxed max-w-2xl")}>
                {subtitle}
              </p>
            ) : (
              <p className={T("text-sm sm:text-base text-[#FFFAF6]/85 font-light leading-relaxed max-w-2xl")}>
                Delivering manufacturer-certified cables, industrial switchgear, automation accessories, and electrical safety solutions with guaranteed reliability across India.
              </p>
            )}

            {/* Trust Points Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className={T("inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#F1D9CA]/20 text-[11px] text-[#FFFAF6]/90")}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD7C2]" />
                <span>Direct Factory Sourcing</span>
              </span>
              <span className={T("inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#F1D9CA]/20 text-[11px] text-[#FFFAF6]/90")}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD7C2]" />
                <span>100% Genuine MTC</span>
              </span>
              <span className={T("inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#F1D9CA]/20 text-[11px] text-[#FFFAF6]/90")}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD7C2]" />
                <span>Pan-India Logistics</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};