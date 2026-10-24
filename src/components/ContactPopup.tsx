import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Mail, Phone, ShieldCheck, X } from 'lucide-react';

interface ContactPopupProps {
  serviceName: string | null;
  onClose: () => void;
  onOpenContactPage: () => void;
}

export const ContactPopup: React.FC<ContactPopupProps> = ({
  serviceName,
  onClose,
  onOpenContactPage,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!serviceName) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [serviceName, onClose]);

  const emailSubject = encodeURIComponent(`Service inquiry: ${serviceName ?? 'Siddhi Kabel'}`);

  return (
    <AnimatePresence>
      {serviceName && (
        <motion.div
          key="service-contact-popup"
          role="presentation"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-contact-title"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-slate-950/30"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden bg-[#123D73] px-6 pb-6 pt-7 text-white sm:px-8 sm:pt-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close contact popup"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative flex items-center gap-3 pr-10">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-950/30">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-200">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Siddhi Kabel Support
                  </div>
                  <h2 id="service-contact-title" className="text-xl font-extrabold tracking-tight sm:text-2xl">
                    Let’s discuss your needs
                  </h2>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-300">
                Contact our team about <span className="font-semibold text-white">{serviceName}</span>.
                We can help with product selection, availability, and pricing.
              </p>
            </div>

            <div className="space-y-3 p-5 sm:p-7">
              <a
                href="tel:09620000947"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#123D73] text-sky-200 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Call our team</span>
                  <span className="mt-0.5 block text-base font-bold text-slate-900">096200 00947</span>
                  <span className="block text-xs text-slate-500">098860 58511</span>
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </a>

              <a
                href={`mailto:info@siddhikabel.com?subject=${emailSubject}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#123D73] text-sky-200 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Email us</span>
                  <span className="mt-0.5 block truncate text-sm font-bold text-slate-900 sm:text-base">info@siddhikabel.com</span>
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </a>

              <button
                type="button"
                onClick={onOpenContactPage}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D7263D] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#D7263D]/20 transition-all hover:-translate-y-0.5 hover:bg-[#B81E32] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123D73]"
              >
                Open contact form
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};