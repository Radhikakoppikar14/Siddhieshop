import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building, ShieldCheck, CheckCircle } from 'lucide-react';

export const ProjectsView: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header matching Image 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider mb-1">
            We Are Siddhi Kabel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232742] tracking-tight">
            Recent Projects
          </h2>
          <div className="w-16 h-1 bg-[#C81E27] mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Project Card matching Image 5 with interactive hover */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          data-live-card
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FAFAFA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all group"
        >
          {/* Left: Project site photo */}
          <div className="md:col-span-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
            <img
              src="/assets/project_grounding.jpg"
              alt="Grounding installation site - GE India, Toyota, NAL, Orb Energy"
              className="w-full h-[260px] sm:h-[320px] object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-[#C81E27] flex items-center gap-1.5 shadow-2xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangalore Facility Site</span>
            </div>
          </div>

          {/* Right: Exact Copy matching Image 5 */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-100/70 text-[#C81E27] text-xs font-mono font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Turnkey Installation
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Grounding
            </h3>

            <div className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide leading-snug bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              GE INDIA and TOYOTA, NATIONAL AEROSPACE LABORATORY (NAL), ORB Energy
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              Supply and installation of Grounding systems in Bangalore facility.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-700">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full statutory compliance &amp; IEEE/IS/IEC grounding standard verification</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
