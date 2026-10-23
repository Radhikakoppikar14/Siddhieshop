import React, { useState, useMemo } from 'react';
import { X, Search, CheckCircle2, Download, Send, Phone, Mail, ShoppingCart, Printer, Sparkles, Tag, Check, Truck, ShieldCheck, BadgePercent } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_ON_OFFER_DATA, SpecialOfferItem } from '../data/siddhiContent';

interface ProductsOnOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Render as a normal page (inside the site layout) instead of a popup */
  asPage?: boolean;
}

export const ProductsOnOfferModal: React.FC<ProductsOnOfferModalProps> = ({ isOpen, onClose, asPage = false }) => {
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState<{ [partNo: string]: boolean }>({
    'SK-OLF-110-4G1.5': true,
    'SK-UNI-CY-4X0.5': true,
  });
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  const filteredItems = useMemo(() => {
    return PRODUCTS_ON_OFFER_DATA.filter(
      (item) =>
        item.partNo.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const toggleSelect = (partNo: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [partNo]: !prev[partNo],
    }));
  };

  const selectAll = () => {
    const next: { [partNo: string]: boolean } = {};
    filteredItems.forEach((it) => {
      next[it.partNo] = true;
    });
    setSelectedItems(next);
  };

  const clearAll = () => {
    setSelectedItems({});
  };

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

  const totalEstimatedPrice = useMemo(() => {
    return PRODUCTS_ON_OFFER_DATA.reduce((sum, item) => {
      if (selectedItems[item.partNo]) {
        return sum + item.price;
      }
      return sum;
    }, 0);
  }, [selectedItems]);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) return;
    setOrderSent(true);
  };

  return (
    <AnimatePresence>
      {(asPage || isOpen) && (
        <div className={asPage ? 'bg-[#F0F7FF] px-3 py-6 sm:px-6 sm:py-10' : 'fixed inset-0 z-[100] overflow-y-auto bg-[#0B2F5B]/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6'}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative mx-auto w-full max-w-5xl bg-white rounded-3xl shadow-[0_40px_90px_-30px_rgba(11,47,91,0.6)] border border-white/70 overflow-hidden flex flex-col ${asPage ? '' : 'max-h-[92vh]'}`}
          >
            {/* Header Bar */}
            <div className="relative shrink-0 overflow-hidden bg-[#123D73] px-5 py-4 sm:px-6 text-white">
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full bg-white/15 blur-2xl" />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-sky-200/20 blur-3xl" />
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ rotate: -12, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/40 backdrop-blur"
                  >
                    <BadgePercent className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F43F5E] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        <Sparkles className="h-3 w-3" /> Limited Stock
                      </span>
                      <span className="hidden text-[10px] font-mono uppercase tracking-widest text-white/80 sm:inline">
                        Home | Products | Special Discount Offer
                      </span>
                    </div>
                    <h3 className="mt-1 pb-0.5 text-lg font-extrabold leading-snug tracking-tight sm:text-2xl">
                      Products on Offer <span className="text-sky-100">— Special Discounted Rates</span>
                    </h3>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="shrink-0 rounded-xl bg-white/15 p-2 text-white ring-1 ring-white/30 transition-all duration-300 hover:rotate-90 hover:bg-white/30 cursor-pointer"
                  aria-label={asPage ? 'Back to products' : 'Close offer modal'}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative mt-3 hidden flex-wrap gap-2 text-[11px] font-semibold sm:[@media(min-height:700px)]:flex">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/25"><Truck className="h-3.5 w-3.5" /> Free delivery in Bangalore</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/25"><ShieldCheck className="h-3.5 w-3.5" /> 12 months warranty</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/25"><Tag className="h-3.5 w-3.5" /> GST extra as applicable</span>
              </div>
            </div>

            {/* Content Body */}
            <div className={`p-6 space-y-6 text-xs bg-[#F0F7FF] ${asPage ? '' : 'overflow-y-auto flex-1 min-h-0'}`}>
              {orderSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Order Requirement Transmitted
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong>{companyName || 'Valued Customer'}</strong>. Our Bangalore dispatch desk has reserved your selected items. We will confirm formal proforma invoice at <strong>{email}</strong> within 1 hour.
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl font-mono text-left space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Reference ID:</span>
                      <strong className="text-slate-900">SK-OFFER-2026-89</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Free Delivery:</span>
                      <strong className="text-emerald-700">Bangalore Urban &amp; Industrial Corridor</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Direct Helpline:</span>
                      <strong className="text-slate-900">080 - 2672 0440 / 096200 00947</strong>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setOrderSent(false);
                      onClose();
                    }}
                    className="mt-4 px-8 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors shadow-sm"
                  >
                    Close &amp; Return
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Greetings as in Video */}
                  <div className="relative overflow-hidden bg-white p-5 pl-6 rounded-2xl border border-blue-100 shadow-[0_14px_34px_-22px_rgba(18,61,115,0.35)] space-y-2 before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-[#F43F5E]">
                    <div className="font-bold text-slate-900 text-sm">Dear Customers,</div>
                    <div className="font-semibold text-slate-800">Greetings...</div>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      We are pleased to offer the below list of items with a very special rates, this offer is valid till the stock is available, we request you to kindly select the items required and send us your requirement or order for confirmation on the stock status.
                    </p>
                  </div>

                  {/* Filter & Actions Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="relative w-full sm:max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Filter special offer items by part number or description..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-blue-100 shadow-sm rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white transition-all text-xs"
                      />
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={selectAll}
                        className="px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-[11px] transition-all hover:-translate-y-0.5"
                      >
                        Select All
                      </button>
                      <button
                        type="button"
                        onClick={clearAll}
                        className="px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-[11px] transition-all hover:-translate-y-0.5"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-blue-200 bg-white hover:bg-blue-50 text-blue-700 font-semibold text-[11px] transition-all hover:-translate-y-0.5"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print</span>
                      </button>
                    </div>
                  </div>

                  {/* Exact Table from Video */}
                  <div className="border border-blue-100 bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_-26px_rgba(18,61,115,0.3)]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#E7F0FA] text-blue-800 uppercase font-mono text-[11px] border-b border-blue-100">
                          <tr>
                            <th className="py-3 px-3 text-center">Select</th>
                            <th className="py-3 px-3 font-semibold">Sl. No</th>
                            <th className="py-3 px-3 font-semibold">Part No</th>
                            <th className="py-3 px-4 font-semibold">Description</th>
                            <th className="py-3 px-3 font-semibold text-center">Qty</th>
                            <th className="py-3 px-4 font-semibold text-right">Price (+GST Extra)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50">
                          {filteredItems.map((item, idx) => {
                            const isSelected = Boolean(selectedItems[item.partNo]);
                            return (
                              <motion.tr
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.5), ease: [0.22, 1, 0.36, 1] }}
                                key={item.partNo}
                                onClick={() => toggleSelect(item.partNo)}
                                className={`cursor-pointer transition-colors ${
                                  isSelected ? 'bg-blue-50 shadow-[inset_4px_0_0_#2563A6]' : 'hover:bg-blue-50/50 hover:shadow-[inset_4px_0_0_#C3D3E4]'
                                }`}
                              >
                                <td className="py-3 px-3 text-center">
                                  <div className="flex items-center justify-center">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => toggleSelect(item.partNo)}
                                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-400/30 h-4 w-4 accent-[#2563A6] cursor-pointer"
                                    />
                                  </div>
                                </td>
                                <td className="py-3 px-3 font-mono text-slate-500">
                                  {item.slNo}
                                </td>
                                <td className="py-3 px-3 font-mono font-bold text-slate-900">
                                  {item.partNo}
                                </td>
                                <td className="py-3 px-4 text-slate-700 font-medium">
                                  {item.description}
                                </td>
                                <td className="py-3 px-3 text-center font-mono text-slate-600">
                                  {item.qty}
                                </td>
                                <td className="py-3 px-4 text-right">
                                  <span className="inline-block rounded-lg bg-blue-50 px-2.5 py-1 font-mono font-bold text-blue-700 tabular-nums ring-1 ring-blue-100">
                                    ₹{item.price.toLocaleString('en-IN')}
                                  </span>
                                </td>
                              </motion.tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Real-time Order Summary Bar */}
                  <div className="p-4 bg-[#123D73] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono shadow-[0_18px_36px_-20px_rgba(18,61,115,0.5)]">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-[#F43F5E] rounded-md text-xs font-bold text-white shadow">
                        {selectedCount} ITEMS SELECTED
                      </span>
                      <span className="text-xs text-white/85">
                        Total Base Value (excl. GST):
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-white">
                      ₹{totalEstimatedPrice.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Exact Terms & Conditions from Video */}
                  <div className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm space-y-2 text-xs">
                    <div className="font-bold text-slate-900 uppercase font-mono tracking-wider">
                      Terms and conditions:
                    </div>
                    <ul className="space-y-1 text-slate-600 list-disc list-inside">
                      <li>The above special Prices are discounted</li>
                      <li>GST Extra as applicable.</li>
                      <li>Payment 100% through bank transfer along with the order after confirmation.</li>
                      <li>Delivery: Free Delivery to Bangalore urban and industrial area.</li>
                      <li>Warranty: 12 months from the date of sale against any manufacturing defects.</li>
                    </ul>
                    <div className="font-semibold text-slate-900 pt-2">
                      We look forward to receive your valued order.
                    </div>
                    <div className="font-mono text-slate-700 pt-1 flex flex-wrap items-center gap-6">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                        info@siddhikabel.com
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-600" />
                        080 – 2672 0440
                      </span>
                    </div>
                  </div>

                  {/* Order Request Form */}
                  <form onSubmit={handleSubmitOrder} className="pt-4 border-t border-blue-100 space-y-4">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Send Requirement for Selected Items ({selectedCount} Selected)</span>
                      {selectedCount === 0 && (
                        <span className="text-blue-600 text-[11px] font-normal">
                          Please select at least 1 item above
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Company / Name *"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="px-3.5 py-2.5 bg-white border border-blue-100 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Official Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3.5 py-2.5 bg-white border border-blue-100 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile / Phone *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="px-3.5 py-2.5 bg-white border border-blue-100 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 focus:bg-white text-xs transition-all"
                      />
                    </div>

                    <div className="flex items-center justify-end pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={selectedCount === 0}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-red-800 disabled:opacity-40 transition-all shadow-md cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Order Requirement</span>
                      </motion.button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};