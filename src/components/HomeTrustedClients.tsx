import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export const HomeTrustedClients: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden border-b border-slate-200 bg-[#FAFAFA] py-14 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          whileHover={{ y: -5, boxShadow: '0 24px 70px -28px rgba(35, 39, 66, 0.22)' }}
          data-live-card
          className="group relative mx-auto w-full overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white via-[#fffafa] to-[#fff2f2] p-4 shadow-xl shadow-slate-900/10 transition-all sm:p-7 lg:p-10 xl:p-12"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-rose-100/70 blur-3xl" />
          <div className="relative rounded-2xl border border-white/80 bg-white/75 px-3 py-5 shadow-sm sm:px-6 sm:py-7 lg:px-10 lg:py-9">
            <motion.img
              initial={{ opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
              src="/assets/clients_ace_beml.jpg"
              alt="ACE Designers, AMS, Apicom, Bharat Electronics Limited and BEML"
              className="mx-auto h-auto max-h-28 w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.015] sm:max-h-36 lg:max-h-44"
            />

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 border-t border-slate-100 pt-4 text-[10px] font-mono text-slate-500 sm:mt-7 sm:gap-x-7 sm:pt-5 sm:text-xs lg:gap-x-10">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                ACE Designers
              </span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <span className="font-semibold text-slate-700">AMS</span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <span className="font-semibold text-slate-700">Apicom</span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <span className="font-semibold text-slate-700">Bharat Electronics Limited (BEL)</span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>
              <span className="font-semibold text-slate-700">BEML Limited</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
