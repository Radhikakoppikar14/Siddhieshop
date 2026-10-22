import React, { useState } from 'react';
import { Eye, Plus, Check, Download, ArrowRight, Shield, Zap } from 'lucide-react';
import { CABLE_PRODUCTS, CableProduct } from '../data/cableData';

interface ProductCatalogProps {
  onSelectProduct: (product: CableProduct) => void;
  onAddToRFQ: (product: CableProduct) => void;
  selectedProductIds: string[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToRFQ,
  selectedProductIds,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'power-control', label: 'Power & Control (ÖLFLEX)' },
    { id: 'armoured-ht', label: 'Armoured & HT Mains' },
    { id: 'data-instrumentation', label: 'Data, Signal & OFC' },
    { id: 'house-panel-wires', label: 'House & Panel Wires' },
    { id: 'specialty-av', label: 'Elevator & CCTV' },
    { id: 'switchgear-accessories', label: 'Switchgear & Connectors' }
  ];

  const displayedProducts = activeTab === 'all'
    ? CABLE_PRODUCTS
    : CABLE_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
              <span>Catalog &amp; Inventory</span>
              <span aria-hidden="true">·</span>
              <span>Ex-Stock Bangalore Supply</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Precision Cable Systems &amp; Electrical Components
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Authorized direct lines for Lapp Group flexible &amp; drag-chain cables, Polycab armoured mains, Finolex building wires, D-Link networking, and industrial switchgear.
            </p>
          </div>

          {/* Interactive Category Tabs (Segmented Button Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, idx) => {
            const isAdded = selectedProductIds.includes(product.id);
            const isMarquee = product.featured && idx === 0;

            return (
              <div
                key={product.id}
                className={`bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-sm ${
                  isMarquee ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Image container */}
                  <div className={`relative w-full bg-slate-100 overflow-hidden ${isMarquee ? 'h-64 sm:h-72' : 'h-52'}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Scrim for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top left code & Brand */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-white/95 backdrop-blur-xs text-[11px] font-mono font-medium px-2.5 py-0.5 rounded text-slate-800 border border-slate-200">
                        {product.code}
                      </span>
                      <span className="bg-slate-900/90 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded">
                        {product.brand}
                      </span>
                    </div>

                    {/* Bottom image overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">
                        {product.categoryLabel}
                      </div>
                      <div className="text-sm font-semibold truncate text-white">
                        {product.name}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Zero-Pill Metadata Line */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono flex-wrap">
                      <span>{product.voltageGrade.split('(')[0].trim()}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.tempRange.split('(')[0].trim()}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-800 font-medium">IS / IEC Certified</span>
                    </div>

                    {/* Specifications List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex justify-between py-0.5 border-b border-slate-50">
                        <span className="text-slate-500">Conductor:</span>
                        <span className="font-mono text-slate-900 text-right truncate max-w-[65%]">{product.conductor.split('(')[0]}</span>
                      </div>
                      <div className="flex justify-between py-0.5 border-b border-slate-50">
                        <span className="text-slate-500">Insulation:</span>
                        <span className="font-mono text-slate-900 text-right truncate max-w-[65%]">{product.insulation}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-500">Cross Section:</span>
                        <span className="font-mono text-slate-900 text-right tabular-nums">{product.sizeRange}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </button>

                  <button
                    onClick={() => onAddToRFQ(product)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      isAdded
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
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
      </div>
    </section>
  );
};
