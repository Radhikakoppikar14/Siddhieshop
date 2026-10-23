import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

export const HomeClientsAndStats: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. We are committed to provide safe industrial solutions / We trusted by (Video Timestamp 00:11) */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2"
          >
            We are committed to provide safe industrial solutions.
          </motion.h2>
          <div className="w-16 h-1 bg-[#F43F5E] mx-auto mt-2 mb-4" />
          <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-7">
            We trusted by
          </div>

          {/* Authentic Trusted Clients Strip from Video */}
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50 shadow-2xs overflow-hidden">
            <img
              src="/assets/trusted_clients.jpg"
              alt="Trusted By - DISA, EFD Induction, ETA, Faiveley Transport, Gabriel India Limited"
              className="w-full max-h-24 object-contain mx-auto mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* 2. Experience, Stats & Worker Robotics Section (Video Timestamp 00:14) */}
      <section className="py-10 bg-[#F0F7FF] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  <strong className="text-slate-900 font-bold">Products: </strong>
                  Our primary focus is to service the needs of our customers for high quality products and services, with more than 15 years of experience in industrial Electrical field and association with leading national and multinational customers &amp; Suppliers, Siddhi Kabel offers superior quality products coupled with best technical support.
                </p>
              </div>

              {/* 3 Stats Counters matching video 00:14 */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-2xs">
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                    Years Experience
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-2xs">
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                    Industrial Segments
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 text-center shadow-2xs">
                  <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                    300+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                    Customers Served
                  </div>
                </div>
              </div>

              {/* Why Choose Us & Lapp Banner matching video 00:14 */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  Why Choose Us
                </h3>
                <div className="rounded-xl border border-slate-200 bg-white p-3 inline-block shadow-2xs">
                  <img
                    src="/assets/lapp_quality_strip.jpg"
                    alt="Complete range of cables & connectivity - LAPP"
                    className="max-h-12 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Worker and Robot Welding Image matching video 00:14 */}
            <div className="lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group"
              >
                <img
                  src="/assets/worker_robot.jpg"
                  alt="Industrial robotics and electrical engineering - Siddhi Kabel"
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
