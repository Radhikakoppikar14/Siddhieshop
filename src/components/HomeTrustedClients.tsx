import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export const HomeTrustedClients: React.FC = () => {
  return (
    <section className="relative flex items-center overflow-hidden border-b border-slate-200 bg-[#F0F7FF] py-10 lg:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[30rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/60 blur-3xl"
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.36, 0.72, 0.36], rotate: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 34, rotateY: 7, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1400, transformOrigin: 'center center' }}
          whileHover={{ y: -6, rotateX: 1, boxShadow: '0 30px 80px -30px rgba(35, 39, 66, 0.3)', transition: { duration: 0.3, ease: 'easeOut' } }}
          data-live-card
          className="group relative mx-auto w-full overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white via-[#fffafa] to-[#fff2f2] p-4 shadow-xl shadow-slate-900/10 transition-all sm:p-7 lg:p-10 xl:p-12"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-rose-100/70 blur-3xl"
            animate={{ x: [0, -34, 0], y: [0, 22, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative rounded-2xl border border-white/80 bg-white/75 px-3 py-5 shadow-sm sm:px-6 sm:py-7 lg:px-10 lg:py-9">
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0 round 10px)' }}
              whileInView={{ clipPath: 'inset(0 0 0% 0 round 10px)' }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto overflow-hidden rounded-xl"
            >
              <motion.img
                initial={{ opacity: 0.65, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                src="/assets/clients_ace_beml.jpg"
                alt="ACE Designers, AMS, Apicom, Bharat Electronics Limited and BEML"
                className="mx-auto h-auto max-h-28 w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.015] sm:max-h-36 lg:max-h-44"
              />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent mix-blend-screen"
                animate={{ x: ['-150%', '430%'] }}
                transition={{ duration: 1.35, delay: 1.25, repeat: Infinity, repeatDelay: 5.5, ease: 'easeInOut' }}
              />
            </motion.div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 border-t border-slate-100 pt-4 text-[10px] font-mono text-slate-500 sm:mt-7 sm:gap-x-7 sm:pt-5 sm:text-xs lg:gap-x-10">
              <motion.span initial={{ opacity: 0, y: 12, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.42, delay: 0.55, ease: 'easeOut' }} className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                ACE Designers
              </motion.span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <motion.span initial={{ opacity: 0, y: 12, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.42, delay: 0.64, ease: 'easeOut' }} className="font-semibold text-slate-700">AMS</motion.span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <motion.span initial={{ opacity: 0, y: 12, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.42, delay: 0.73, ease: 'easeOut' }} className="font-semibold text-slate-700">Apicom</motion.span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <motion.span initial={{ opacity: 0, y: 12, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.42, delay: 0.82, ease: 'easeOut' }} className="font-semibold text-slate-700">Bharat Electronics Limited (BEL)</motion.span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <motion.span initial={{ opacity: 0, y: 12, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.42, delay: 0.91, ease: 'easeOut' }} className="font-semibold text-slate-700">BEML Limited</motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
