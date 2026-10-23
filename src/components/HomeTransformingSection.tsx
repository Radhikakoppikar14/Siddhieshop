import { createPortal } from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'motion/react';
import { CheckCircle2, Maximize2, X, ShieldCheck, Cpu } from 'lucide-react';

const staggeredReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const riseIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 20 },
  },
};

const principleCardReveal: Variants = {
  hidden: { opacity: 0, x: 42, rotateY: -10, scale: 0.94, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
  },
};

const roboticsCardReveal: Variants = {
  hidden: { opacity: 0, y: 44, rotateX: 9, scale: 0.95, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const headlineWordReveal: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
};

const lineReveal: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const HomeTransformingSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <div className="bg-white">
      {/* Part 1: Transforming Indian Industry & Our Guiding Principle & Worker (Image 2 & 3) */}
      <section className="py-10 lg:py-14 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-60px' }}
              variants={staggeredReveal}
              className="lg:col-span-7 space-y-5"
            >
              <motion.div variants={riseIn} className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono uppercase text-slate-700 font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E] animate-pulse" />
                We Are Siddhi Kabel
              </motion.div>

              <motion.h2 variants={staggeredReveal} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2F5B] tracking-tight leading-tight">
                {['Transforming', 'Indian', 'Industry', 'With', 'Innovative', 'Products'].map((word) => (
                  <motion.span key={word} variants={headlineWordReveal} className="inline-block mr-[0.22em] last:mr-0">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.div variants={lineReveal} className="w-16 h-1 bg-[#F43F5E] rounded-full origin-left" />

              <motion.p variants={riseIn} className="text-sm sm:text-base font-bold text-slate-900 leading-snug pt-1">
                Siddhi Kabel Corporation Private Limited is one of the leading and reliable suppliers of world class Industrial Electrical, Automation &amp; Safety Products.
              </motion.p>

              <motion.p variants={riseIn} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We at Siddhi Kabel specialize in providing solutions for High quality industrial products, Our primary focus is to service the needs of our customers for high quality products and services, with more than 15 years of experience in industrial Electrical field and association with leading national and multinational customers &amp; Suppliers, Siddhi Kabel offers superior quality products coupled with best technical support.
              </motion.p>

              {/* 3 Interactive Animated Stats Counters matching Image 3 (15+, 20+, 289+) */}
              <motion.div variants={staggeredReveal} className="pt-4 grid grid-cols-3 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-white text-center">
                <motion.div
                  variants={popIn}
                  whileHover={{ y: -5, scale: 1.035, backgroundColor: '#FFF5F5' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  data-live-card
                  className="p-4 sm:p-5 border-r border-slate-200 group cursor-default"
                >
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono group-hover:scale-105 transition-transform">
                    <AnimatedCounter target={15} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    Years Experience
                  </div>
                </motion.div>

                <motion.div
                  variants={popIn}
                  whileHover={{ y: -5, scale: 1.035, backgroundColor: '#FFF5F5' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  data-live-card
                  className="p-4 sm:p-5 border-r border-slate-200 group cursor-default"
                >
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono group-hover:scale-105 transition-transform">
                    <AnimatedCounter target={20} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    Industrial Segments
                  </div>
                </motion.div>

                <motion.div
                  variants={popIn}
                  whileHover={{ y: -5, scale: 1.035, backgroundColor: '#FFF5F5' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  data-live-card
                  className="p-4 sm:p-5 group cursor-default"
                >
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono group-hover:scale-105 transition-transform">
                    <AnimatedCounter target={289} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    Customers Served
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Guiding Principle Card & Worker Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-60px' }}
              variants={staggeredReveal}
              className="lg:col-span-5 space-y-6"
            >
              {/* Guiding Principle Card with Authentic Turquoise Texture matching Image 2 & 3 */}
              <motion.div
                variants={principleCardReveal}
                whileHover={{ y: -8, scale: 1.02, rotateX: 1.5, rotateY: -1.5, boxShadow: '0 24px 46px -10px rgba(15, 23, 42, 0.3)' }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                style={{ transformPerspective: 1100, transformOrigin: 'center center' }}
                onClick={() => setLightboxOpen(true)}
                data-live-card
                className="relative rounded-2xl overflow-hidden border border-teal-300/80 shadow-xs bg-[#84BABF] group cursor-pointer"
              >
                <motion.img
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.045 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  src="/assets/guiding_principle_card.jpg"
                  alt="Our Guiding Principle - Swamy Vivekananda"
                  className="w-full h-auto object-cover min-h-[220px]"
                />

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 z-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent mix-blend-screen"
                  animate={{ x: ['-30%', '430%'] }}
                  transition={{ duration: 1.25, delay: 1.1, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
                />
                
                {/* Interactive enlarge indicator */}
                <motion.div variants={riseIn} whileHover={{ scale: 1.07 }} className="absolute top-3 right-3 z-10 bg-slate-950/40 hover:bg-slate-950/60 backdrop-blur-xs text-white p-2 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[11px] font-mono">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Enlarge</span>
                </motion.div>
              </motion.div>

              {/* Worker with Robotic Arm Image matching Image 3 */}
              <motion.div
                variants={roboticsCardReveal}
                whileHover={{ y: -8, scale: 1.025, rotateX: 1.5, rotateY: 1.5, boxShadow: '0 24px 46px -10px rgba(15, 23, 42, 0.3)' }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                style={{ transformPerspective: 1100, transformOrigin: 'center center' }}
                data-live-card
                className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group"
              >
                <motion.img
                  initial={{ scale: 1.13 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.055 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  src="/assets/worker_robot.jpg"
                  alt="Industrial Electrical Engineering and Robotics"
                  className="w-full h-[220px] sm:h-[260px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating interactive badge */}
                <motion.div variants={riseIn} className="absolute bottom-3 left-3 right-3">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }} className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 font-mono">
                      <Cpu className="w-3.5 h-3.5 text-sky-200" />
                      <span>Industrial Robotics &amp; Automation</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-white/10 text-[11px] text-emerald-300 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Quality Assured</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2: Why Choose Us (Image 3) */}
      <section className="py-10 lg:py-14 border-b border-slate-200 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Authorized Brands Ribbon Diagram matching Image 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div data-live-card className="relative group rounded-2xl overflow-hidden border border-slate-200 bg-white p-3 sm:p-5 shadow-sm w-full max-w-lg hover:shadow-md transition-shadow">
                <img
                  src="/assets/authorized_supply_network.svg"
                  alt="Authorized multi-brand portfolio showing LAPP, Eaton, Havells, Hager, Luminis, and Mennekes product ranges"
                  className="w-full h-auto object-contain group-hover:scale-[1.015] transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right Column: Why Choose Us bullet list matching Image 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-60px' }}
              variants={staggeredReveal}
              className="lg:col-span-6 space-y-4"
            >
              <motion.h2 variants={riseIn} className="text-3xl sm:text-4xl font-extrabold text-[#0B2F5B] tracking-tight">
                Why Choose Us
              </motion.h2>
              <motion.div variants={lineReveal} className="w-16 h-1 bg-[#F43F5E] rounded-full mb-6 origin-left" />

              <motion.ul variants={staggeredReveal} className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                {whyChoosePoints.map((point, idx) => {
                  const isHovered = hoveredIndex === idx;
                  return (
                    <motion.li
                      key={idx}
                      variants={riseIn}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ x: 6, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className={`flex items-start gap-3 p-2 rounded-lg transition-colors cursor-default ${
                        isHovered ? 'bg-white shadow-2xs border border-blue-200' : 'bg-transparent border border-transparent'
                      }`}
                    >
                      <motion.div
                        animate={{ scale: isHovered ? 1.2 : 1 }}
                        className="mt-0.5 shrink-0"
                      >
                        {isHovered ? (
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        ) : (
                          <span className="inline-block w-2.5 h-2.5 rounded-full border-2 border-[#F43F5E] mt-0.5" />
                        )}
                      </motion.div>
                      <span className={isHovered ? 'text-slate-900 font-semibold' : 'text-slate-700'}>
                        {point}
                      </span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox for Guiding Principle Vivekananda Card */}
      {createPortal(<AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8" onClick={() => setLightboxOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-2xl w-full my-auto bg-[#84BABF] rounded-2xl overflow-hidden shadow-2xl border border-white/20" onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-950/60 text-white flex items-center justify-center hover:bg-slate-950/90 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src="/assets/guiding_principle_card.jpg"
                alt="Our Guiding Principle - Swamy Vivekananda full view"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>, document.body)}
    </div>
  );
};
