import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Check, Plus, Eye, ArrowUpRight } from 'lucide-react';
import { CABLE_PRODUCTS, CableProduct } from '../data/cableData';

interface InteractiveSelectorProps {
  onSelectProduct: (product: CableProduct) => void;
  onAddToRFQ: (product: CableProduct) => void;
  selectedProductIds: string[];
}

export const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({
  onSelectProduct,
  onAddToRFQ,
  selectedProductIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedConductor, setSelectedConductor] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return CABLE_PRODUCTS.filter((item) => {
      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.shortDesc.toLowerCase().includes(query) ||
        item.applications.some((app) => app.toLowerCase().includes(query));

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Brand filter
      const matchesBrand =
        selectedBrand === 'all' || item.brand.toLowerCase().includes(selectedBrand.toLowerCase());

      // Conductor filter
      const matchesConductor =
        selectedConductor === 'all' ||
        (selectedConductor === 'copper' && item.conductor.toLowerCase().includes('copper')) ||
        (selectedConductor === 'aluminum' && item.conductor.toLowerCase().includes('aluminum')) ||
        (selectedConductor === 'tinned' && item.conductor.toLowerCase().includes('tinned')) ||
        (selectedConductor === 'fiber' && (item.conductor.toLowerCase().includes('fiber') || item.conductor.toLowerCase().includes('glass')));

      return matchesSearch && matchesCategory && matchesBrand && matchesConductor;
    });
  }, [searchQuery, selectedCategory, selectedBrand, selectedConductor]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedConductor('all');
  };

  return (
    <section id="selector" className="py-10 lg:py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-7">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Engineering Utility</span>
            <span aria-hidden="true">·</span>
            <span>Technical Spec Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Interactive Cable Selector &amp; Spec Matrix
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Search standard and specialized cables, house wires, industrial switchgear, and fiber systems stocked at our Bangalore warehouse hub.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <label htmlFor="cable-search" className="sr-only">Search cables by name, brand, or code</label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="cable-search"
                  type="text"
                  placeholder="Search Olflex, Polycab, Armoured, Cat6, MCB..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <label htmlFor="filter-category" className="sr-only">Product Segment</label>
              <select
                id="filter-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by application category"
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              >
                <option value="all">All Product Segments</option>
                <option value="power-control">Power &amp; Flexible Control (ÖLFLEX®)</option>
                <option value="armoured-ht">Armoured Power &amp; Underground HT</option>
                <option value="data-instrumentation">Data, Shielded &amp; Optical Fiber</option>
                <option value="house-panel-wires">House Wires &amp; Panel Flexibles</option>
                <option value="specialty-av">Elevator, CCTV &amp; Silicone Heat</option>
                <option value="switchgear-accessories">Switchgear, MCBs &amp; Connectors</option>
              </select>
            </div>

            {/* Brand Filter */}
            <div className="md:col-span-2">
              <label htmlFor="filter-brand" className="sr-only">Brand</label>
              <select
                id="filter-brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                aria-label="Filter by brand"
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              >
                <option value="all">All Brands</option>
                <option value="lapp">Lapp Group</option>
                <option value="polycab">Polycab India</option>
                <option value="finolex">Finolex Cables</option>
                <option value="kei">KEI Industries</option>
                <option value="d-link">D-Link Network</option>
                <option value="ge">GE / Switchgear</option>
              </select>
            </div>

            {/* Conductor Material */}
            <div className="md:col-span-2">
              <label htmlFor="filter-conductor" className="sr-only">Conductor Type</label>
              <select
                id="filter-conductor"
                value={selectedConductor}
                onChange={(e) => setSelectedConductor(e.target.value)}
                aria-label="Filter by conductor material"
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              >
                <option value="all">All Conductors</option>
                <option value="copper">Bare Copper</option>
                <option value="aluminum">Aluminum</option>
                <option value="tinned">Tinned Copper</option>
                <option value="fiber">Optical Fiber</option>
              </select>
            </div>
          </div>

          {/* Active status & reset */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span>Showing <strong className="text-slate-900 tabular-nums">{filteredProducts.length}</strong> matching specifications</span>
              {(searchQuery || selectedCategory !== 'all' || selectedBrand !== 'all' || selectedConductor !== 'all') && (
                <span className="text-slate-400">· Filtered</span>
              )}
            </div>
            {(searchQuery || selectedCategory !== 'all' || selectedBrand !== 'all' || selectedConductor !== 'all') && (
              <button
                onClick={handleReset}
                className="text-xs text-slate-700 hover:text-slate-900 underline font-medium"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((cable) => {
            const isAdded = selectedProductIds.includes(cable.id);

            return (
              <div
                key={cable.id}
                data-live-card
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Image Slot */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={cable.image}
                      alt={cable.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[11px] font-mono font-medium px-2 py-0.5 rounded text-slate-800 border border-slate-200">
                      {cable.code}
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-xs text-[10px] font-mono font-semibold px-2 py-0.5 rounded text-white">
                      {cable.brand}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <div>
                      {/* Zero-Pill Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5 font-mono">
                        <span>{cable.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{cable.tempRange.split(' ')[0]}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {cable.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {cable.shortDesc}
                      </p>
                    </div>

                    {/* Technical Parameter Matrix */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Voltage Grade:</span>
                        <span className="font-mono text-slate-900 font-medium">{cable.voltageGrade.split('(')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Cores / Range:</span>
                        <span className="font-mono text-slate-900">{cable.coreRange.split('(')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Cross Section:</span>
                        <span className="font-mono text-slate-900 font-medium tabular-nums">{cable.sizeRange}</span>
                      </div>
                    </div>

                    {/* Standards */}
                    <div className="pt-2 text-[11px] text-slate-500 flex flex-wrap gap-x-2 gap-y-1">
                      <span className="font-medium text-slate-700">Standards:</span>
                      {cable.standards.slice(0, 3).map((std, i) => (
                        <span key={i} className="font-mono">
                          {std}{i < Math.min(cable.standards.length, 3) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(cable)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-md border border-slate-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Datasheet</span>
                  </button>

                  <button
                    onClick={() => onAddToRFQ(cable)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-md transition-colors ${
                      isAdded
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to RFQ</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to RFQ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No matching cable specifications found</h3>
            <p className="mt-1 text-xs text-slate-600">
              Try adjusting your product segment, brand, or search keywords.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
