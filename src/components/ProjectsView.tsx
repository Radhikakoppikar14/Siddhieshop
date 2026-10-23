import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building, ShieldCheck, CheckCircle } from 'lucide-react';

export const ProjectsView: React.FC = () => {
  return (
    <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header matching Image 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider mb-1">
            We Are Siddhi Kabel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F5B] tracking-tight">
            Recent Projects
          </h2>
          <div className="w-16 h-1 bg-[#F43F5E] mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Project Card matching Image 5 with interactive hover */}
        <motion.div
          initial={{ opacity: 0, y: 42, rotateX: 7, scale: 0.965 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200, transformOrigin: 'center top' }}
          whileHover={{ y: -7, scale: 1.006, transition: { duration: 0.28, ease: 'easeOut' } }}
          data-live-card
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F0F7FF] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all group"
        >
          {/* Left: Project site photo */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0 round 12px)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0 round 12px)' }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 1.05, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative"
          >
            <motion.img
              initial={{ scale: 1.18 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 1.3, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              src="/assets/project_grounding.jpg"
              alt="Grounding installation site - GE India, Toyota, NAL, Orb Energy"
              className="w-full h-[260px] sm:h-[320px] object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-blue-600 flex items-center gap-1.5 shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangalore Facility Site</span>
            </motion.div>
          </motion.div>

          {/* Right: Exact Copy matching Image 5 */}
          <motion.div
            initial={{ opacity: 0, x: 38, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.78, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
            className="md:col-span-6 space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.42, delay: 0.42, ease: 'easeOut' }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-100/70 text-blue-600 text-xs font-mono font-bold"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Turnkey Installation
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.48, delay: 0.5, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              Grounding
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.48, delay: 0.58, ease: 'easeOut' }}
              className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide leading-snug bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs"
            >
              GE INDIA and TOYOTA, NATIONAL AEROSPACE LABORATORY (NAL), ORB Energy
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.48, delay: 0.66, ease: 'easeOut' }}
              className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1"
            >
              Supply and installation of Grounding systems in Bangalore facility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.48, delay: 0.74, ease: 'easeOut' }}
              className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-700"
            >
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full statutory compliance &amp; IEEE/IS/IEC grounding standard verification</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
