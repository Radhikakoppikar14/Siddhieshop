import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeBrandsWeDealWithProps {
  onSelectBrand: (brandId: string) => void;
}

export const HomeBrandsWeDealWith: React.FC<HomeBrandsWeDealWithProps> = ({ onSelectBrand }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Exact 8 brand cards from Image 4
  const brands = [
    {
      id: 'lapp',
      name: 'LAPP',
      logoText: 'LAPP',
      tagline: '',
      color: '#EA580C',
      category: 'cables',
      description: 'Lapp Cables produces cables and conductors for different industries and markets.',
    },
    {
      id: 'havells',
      name: 'HAVELLS',
      logoText: 'HAVELLS',
      tagline: '',
      color: '#DC2626',
      category: 'switchgear',
      description: 'Havells India Limited is a leading Fast Moving Electrical Goods (FMEG) Company.',
    },
    {
      id: 'eaton',
      name: 'EATON',
      logoText: 'EATON',
      tagline: 'Powering Business Worldwide',
      color: '#0284C7',
      category: 'switchgear',
      description: 'Eaton produces a broad range of products and services, for power and control, applications.',
    },
    {
      id: 'jef',
      name: 'JEF TECHNO',
      logoText: 'JEF TECHNO SOLUTIONS PVT. LTD.',
      tagline: '',
      color: '#0284C7',
      category: 'earthing',
      description: 'Comprehensive solutions for maintaince free grounding and lighting protection system.',
    },
    {
      id: 'mennekes',
      name: 'MENNEKES®',
      logoText: 'MENNEKES®',
      tagline: 'Plugs for the world',
      color: '#DC2626',
      category: 'plugs',
      description: 'MENNEKES is a leading manufacturer of industrial plugs and sockets for various applications.',
    },
    {
      id: 'hager',
      name: ':hager',
      logoText: ':hager',
      tagline: '',
      color: '#0284C7',
      category: 'switchgear',
      description: 'Hager is the specialist for electrical installations in residential and commercial sectors.',
    },
    {
      id: 'luker',
      name: 'LUKER®',
      logoText: 'LUKER®',
      tagline: '',
      color: '#1E293B',
      category: 'lighting',
      description: 'Manufactures cost effective LED solutions in India for domestic and commercial needs.',
    },
    {
      id: 'neptune',
      name: 'NEPTUNE',
      logoText: 'NEPTUNE',
      tagline: 'NAME THAT CARRIES POWER',
      color: '#0284C7',
      category: 'switchgear',
      description: 'Neptune India offers global products and solutions in the field of Power & Energy based on latest technology.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Brands (8)' },
    { id: 'cables', label: 'Cables & Conduits' },
    { id: 'switchgear', label: 'Switchgear & Power' },
    { id: 'plugs', label: 'Plugs & Sockets' },
    { id: 'earthing', label: 'Earthing Systems' },
    { id: 'lighting', label: 'LED Lighting' },
  ];

  const filteredBrands = activeCategory === 'all'
    ? brands
    : brands.filter((b) => b.category === activeCategory);
  const isSingleBrand = filteredBrands.length === 1;

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Image 4 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider mb-1">
              Authorized Distribution Network
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#232742] tracking-tight">
              Brands we deal with
            </h2>
            <div className="w-16 h-1 bg-[#C81E27] mt-3 rounded-full" />
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-2xs font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Cards in 2 Rows of 4 matching Image 4 */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredBrands.map((brand) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.985 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => onSelectBrand(brand.id)}
              data-live-card
              className={`group relative flex min-h-[300px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 text-center shadow-2xs transition-all duration-300 hover:border-red-300 hover:bg-white hover:shadow-lg ${isSingleBrand ? 'sm:col-span-2 sm:min-h-[220px] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-left lg:col-span-4 lg:min-h-[200px]' : ''}`}
            >
              {/* Subtle top brand accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: brand.color }}
              />

              <div className={`flex w-full flex-col items-center pt-3 ${isSingleBrand ? 'sm:items-start sm:pt-0' : ''}`}>
                {/* Brand Logo / Wordmark */}
                <motion.div
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:scale-105 transition-transform duration-300"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </motion.div>

                {brand.tagline && (
                  <div className="text-[10px] font-mono text-slate-500 font-medium mt-1">
                    {brand.tagline}
                  </div>
                )}

                {/* Description matching Image 4 */}
                <p className={`mt-4 max-w-[210px] text-xs leading-relaxed text-slate-600 transition-colors group-hover:text-slate-800 ${isSingleBrand ? 'sm:max-w-xl' : ''}`}>
                  {brand.description}
                </p>
              </div>

              {/* Circular button with arrow at bottom matching Image 4 */}
              <div className={`mt-6 flex flex-col items-center gap-1.5 ${isSingleBrand ? 'sm:mt-0 sm:shrink-0' : ''}`}>
                <div className="w-9 h-9 rounded-full bg-white border border-slate-300 group-hover:border-[#C81E27] group-hover:bg-[#C81E27] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                  <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#C81E27] transition-colors font-medium">
                  Explore Range
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
