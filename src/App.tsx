/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, MotionConfig, useScroll } from 'motion/react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { TopHeader } from './components/TopHeader';
import { ProjectsView } from './components/ProjectsView';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { IndustriesPage } from './components/IndustriesPage';
import { ContactPage } from './components/ContactPage';
import { RfqPage } from './components/RfqPage';
import { ContactPopup } from './components/ContactPopup';
import { ProductsOnOfferModal } from './components/ProductsOnOfferModal';
import { SiddhiFooter } from './components/SiddhiFooter';
import { LiveEffects } from './components/LiveEffects';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [offerModalOpen, setOfferModalOpen] = useState<boolean>(false);
  const [contactPopupService, setContactPopupService] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const shellRef = useRef<HTMLDivElement>(null);
  const closeContactPopup = useCallback(() => setContactPopupService(null), []);
  const openContactPage = useCallback(() => {
    setContactPopupService(null);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  useEffect(() => {
    const shell = shellRef.current;
    const pointerEffectsSupported = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    ).matches;
    if (!shell || !pointerEffectsSupported) return;

    let pointerX = 0;
    let pointerY = 0;
    let animationFrame = 0;
    let activeCard: HTMLElement | null = null;

    const updatePointerEffects = () => {
      shell.style.setProperty('--pointer-x', `${pointerX}px`);
      shell.style.setProperty('--pointer-y', `${pointerY}px`);

      const target = document.elementFromPoint(pointerX, pointerY);
      const nextCard = target instanceof Element
        ? target.closest<HTMLElement>('[data-live-card]')
        : null;

      if (nextCard !== activeCard) {
        activeCard?.classList.remove('is-live-hover');
        activeCard = nextCard;
        activeCard?.classList.add('is-live-hover');
      }

      if (activeCard) {
        const bounds = activeCard.getBoundingClientRect();
        activeCard.style.setProperty('--card-pointer-x', `${pointerX - bounds.left}px`);
        activeCard.style.setProperty('--card-pointer-y', `${pointerY - bounds.top}px`);
      }

      shell.classList.add('has-live-pointer');
      animationFrame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updatePointerEffects);
    };

    const clearPointerEffects = (event: PointerEvent) => {
      if (event.relatedTarget) return;
      shell.classList.remove('has-live-pointer');
      activeCard?.classList.remove('is-live-hover');
      activeCard = null;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', clearPointerEffects);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', clearPointerEffects);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      shell.classList.remove('has-live-pointer');
      activeCard?.classList.remove('is-live-hover');
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    const sectionObserver = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-page-reveal-visible', 'true');
          } else if (entry.intersectionRatio === 0) {
            entry.target.removeAttribute('data-page-reveal-visible');
          }
        });
      }, { threshold: [0, 0.05], rootMargin: '0px 0px -8% 0px' })
      : null;
    const observedSections = new Set<HTMLElement>();

    const revealSections = (sections: NodeListOf<HTMLElement>) => {
      const currentSections = new Set(sections);
      observedSections.forEach((section) => {
        if (currentSections.has(section)) return;
        sectionObserver?.unobserve(section);
        observedSections.delete(section);
      });

      sections.forEach((section) => {
        if (section.hasAttribute('data-page-reveal')) return;
        section.setAttribute('data-page-reveal', '');
        if (!sectionObserver) {
          section.setAttribute('data-page-reveal-visible', 'true');
          return;
        }
        sectionObserver.observe(section);
        observedSections.add(section);
      });
    };

    revealSections(main.querySelectorAll<HTMLElement>('section'));
    const pageObserver = new MutationObserver(() => {
      revealSections(main.querySelectorAll<HTMLElement>('section'));
    });
    pageObserver.observe(main, { childList: true, subtree: true });

    return () => {
      pageObserver.disconnect();
      sectionObserver?.disconnect();
    };
  }, []);

  /* ===== Global live-effects engine: staggered reveals, image reveals, auto cards, button ripple ===== */
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => { timers.delete(id); fn(); }, ms);
      timers.add(id);
    };

    const doneTimers = new WeakMap<Element, number>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const pending = doneTimers.get(el);
        if (pending) window.clearTimeout(pending);
        if (entry.isIntersecting) {
          el.setAttribute('data-fx-in', 'true');
          const delay = parseFloat(el.style.getPropertyValue('--fx-delay')) || 0;
          doneTimers.set(el, window.setTimeout(() => el.setAttribute('data-fx-done', 'true'), delay + 1100));
        } else if (entry.intersectionRatio === 0) {
          // left the screen: reset so it animates again next time it appears
          el.removeAttribute('data-fx-in');
          el.removeAttribute('data-fx-done');
        }
      });
    }, { threshold: [0, 0.1], rootMargin: '0px 0px -5% 0px' });

    const hasOwnMotion = (el: HTMLElement) =>
      /opacity|transform|translate|scale|filter/.test(el.getAttribute('style') || '');

    const reveal = (el: HTMLElement, kind: string, delay = 0) => {
      if (seen.has(el)) return;
      seen.add(el);
      if (hasOwnMotion(el)) return; // already animated by motion/react
      el.setAttribute('data-fx', kind);
      el.style.setProperty('--fx-delay', `${delay}ms`);
      io.observe(el);
    };

    const NON_CARD = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'SPAN', 'LABEL', 'IMG', 'svg']);

    const scan = () => {
      // 1) Auto-detect cards -> hover lift, glint, spotlight
      shell.querySelectorAll<HTMLElement>(
        'main [class*="rounded-"][class*="border"], main [class*="rounded-"][class*="shadow"]',
      ).forEach((el) => {
        if (el.hasAttribute('data-live-card') || NON_CARD.has(el.tagName)) return;
        if (el.parentElement?.closest('[data-live-card]')) return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 200 || rect.height < 110) return;
        const pos = getComputedStyle(el).position;
        if (pos === 'absolute' || pos === 'fixed' || pos === 'sticky') return;
        el.setAttribute('data-live-card', '');
      });

      // 2) Grid children: staggered entrance (left/right for 2-col splits)
      shell.querySelectorAll<HTMLElement>('main .grid, footer .grid').forEach((grid) => {
        const kids = Array.from(grid.children) as HTMLElement[];
        kids.forEach((kid, i) => {
          const kind = kids.length === 2 ? (i === 0 ? 'left' : 'right') : 'up';
          reveal(kid, kind, (i % 4) * 90);
        });
      });

      // 3) List items
      shell.querySelectorAll<HTMLElement>('main section ul').forEach((ul) => {
        const items = Array.from(ul.children) as HTMLElement[];
        if (items.length > 12) return;
        items.forEach((li, i) => {
          if (li.closest('[data-fx]')) return;
          reveal(li, 'left', i * 70);
        });
      });

      // 4) Standalone cards
      shell.querySelectorAll<HTMLElement>('main [data-live-card]').forEach((card) => {
        if (card.closest('[data-fx]')) return;
        reveal(card, 'up', 0);
      });

      // 5) Headings and the paragraph that follows
      shell.querySelectorAll<HTMLElement>('main h1, main h2, main h3').forEach((h) => {
        if (h.closest('[data-fx]')) return;
        reveal(h, 'up', 0);
        const next = h.nextElementSibling;
        if (next instanceof HTMLElement && next.tagName === 'P') reveal(next, 'up', 120);
      });

      // 6) Images
      shell.querySelectorAll<HTMLElement>('main img, footer img').forEach((img) => reveal(img, 'img', 0));
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        scan();
        later(scan, 700); // second pass once layout has settled
        later(() => {
          shell.querySelectorAll<HTMLElement>('[data-fx]:not([data-fx-in])').forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.bottom > 0 && r.top < window.innerHeight && r.width > 0) {
              el.setAttribute('data-fx-in', 'true');
              later(() => el.setAttribute('data-fx-done', 'true'), 1200);
            }
          });
        }, 3500);
      });
    };

    scan();
    const mo = new MutationObserver(schedule);
    mo.observe(shell, { childList: true, subtree: true });

    // Button / link ripple feedback (no layout impact)
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const btn = target.closest<HTMLElement>('button, a[href], [role="button"]');
      if (!btn || (btn as HTMLButtonElement).disabled || btn.closest('[data-no-ripple]')) return;
      if (typeof btn.className === 'string' && btn.className.includes('bg-gradient')) return;
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--rx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--ry', `${e.clientY - r.top}px`);
      btn.style.setProperty('--rmax', `${Math.hypot(r.width, r.height)}px`);
      btn.classList.remove('fx-rippling');
      void btn.offsetWidth;
      btn.classList.add('fx-rippling');
      later(() => btn.classList.remove('fx-rippling'), 700);
    };
    shell.addEventListener('pointerdown', onPointerDown, { passive: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      shell.removeEventListener('pointerdown', onPointerDown);
      if (frame) window.cancelAnimationFrame(frame);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrand = (brandId: string) => {
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
    <div ref={shellRef} className="site-shell min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#F43F5E] selection:text-white font-sans antialiased">
      <motion.div
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#F43F5E]"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <LiveEffects />
      {/* Top Notification Strip & Navigation Bar */}
      <TopHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenOffer={() => setOfferModalOpen(true)}
      />

      <main className="flex-1">
        <AnimatePresence initial={false}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
        {activeTab === 'home' && (
          <HomePage
            onSelectBrand={handleSelectBrand}
            onContactClick={(serviceName) => setContactPopupService(serviceName)}
          />
        )}

        {activeTab === 'about' && (
          <div>
            {/* Dedicated About Us Page (Video timestamp 00:15 - 00:18) */}
            <AboutPage />
            {/* Grounding Projects Showcase */}
            <ProjectsView />
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <ProductsPage onOpenOffer={() => setOfferModalOpen(true)} />
          </div>
        )}

        {activeTab === 'industries' && (
          <div>
            <IndustriesPage
              onContactClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'offer' && (
          <div>
            <RfqPage
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onQuote={(label) => setContactPopupService(label)}
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <ContactPage />
          </div>
        )}
        </motion.div>
        </AnimatePresence>
      </main>

      <SiddhiFooter
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* PRODUCTS ON OFFER: Special Discounted Rates Table Modal */}
      <ProductsOnOfferModal
        isOpen={offerModalOpen}
        onClose={() => setOfferModalOpen(false)}
      />

      <ContactPopup
        serviceName={contactPopupService}
        onClose={closeContactPopup}
        onOpenContactPage={openContactPage}
      />

      {/* Interactive Floating Quick Actions Dock */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/70 bg-white/75 p-1.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
          {/* Quick Call Button */}
          <motion.a
            href="tel:09620000947"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123D73] text-white shadow-sm transition-colors hover:bg-slate-900"
            aria-label="Call Siddhi Kabel: 096200 00947"
            title="Call Siddhi Kabel: 096200 00947"
          >
            <Phone className="w-3.5 h-3.5 text-sky-200" />
          </motion.a>

          {/* Scroll to Top */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                type="button"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#F43F5E] text-slate-700 hover:text-blue-600 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
    </MotionConfig>
  );
}