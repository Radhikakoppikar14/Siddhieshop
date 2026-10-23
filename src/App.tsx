/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, MotionConfig, useScroll } from 'motion/react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { TopHeader } from './components/TopHeader';
import { HomeHeroSlider } from './components/HomeHeroSlider';
import { HomeTransformingSection } from './components/HomeTransformingSection';
import { HomeBrandsWeDealWith } from './components/HomeBrandsWeDealWith';
import { HomeAboutSection } from './components/HomeAboutSection';
import { ServicesView } from './components/ServicesView';
import { ProjectsView } from './components/ProjectsView';
import { HomeTrustedClients } from './components/HomeTrustedClients';
import { AboutView } from './components/AboutView';
import { ProductsView } from './components/ProductsView';
import { IndustriesView } from './components/IndustriesView';
import { ContactView } from './components/ContactView';
import { ContactPopup } from './components/ContactPopup';
import { ProductsOnOfferModal } from './components/ProductsOnOfferModal';
import { SiddhiFooter } from './components/SiddhiFooter';

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
            sectionObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' })
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
      {/* Top Notification Strip & Navigation Bar */}
      <TopHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenOffer={() => setOfferModalOpen(true)}
      />

      <main className="flex-1">
        <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
        {activeTab === 'home' && (
          <>
            {/* 1. Hero Slider (Image 1 & 3): Electrical Switchgear Cabinets + Angular Text Frame */}
            <HomeHeroSlider
              onExploreProducts={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Transforming Indian Industry + Guiding Principle + Worker + Stats + Why Choose Us (Image 2 & 3) */}
            <HomeTransformingSection />

            {/* 3. Brands we deal with (Image 4): 8 Brand Cards in 2 rows of 4 with logos & arrow buttons */}
            <HomeBrandsWeDealWith onSelectBrand={handleSelectBrand} />

            {/* 4. About Siddhi Kabel (Image 4): Montage Image with Play button + Two Copy Paragraphs */}
            <HomeAboutSection />

            {/* 5. Services For Industries (Image 4 & 5): 3 Cards with Cables, Lighting, Grounding */}
            <ServicesView
              onContactClick={(serviceName) => setContactPopupService(serviceName)}
            />

            {/* 6. Recent Projects (Image 5): Centered Header + Grounding Project site photo & details */}
            <ProjectsView />

            {/* 7. Trusted Clients (Image 5): "We are committed to provide safe industrial solutions." / ACE, AMS, apicom, BEL, BEML */}
            <HomeTrustedClients />
          </>
        )}

        {activeTab === 'about' && (
          <div>
            {/* Dedicated About Us Page (Video timestamp 00:15 - 00:18) */}
            <AboutView />
            {/* Grounding Projects Showcase */}
            <ProjectsView />
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <ProductsView onOpenOffer={() => setOfferModalOpen(true)} />
          </div>
        )}

        {activeTab === 'industries' && (
          <div>
            <IndustriesView
              onContactClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <ContactView />
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
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/70 bg-white/75 p-1.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
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
        </div>
      </div>
    </div>
    </MotionConfig>
  );
}
