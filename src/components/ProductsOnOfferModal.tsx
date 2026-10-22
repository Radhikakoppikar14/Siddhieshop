import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  CheckCircle2,
  Download,
  Send,
  Phone,
  Mail,
  ShoppingCart,
  Printer,
  Sparkles,
  Tag,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_ON_OFFER_DATA, SpecialOfferItem } from '../data/siddhiContent';

interface ProductsOnOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsOnOfferModal: React.FC<ProductsOnOfferModalProps> = ({ isOpen, onClose }) => {
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
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Home | Products | Special Discount Offer
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <span>PRODUCTS ON OFFER — SPECIAL DISCOUNTED RATES</span>
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/80 rounded-xl transition-colors cursor-pointer"
                aria-label="Close offer modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
              {orderSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 max-w-md mx-auto"
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
                  <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200/80 space-y-2">
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
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 focus:bg-white transition-all text-xs"
                      />
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={selectAll}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] transition-colors"
                      >
                        Select All
                      </button>
                      <button
                        type="button"
                        onClick={clearAll}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] transition-colors"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-[11px] transition-colors"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print</span>
                      </button>
                    </div>
                  </div>

                  {/* Exact Table from Video */}
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100/80 text-slate-700 uppercase font-mono text-[11px] border-b border-slate-200">
                          <tr>
                            <th className="py-3 px-3 text-center">Select</th>
                            <th className="py-3 px-3 font-semibold">Sl. No</th>
                            <th className="py-3 px-3 font-semibold">Part No</th>
                            <th className="py-3 px-4 font-semibold">Description</th>
                            <th className="py-3 px-3 font-semibold text-center">Qty</th>
                            <th className="py-3 px-4 font-semibold text-right">Price (+GST Extra)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredItems.map((item) => {
                            const isSelected = Boolean(selectedItems[item.partNo]);
                            return (
                              <tr
                                key={item.partNo}
                                onClick={() => toggleSelect(item.partNo)}
                                className={`cursor-pointer transition-colors ${
                                  isSelected ? 'bg-red-50/60 hover:bg-red-50' : 'hover:bg-slate-50'
                                }`}
                              >
                                <td className="py-3 px-3 text-center">
                                  <div className="flex items-center justify-center">
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => toggleSelect(item.partNo)}
                                      className="rounded border-slate-300 text-red-700 focus:ring-red-700 h-4 w-4"
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
                                <td className="py-3 px-4 text-right font-mono font-bold text-red-700 tabular-nums">
                                  ₹{item.price.toLocaleString('en-IN')}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Real-time Order Summary Bar */}
                  <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-red-600 rounded text-xs font-bold text-white">
                        {selectedCount} ITEMS SELECTED
                      </span>
                      <span className="text-xs text-slate-300">
                        Total Base Value (excl. GST):
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-amber-400">
                      ₹{totalEstimatedPrice.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Exact Terms & Conditions from Video */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
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
                        <Mail className="w-3.5 h-3.5 text-red-700" />
                        info@siddhikabel.com
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-red-700" />
                        080 – 2672 0440
                      </span>
                    </div>
                  </div>

                  {/* Order Request Form */}
                  <form onSubmit={handleSubmitOrder} className="pt-3 border-t border-slate-200 space-y-4">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Send Requirement for Selected Items ({selectedCount} Selected)</span>
                      {selectedCount === 0 && (
                        <span className="text-red-600 text-[11px] font-normal">
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
                        className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 focus:bg-white text-xs transition-all"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Official Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 focus:bg-white text-xs transition-all"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile / Phone *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 focus:bg-white text-xs transition-all"
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
