import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeHeroBrandsProps {
  onSelectBrand: (brandId: string) => void;
  onExploreProducts: () => void;
}

export const HomeHeroBrands: React.FC<HomeHeroBrandsProps> = ({
  onSelectBrand,
  onExploreProducts,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  // Exact brands as shown in the video at timestamp 00:00 - 00:02
  const brands = [
    {
      id: 'lapp',
      name: 'LAPP',
      sub: '',
      color: '#EA580C',
      desc: 'Lapp Cables produces cables and conductors for different industries and markets.',
    },
    {
      id: 'eaton',
      name: 'EATON',
      sub: 'Powering Business Worldwide',
      color: '#0284C7',
      desc: 'Eaton produces a broad range of products and services, for power and control, applications.',
    },
    {
      id: 'mennekes',
      name: 'MENNEKES®',
      sub: '',
      color: '#DC2626',
      desc: 'MENNEKES is a leading manufacturer of industrial plugs and sockets for various applications.',
    },
    {
      id: 'hager',
      name: ':hager',
      sub: '',
      color: '#0284C7',
      desc: 'Hager is the specialist for electrical installations in residential and commercial sectors.',
    },
    {
      id: 'luker',
      name: 'LUKER®',
      sub: '',
      color: '#1E293B',
      desc: 'Manufactures cost effective LED solutions in India for domestic and commercial needs.',
    },
    {
      id: 'neptune',
      name: 'NEPTUNE',
      sub: 'THAT CARRIES POWER',
      color: '#0284C7',
      desc: 'Neptune India offers global products and solutions in the field of Power & Energy based on latest technology.',
    },
    {
      id: 'havells',
      name: 'HAVELLS',
      sub: '',
      color: '#DC2626',
      desc: 'Industrial cables, switchgear, protection devices and commercial energy efficient lighting.',
    },
    {
      id: 'jef',
      name: 'JEF ECO SAFE',
      sub: 'Electrical Grounding',
      color: '#059669',
      desc: 'Maintenance free electrical grounding solutions and advanced lightning arrestor systems.',
    },
  ];

  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : brands.length - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount < brands.length ? prev + 1 : 0));
  };

  const visibleBrands = brands.slice(startIndex, startIndex + visibleCount);
  // Wrap around if near end
  if (visibleBrands.length < visibleCount) {
    visibleBrands.push(...brands.slice(0, visibleCount - visibleBrands.length));
  }

  return (
    <section className="bg-white py-12 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#C81E27] hover:border-red-300 transition-all cursor-pointer hidden md:flex"
            aria-label="Previous brands"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#C81E27] hover:border-red-300 transition-all cursor-pointer hidden md:flex"
            aria-label="Next brands"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Brand Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleBrands.map((brand, idx) => (
              <motion.div
                key={`${brand.id}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectBrand(brand.id)}
                className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 p-8 flex flex-col justify-between items-center text-center cursor-pointer group min-h-[310px]"
              >
                {/* Brand Name / Title */}
                <div className="w-full flex flex-col items-center pt-2">
                  <div
                    className="text-3xl font-extrabold tracking-tight mb-1"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </div>

                  {brand.sub && (
                    <div className="text-[11px] font-mono text-slate-400 font-medium mb-3">
                      {brand.sub}
                    </div>
                  )}

                  {/* Body description exactly as in video */}
                  <p className="text-xs text-slate-600 leading-relaxed mt-4 max-w-[220px]">
                    {brand.desc}
                  </p>
                </div>

                {/* Circular Button at bottom with arrow > exactly as in video */}
                <div className="mt-8">
                  <div className="w-10 h-10 rounded-full border border-slate-300 group-hover:border-[#C81E27] group-hover:bg-[#C81E27] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                    <ChevronRight className="w-5 h-5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {brands.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i % (brands.length - 3))}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                startIndex === i ? 'w-6 bg-[#C81E27]' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
