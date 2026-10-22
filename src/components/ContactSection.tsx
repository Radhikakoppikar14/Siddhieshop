import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Wholesale Pricing',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Direct Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Bangalore Operations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Connect with Our Engineering &amp; Sales Desk
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out for official wholesale price lists, tender specs, sample pieces, or ex-stock availability verification at our Bangalore warehouses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Addresses */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Address */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-slate-900" />
                <span>Headquarters &amp; Central Distribution Hub</span>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed font-sans">
                <strong>Siddhi Kabel Corporation Private Limited</strong><br />
                No. 3, 1st Main Road, Banashankari 3rd Stage,<br />
                Bangalore (Bengaluru), Karnataka – 560085, India
              </div>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between font-mono">
                <span>CIN Registered Entity</span>
                <span>GSTIN Verified</span>
              </div>
            </div>

            {/* Chamrajpet Logistics Office */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                <Building className="w-4 h-4 text-slate-900" />
                <span>City Commercial &amp; Logistics Desk</span>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed font-sans">
                Chamrajpet Commercial Area,<br />
                Bangalore, Karnataka – 560018, India
              </div>
            </div>

            {/* Quick Contact & Hours */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-2xs text-xs">
              <div className="flex items-center gap-3 py-1">
                <Phone className="w-4 h-4 text-slate-700 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[11px]">Direct Technical Sales:</span>
                  <a href="tel:+918026720085" className="font-mono font-semibold text-slate-900 hover:text-blue-900">
                    +91 (080) 2672-0085
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 py-1 border-t border-slate-100">
                <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[11px]">Official Email:</span>
                  <a href="mailto:sales@siddhikabel.com" className="font-mono font-semibold text-slate-900 hover:text-blue-900">
                    sales@siddhikabel.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 py-1 border-t border-slate-100">
                <Clock className="w-4 h-4 text-slate-700 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[11px]">Operating Hours:</span>
                  <span className="font-mono text-slate-800">
                    Monday to Saturday, 10:00 AM – 06:00 PM IST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Message Dispatched to Technical Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our engineering specialist will review your specifications and respond to <strong>{formData.email}</strong> within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      inquiryType: 'Wholesale Pricing',
                      message: ''
                    });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    Direct Inquiry &amp; Technical Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out your contact details and project requirements below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Precision Automation Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="suresh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-medium text-slate-700 mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                  >
                    <option value="Wholesale Pricing">Wholesale Pricing / Contractor Discounts</option>
                    <option value="Tender / Project Supply">Turnkey Project / Infrastructure Tender Supply</option>
                    <option value="Lapp Product Availability">Lapp Group Product Availability Check</option>
                    <option value="Technical Datasheet / MTC">Technical Datasheet &amp; Type Test Reports</option>
                    <option value="Other Commercial Inquiry">Other Commercial Inquiry</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block font-medium text-slate-700 mb-1">
                    Requirement Details (Cables, Quantities, Delivery Timeline)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify cable codes, core sizes, required meters, and expected dispatch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Protected under commercial confidentiality
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.99] transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
