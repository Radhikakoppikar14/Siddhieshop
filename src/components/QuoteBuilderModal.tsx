import React, { useState } from 'react';
import { X, Trash2, Plus, FileText, CheckCircle2, Download, Send, ArrowRight, Printer } from 'lucide-react';
import { motion } from 'motion/react';
import { CableProduct, CABLE_PRODUCTS } from '../data/cableData';

export interface RFQItem {
  id: string;
  name: string;
  code: string;
  cores: string;
  size: string;
  meters: number;
}

interface QuoteBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfqItems: RFQItem[];
  onRemoveItem: (id: string) => void;
  onAddItem: (item: RFQItem) => void;
  onClearAll: () => void;
}

export const QuoteBuilderModal: React.FC<QuoteBuilderModalProps> = ({
  isOpen,
  onClose,
  rfqItems,
  onRemoveItem,
  onAddItem,
  onClearAll,
}) => {
  // New item draft state
  const [selectedCableCode, setSelectedCableCode] = useState<string>(CABLE_PRODUCTS[0].code);
  const [customCores, setCustomCores] = useState<string>('4 Core');
  const [customSize, setCustomSize] = useState<string>('2.5 mm²');
  const [customMeters, setCustomMeters] = useState<number>(100);

  // Form submission state
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rfqRefNumber, setRfqRefNumber] = useState('');

  if (!isOpen) return null;

  const handleAddCustomLine = (e: React.FormEvent) => {
    e.preventDefault();
    const product = CABLE_PRODUCTS.find((p) => p.code === selectedCableCode) || CABLE_PRODUCTS[0];

    const newItem: RFQItem = {
      id: `${product.code}-${Date.now()}`,
      name: product.name,
      code: product.code,
      cores: customCores,
      size: customSize,
      meters: Math.max(1, customMeters)
    };

    onAddItem(newItem);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !companyName) return;

    const randomRef = `SK-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqRefNumber(randomRef);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    onClearAll();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-builder-title"
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-[0_32px_100px_-24px_rgba(15,23,42,0.55)] border border-white/70 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              <span>Wholesale Quotation Engine</span>
              <span aria-hidden="true">·</span>
              <span>Direct Bangalore Supply</span>
            </div>
            <h3 id="quote-builder-title" className="text-lg font-bold text-slate-900">
              Request Project Quotation &amp; Bill of Materials (BOM)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {submitted ? (
            <div className="py-10 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Quotation Request Transmitted
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thank you, <strong>{contactName || companyName}</strong>. Your Bill of Materials has been assigned to our Bangalore wholesale technical sales desk.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-xs text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Reference Number:</span>
                  <strong className="text-slate-900">{rfqRefNumber}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="text-slate-800">{city || 'Bangalore Hub'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact:</span>
                  <span className="text-slate-800">{email} / {phone}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-1.5">
                  <span className="text-slate-500">Estimated Turnaround:</span>
                  <span className="text-emerald-700 font-bold">2 to 4 Business Hours</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Summary</span>
                </button>
                <button
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
                >
                  <span>Done</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Top Section: Current BOM Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                    Bill of Materials ({rfqItems.length} {rfqItems.length === 1 ? 'Line Item' : 'Line Items'})
                  </div>
                  {rfqItems.length > 0 && (
                    <button
                      onClick={onClearAll}
                      className="text-xs text-rose-600 hover:text-rose-800 font-medium"
                    >
                      Clear All Lines
                    </button>
                  )}
                </div>

                {rfqItems.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-lg text-slate-500 text-xs">
                    No cable specifications added yet. Add a custom cable requirement below or select items from our catalog.
                  </div>
                ) : (
                  <div className="border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100/90 text-slate-600 uppercase font-mono text-[11px] border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-4 font-semibold">Cable Description</th>
                          <th className="py-2.5 px-3 font-semibold">Code</th>
                          <th className="py-2.5 px-3 font-semibold">Core / Size</th>
                          <th className="py-2.5 px-3 font-semibold text-right">Length (Meters)</th>
                          <th className="py-2.5 px-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {rfqItems.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-2.5 px-4 font-semibold text-slate-900">
                              {item.name}
                            </td>
                            <td className="py-2.5 px-3 font-mono text-slate-600">
                              {item.code}
                            </td>
                            <td className="py-2.5 px-3 font-mono text-slate-800">
                              {item.cores} · {item.size}
                            </td>
                            <td className="py-2.5 px-3 text-right font-mono font-medium text-slate-900 tabular-nums">
                              {item.meters} m
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                                title="Remove line"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Add Custom Cable Line Item Sub-form */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5 text-slate-900" />
                  <span>Add Line Item to BOM</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
                  <div className="sm:col-span-5">
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Cable Family
                    </label>
                    <select
                      value={selectedCableCode}
                      onChange={(e) => setSelectedCableCode(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-md text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      {CABLE_PRODUCTS.map((prod) => (
                        <option key={prod.code} value={prod.code}>
                          {prod.name} ({prod.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Cores
                    </label>
                    <select
                      value={customCores}
                      onChange={(e) => setCustomCores(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-md text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="Single Core">Single Core</option>
                      <option value="2 Core">2 Core</option>
                      <option value="3 Core">3 Core</option>
                      <option value="3.5 Core">3.5 Core</option>
                      <option value="4 Core">4 Core</option>
                      <option value="5 Core">5 Core</option>
                      <option value="7 Core">7 Core</option>
                      <option value="12 Core">12 Core</option>
                      <option value="18 Core">18 Core</option>
                      <option value="25 Core">25 Core</option>
                      <option value="4-Pair SF/UTP">4-Pair SF/UTP</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Cross Section
                    </label>
                    <select
                      value={customSize}
                      onChange={(e) => setCustomSize(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-md text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="0.50 mm²">0.50 mm²</option>
                      <option value="0.75 mm²">0.75 mm²</option>
                      <option value="1.0 mm²">1.0 mm²</option>
                      <option value="1.5 mm²">1.5 mm²</option>
                      <option value="2.5 mm²">2.5 mm²</option>
                      <option value="4.0 mm²">4.0 mm²</option>
                      <option value="6.0 mm²">6.0 mm²</option>
                      <option value="10.0 mm²">10.0 mm²</option>
                      <option value="16.0 mm²">16.0 mm²</option>
                      <option value="25.0 mm²">25.0 mm²</option>
                      <option value="50.0 mm²">50.0 mm²</option>
                      <option value="95.0 mm²">95.0 mm²</option>
                      <option value="150.0 mm²">150.0 mm²</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">
                      Length (Meters)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={customMeters}
                      onChange={(e) => setCustomMeters(Number(e.target.value))}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-md text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>

                  <div className="sm:col-span-1 flex items-end">
                    <button
                      type="button"
                      onClick={handleAddCustomLine}
                      className="w-full py-1.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 text-xs font-semibold flex items-center justify-center transition-colors"
                      title="Add line"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom: Buyer Contact & Project Information Form */}
              <form onSubmit={handleSubmitInquiry} className="space-y-4 pt-2 border-t border-slate-200">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                  Client &amp; Delivery Logistics
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bosch India / ABB / L&T"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Delivery Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bangalore, Hosur, Chennai, Pune"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Special Requirements / Standard
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need MTC &amp; Type Test reports"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                {/* Submit Row */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    Direct Bangalore stockist rates · No middleman markup
                  </span>

                  <button
                    type="submit"
                    disabled={rfqItems.length === 0}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit RFQ for Wholesale Pricing</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
