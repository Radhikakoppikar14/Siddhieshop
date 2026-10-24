import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { PageVideoHero } from '../components/PageVideoHero';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white border-b border-slate-200 relative overflow-hidden">
      <PageVideoHero eyebrow="Get in touch" title="Contact Us" description="Tell us your cable, wiring or electrical requirement and our team will get back to you with the right solution and a quote." videoSrc="/assets/video/demo3.mp4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        {/* Breadcrumb from Video */}
        <div className="text-xs font-mono text-slate-500 mb-8 flex items-center gap-1.5">
          <span className="hover:text-slate-900 cursor-pointer">Home</span>
          <span>|</span>
          <span className="text-blue-600 font-semibold">Contact-us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details Card (Architectural Slate Box from Video) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            data-live-card
            className="lg:col-span-5 lg:order-2 relative space-y-7 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-blue-50/70 to-rose-50/80 p-7 text-slate-900 shadow-xl shadow-slate-900/[0.09] sm:p-9"
          >
            {/* Soft brand accent */}
            <div className="pointer-events-none absolute -right-12 -top-14 h-48 w-48 rounded-full bg-gradient-to-br from-blue-100/70 via-slate-100/40 to-rose-100/70 blur-3xl" />

            <div className="relative">
              <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Talk to our team</span>
              </div>
              <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Contact Details
              </h2>
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                Get in touch with us for any questions about our products or solutions.
              </p>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-4 group">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-200/80 bg-blue-50 transition-colors group-hover:border-rose-200 group-hover:bg-rose-50">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Email us
                </div>
                <div className="space-y-0.5 text-sm font-semibold text-slate-900">
                  <a href="mailto:info@siddhikabel.com" className="block transition-colors hover:text-blue-600">
                    info@siddhikabel.com
                  </a>
                  <a href="mailto:guru@siddhikabel.com" className="block transition-colors hover:text-blue-600">
                    guru@siddhikabel.com
                  </a>
                </div>
              </div>
            </div>

            {/* Call Support */}
            <div className="flex items-start gap-4 group">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-200/80 bg-blue-50 transition-colors group-hover:border-rose-200 group-hover:bg-rose-50">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Call Support
                </div>
                <div className="space-y-1 text-sm font-mono font-semibold text-slate-900">
                  <a href="tel:08026720440" className="block transition-colors hover:text-blue-600">
                    080 – 2672 0440
                  </a>
                  <a href="tel:09620000947" className="block transition-colors hover:text-blue-600">
                    096200 00947
                  </a>
                  <a href="tel:09886058511" className="block transition-colors hover:text-blue-600">
                    098860 58511
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
              <div className="group flex items-start gap-4 border-t border-slate-300 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-200/80 bg-blue-50 transition-colors group-hover:border-rose-200 group-hover:bg-rose-50">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-1 font-sans text-xs leading-relaxed text-slate-600">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Registered Office
                </div>
                <div className="font-semibold text-slate-800">
                  No. 3, 1st Main Road, Banashankari 3rd Stage,<br />
                  Bangalore – 560085, Karnataka, India
                </div>
              </div>
            </div>

            {/* Bangalore Warehouse Fast Dispatch Note */}
            <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-[11px] text-slate-600">
              <Clock className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>Bangalore central warehouse: Same-day order processing &amp; dispatch.</span>
            </div>
          </motion.div>

          {/* Right Column: Send a Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            data-live-card
            className="lg:col-span-7 lg:order-1 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Message Transmitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.firstName}</strong>. Our Bangalore industrial team has received your communication and will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#D7263D] hover:bg-[#B81E32] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Send a Message
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 mt-2 mb-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-slate-700 font-semibold mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Enter your product requirements, part numbers, or project inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-9 py-3.5 bg-[#D7263D] hover:bg-[#B81E32] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md active:scale-[0.99] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>SEND NOW</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};