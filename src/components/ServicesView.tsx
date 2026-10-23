import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Wrench, Zap, ShieldAlert } from 'lucide-react';

interface ServicesViewProps {
  onContactClick: (serviceName: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onContactClick }) => {
  // Exact 3 cards from Image 4 & 5
  const services = [
    {
      id: 'cost-effective-cables',
      title: 'Cost Effective and Reliable Electrical Solutions',
      image: '/assets/service_cables.jpg',
      icon: Wrench,
      description: 'We offer customized electrical control equipments and wire harness apart from LT and HT cables, cabel glands, conductors and connectors.',
      features: ['LT & HT Cables', 'Wire Harnessing', 'Control Equipment'],
    },
    {
      id: 'energy-saving-lighting',
      title: 'Energy Saving Solutions',
      image: '/assets/service_lighting.jpg',
      icon: Zap,
      description: 'Supply and installation of all kinds of LED light fittings for retrofit and new establishments.',
      features: ['LED Retrofits', 'Commercial Fixtures', 'Industrial Illumination'],
    },
    {
      id: 'earthing-lightning-protection',
      title: 'Earthing and Lightning Protection',
      image: '/assets/service_earthing.jpg',
      icon: ShieldAlert,
      description: 'Auditing & installation of Electrical earth pits, Chemical Electrical Grounding / earthing solutions, Lightning arrestors.',
      features: ['Earth Pit Audits', 'Chemical Grounding', 'IS-IEC Standards'],
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-[#F0F7FF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Image 4 & 5 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider mb-1">
              We Are Siddhi Kabel
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F5B] tracking-tight">
              Services For Industries
            </h2>
            <div className="w-16 h-1 bg-[#F43F5E] mt-3 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed"
          >
            Get benefited with our unique solutions specially designed for Indian industries to enhance the performance and quality.
          </motion.p>
        </div>

        {/* 3 Services Cards with Images & Exact Subtitles from Image 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.16, margin: '0px 0px -48px 0px' }}
                transition={{ duration: 0.72, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.015 }}
                className=""
              >
                <motion.div
                  whileInView={{ y: [0, -8, 0], rotateZ: [0, 0.25, 0] }}
                  viewport={{ once: false, amount: 0.16 }}
                  transition={{ duration: 4.8, delay: idx * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                  data-live-card
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white bg-white shadow-[0_16px_42px_-24px_rgba(15,23,42,0.42)] transition-[box-shadow,border-color] duration-300 group hover:border-blue-200 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.38)]"
                >
                <div>
                  {/* Authentic Cropped Image with zoom on hover */}
                  <div className="h-56 bg-slate-100 overflow-hidden relative border-b border-slate-200">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-[#123D73] flex items-center gap-1.5 shadow-2xs">
                      <IconComponent className="w-3.5 h-3.5 text-blue-600" />
                      <span>Specialized Service</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Feature tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {srv.features.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Inquire CTA */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-blue-600 border-t border-slate-100 pt-3">
                    <button
                      type="button"
                      onClick={() => onContactClick(srv.title)}
                      className="group/request inline-flex w-full items-center justify-between text-left text-xs font-semibold text-blue-600 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F43F5E]"
                    >
                      <span>Request Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/request:translate-x-1" />
                    </button>
                  </div>
                </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
