import React from 'react';
import { ShieldCheck, Truck, Warehouse, CheckCircle2, Award, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 lg:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: About Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest">
              <span>Corporate Profile</span>
              <span aria-hidden="true">·</span>
              <span>Bangalore, Karnataka</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
              Eighteen Years of Reliability in High-Specification Industrial Conduction
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Established on October 10, 2008 in Bangalore, <strong>Siddhi Kabel Corporation Private Limited</strong> has evolved into one of South India's premier authorized distributors, traders, and importers of specialized cables and automation hardware.
              </p>
              <p>
                We bridge international precision engineering and domestic infrastructure demands by stocking world-class European and Indian cable manufacturers—including the complete Lapp Group suite (ÖLFLEX®, UNITRONIC®, ETHERLINE®), Polycab India, Finolex, and KEI Industries.
              </p>
              <p>
                From our centralized logistics facilities in Banashankari 3rd Stage and Chamrajpet, our technical engineering desk assists machine builders, panel fabricators, and turnkey infrastructure contractors with rapid ex-stock supply, custom drum lengths, and authentic Manufacturer Test Certificates (MTC).
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Warehouse className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Direct Ex-Stock Inventory</div>
                  <div className="text-slate-600 text-xs">Ready warehouse spools minimizing factory downtime</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">100% Genuine Traceability</div>
                  <div className="text-slate-600 text-xs">Certified batch origin directly from authorized factories</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Pan-India Freight Logistics</div>
                  <div className="text-slate-600 text-xs">Fast transit to Bangalore, Hosur, Chennai, Pune &amp; beyond</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Technical Sales Engineering</div>
                  <div className="text-slate-600 text-xs">BOM optimization, cross-referencing &amp; custom lengths</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Stats Card & Highlights */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                Corporate Credentials
              </div>
              <div className="text-lg font-bold text-slate-900 mt-1">
                Siddhi Kabel Corporation Pvt. Ltd.
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Date of Incorporation:</span>
                <span className="text-slate-900 font-semibold">10 October 2008</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Company Category:</span>
                <span className="text-slate-900">Private Limited Company</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Bangalore Warehouse Hub:</span>
                <span className="text-slate-900">Banashankari 3rd Stage</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Distribution Speciality:</span>
                <span className="text-slate-900">Industrial Flexible &amp; Armoured</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Import Network:</span>
                <span className="text-slate-900">Germany &amp; Singapore</span>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-slate-800" />
                <span>Authorized Distribution Guarantee</span>
              </div>
              <p>
                All cables supplied by Siddhi Kabel carry factory warranty, compliance test certificates according to IS/IEC/VDE norms, and verified lot numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
