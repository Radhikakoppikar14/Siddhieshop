import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeHeroSliderProps {
  onExploreProducts: () => void;
}

export const HomeHeroSlider: React.FC<HomeHeroSliderProps> = ({ onExploreProducts }) => {
  const slides = [
    {
      id: 1,
      video: '/assets/video/demo1.mp4',
      title: 'ELECTRICAL SOLUTIONS',
      subtitle: 'Power and control, Applications',
    },
    {
      id: 2,
      video: '/assets/video/demo2.mp4',
      title: 'INDUSTRIAL CABLING',
      subtitle: 'Precision Power & Automation Cables',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] bg-[#0A1018] overflow-hidden select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed demo video background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.99, transition: { duration: 0.8 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <video
            src={slide.video}
            autoPlay
            muted
            playsInline
            preload="auto"
            style={{ opacity: 0, transition: 'opacity 600ms ease' }}
            onLoadedData={(event) => { event.currentTarget.style.opacity = '1'; }}
            aria-hidden="true"
            onEnded={(event) => {
              if (isPaused) {
                event.currentTarget.currentTime = 0;
                void event.currentTarget.play();
                return;
              }
              nextSlide();
            }}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to enhance legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/25 to-slate-950/35" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Frame exactly matching image_4e2c2e01.png & image_e5be7551.png */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`frame-${slide.id}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative pl-6 pr-6 sm:pl-8 sm:pr-10 py-6 max-w-full"
          >
            {/* White Angular Frame Border with animated spring expansion */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute left-0 top-0 w-24 sm:w-32 h-1 bg-white origin-left"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute left-0 top-0 bottom-0 w-1 bg-white origin-top"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute left-0 bottom-0 w-24 sm:w-32 h-1 bg-white origin-left"
            />

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="whitespace-nowrap text-[clamp(1.35rem,6.2vw,2.25rem)] sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none drop-shadow-md"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-3 sm:mt-4 whitespace-nowrap text-[clamp(0.8rem,3.4vw,1rem)] sm:text-xl font-medium text-white/95 drop-shadow"
            >
              {slide.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Slider Arrow with Hover Spring */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#ffffff' }}
        whileTap={{ scale: 0.92 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 text-slate-800 flex items-center justify-center shadow-lg transition-colors cursor-pointer z-20 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Right Slider Arrow with Hover Spring */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#ffffff' }}
        whileTap={{ scale: 0.92 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 text-slate-800 flex items-center justify-center shadow-lg transition-colors cursor-pointer z-20 group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Slide Indicators & Auto-play progress bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/30 backdrop-blur-xs px-3 py-1.5 rounded-full">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrent(idx)}
            className="group relative py-1 cursor-pointer"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};