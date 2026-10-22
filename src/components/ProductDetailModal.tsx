import React from 'react';
import { X, Check, Plus, Shield, Zap, Flame, FileText, Printer, CheckCircle2 } from 'lucide-react';
import { CableProduct } from '../data/cableData';

interface ProductDetailModalProps {
  product: CableProduct | null;
  onClose: () => void;
  onAddToRFQ: (product: CableProduct) => void;
  isAdded: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToRFQ,
  isAdded,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              <span>{product.code}</span>
              <span aria-hidden="true">·</span>
              <span>{product.categoryLabel}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {product.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors"
            aria-label="Close datasheet modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Top Overview Split */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.shortDesc}
              </p>

              <div className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Voltage Grade:</span>
                  <span className="text-slate-900 font-bold">{product.voltageGrade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Temperature:</span>
                  <span className="text-slate-900 font-bold">{product.tempRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Available Cores:</span>
                  <span className="text-slate-900">{product.coreRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cross Section:</span>
                  <span className="text-slate-900 font-bold">{product.sizeRange}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Construction & Materials */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Cable Construction &amp; Material Layering
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="text-slate-400 font-mono block text-[10px] uppercase">Conductor</span>
                <span className="font-medium text-slate-900">{product.conductor}</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="text-slate-400 font-mono block text-[10px] uppercase">Dielectric Insulation</span>
                <span className="font-medium text-slate-900">{product.insulation}</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="text-slate-400 font-mono block text-[10px] uppercase">Screening / Armor</span>
                <span className="font-medium text-slate-900">{product.armoring}</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="text-slate-400 font-mono block text-[10px] uppercase">Outer Sheath</span>
                <span className="font-medium text-slate-900">{product.sheath}</span>
              </div>
            </div>
          </div>

          {/* Key Electrical & Mechanical Benchmarks */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Verified Technical Benchmarks
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-100">
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className="hover:bg-slate-50/70">
                      <td className="py-2 px-3 font-medium text-slate-600 bg-slate-50/50 w-1/3">
                        {spec.label}
                      </td>
                      <td className="py-2 px-3 font-mono font-medium text-slate-900">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Primary Recommended Applications */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Recommended Industrial Applications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((app, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-md border border-slate-200 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Datasheet</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onAddToRFQ(product)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                isAdded
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added to Quotation</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to RFQ Bill of Materials</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
