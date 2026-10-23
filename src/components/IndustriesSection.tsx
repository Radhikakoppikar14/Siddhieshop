import React from 'react';
import { ArrowUpRight, Cpu, Sun, Wrench, Building2 } from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/cableData';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'automotive-robotics':
        return <Cpu className="w-5 h-5 text-slate-800" />;
      case 'power-renewables':
        return <Sun className="w-5 h-5 text-slate-800" />;
      case 'machine-tools':
        return <Wrench className="w-5 h-5 text-slate-800" />;
      case 'infrastructure-pharma':
      default:
        return <Building2 className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="industries" className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Critical Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>Sector Deployments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Engineered for Demanding Industrial Environments
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            From high-speed robotic assembly lines in automotive corridors to extreme temperature chemical plants, our cable systems guarantee signal fidelity and power resilience.
          </p>
        </div>

        {/* 4 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES_SERVED.map((ind, index) => (
            <div
              key={ind.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200/80">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    0{index + 1}. SECTOR
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {ind.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>

                {/* Cables Specified */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Primary Cable Classifications:
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-700 font-mono">
                    {ind.cablesUsed.map((cable, i) => (
                      <span key={i} className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        {cable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stat Metric */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Track Record:</span>
                <span className="font-mono text-xs font-bold text-slate-900">
                  {ind.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
