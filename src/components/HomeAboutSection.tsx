import React, { useState } from 'react';
import { Play, X, Shield, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const aboutItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: 'easeOut' as const },
  },
};

export const HomeAboutSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Video preview slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -48, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.72, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <motion.button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              aria-label="Play Siddhi Kabel corporate showcase video"
              className="relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-0 text-left shadow-lg transition-shadow duration-500 hover:shadow-2xl group cursor-pointer"
            >
              <img
                src="/assets/worker_robot.jpg"
                alt="Industrial automation in action at a modern factory"
                className="h-[320px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[400px]"
              />

              {/* Soft gradient keeps the controls clear while leaving the photo bright */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-slate-950/10 transition-colors duration-500 group-hover:from-slate-950/55">
                {/* Continuous concentric ripple rings */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.7, 0.3, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                    className="absolute w-20 h-20 rounded-full bg-white/40 pointer-events-none"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1.8],
                      opacity: [0.6, 0.25, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 0.7,
                    }}
                    className="absolute w-20 h-20 rounded-full bg-[#C81E27]/50 pointer-events-none"
                  />

                  {/* Core Play Button */}
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#C81E27] shadow-2xl flex items-center justify-center cursor-pointer transition-transform"
                  >
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1 text-[#C81E27]" />
                  </motion.span>
                </div>
              </div>

              {/* Floating video pill */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-3.5 py-2 font-mono text-xs text-white shadow-lg backdrop-blur-md">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Corporate Showcase Video
                </span>
                <span className="text-slate-300 transition-colors group-hover:text-white">Watch on YouTube</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Copy slides in from the right and reveals in a gentle stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0, x: 48 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.72, ease: 'easeOut', staggerChildren: 0.1, delayChildren: 0.08 },
              },
            }}
            className="lg:col-span-6 space-y-5"
          >
            <motion.div variants={aboutItemVariants} className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono uppercase text-slate-700 font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C81E27]" />
              We Are Siddhi Kabel
            </motion.div>

            <motion.h2 variants={aboutItemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#232742] tracking-tight leading-tight">
              About Siddhi Kabel
            </motion.h2>

            <motion.div variants={aboutItemVariants} className="w-16 h-1 bg-[#C81E27] rounded-full" />

            <motion.div variants={aboutItemVariants} className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <motion.p variants={aboutItemVariants} className="font-semibold text-slate-900">
                Siddhi Kabel was established in the year 2008 by professionals with experience of more than 15 years in providing solutions for various needs of high quality Industrial electrical, automation and safety products.
              </motion.p>
              <motion.p variants={aboutItemVariants}>
                Siddhi Kabel offers wide range of products like Cables, Glands, Conduits, Connectors, Circuit breakers – MCB, ELCB, DB, Safety relays, Isolators, Maintenance free Electrical earthing solutions, Lightning arrestors and much more, We also help customer in selecting the right products for different applications and standards.
              </motion.p>
            </motion.div>

            {/* Interactive feature chips */}
            <motion.div variants={aboutItemVariants} className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <motion.div whileHover={{ y: -3 }} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1.5 transition-shadow hover:shadow-md">
                <Shield className="w-3.5 h-3.5 text-[#C81E27]" />
                <span>Established 2008</span>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1.5 transition-shadow hover:shadow-md">
                <Award className="w-3.5 h-3.5 text-[#C81E27]" />
                <span>IS / IEC Standards Compliant</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="p-3 bg-slate-900 flex items-center justify-between text-white border-b border-slate-800">
                <span className="text-xs font-mono font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Siddhi Kabel Corporate Showcase
                </span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/e3a0qpri5NA?autoplay=1&rel=0"
                  title="Siddhi Kabel Corporate Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
