import React from 'react';
import { ShieldCheck, Award, CheckCircle, FileCheck, ExternalLink } from 'lucide-react';
import { AUTHORIZED_BRANDS } from '../data/cableData';

export const BrandCertifications: React.FC = () => {
  const complianceStandards = [
    {
      code: 'IS 694 / IS 7098',
      name: 'Bureau of Indian Standards (BIS)',
      details: 'ISI mark compliance for PVC & XLPE insulated cables, up to 33kV.'
    },
    {
      code: 'VDE & EN 50525',
      name: 'German Electrical Certification',
      details: 'Strict European production tests for mechanical flex cycles and conductor resistance.'
    },
    {
      code: 'IEC 60332-1 & 60332-3',
      name: 'International Flame Retardance',
      details: 'Fire reaction testing ensuring self-extinguishing flame propagation barriers.'
    },
    {
      code: 'RoHS & REACH Directives',
      name: 'Chemical & Environmental Safety',
      details: 'Complete elimination of lead, cadmium, mercury, and halogen hazards.'
    },
    {
      code: 'ISO 9001:2015',
      name: 'Quality Management Systems',
      details: 'Systematic batch traceability, incoming quality assurance and warehouse testing.'
    },
    {
      code: 'UL / CSA Recognized',
      name: 'North American Safety Standards',
      details: 'Appliance Wiring Material (AWM) certification for machinery export lines.'
    }
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Quality Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>Authorized Channels</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Authorized Brands &amp; Verified Testing Standards
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Every spool, drum, and cut-length delivered by Siddhi Kabel is sourced directly through certified manufacturer channels with authentic test certificates (MTC) and serial traceability.
          </p>
        </div>

        {/* Authorized Brands Strip */}
        <div className="mb-9">
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-4">
            Authorized Dealerships &amp; Distribution Partners:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {AUTHORIZED_BRANDS.map((brand, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs text-slate-400">0{i + 1}</div>
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                </div>
                <div className="text-base font-bold text-slate-900">
                  {brand.name}
                </div>
                <div className="text-xs font-medium text-slate-600">
                  {brand.role}
                </div>
                <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 font-mono">
                  {brand.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Standards Grid */}
        <div>
          <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-4">
            Compliance &amp; Laboratory Test Benchmarks:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900">
                    {std.code}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-slate-600" />
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  {std.name}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
