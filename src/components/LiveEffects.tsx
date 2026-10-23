import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * Extra "live" touches that never change page content:
 *  1. Magnetic call-to-action buttons (they lean toward the cursor)
 *  2. Electric spark burst on every click
 *  3. A glowing spark riding the head of the scroll-progress bar
 */
export const LiveEffects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const sparkLeft = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  useEffect(() => {
    const canUse = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    ).matches;
    if (!canUse) return;

    // ----- magnetic buttons -----
    let magnet: HTMLElement | null = null;
    const magnetSelector =
      'button[class*="bg-[#F43F5E]"], a[class*="bg-[#F43F5E]"], button[class*="bg-red-"], a[class*="bg-red-"], button[class*="bg-[#123D73]"], a[class*="bg-[#123D73]"]';

    const releaseMagnet = () => {
      if (!magnet) return;
      const el = magnet;
      magnet = null;
      const from = el.style.translate || '0px 0px';
      el.style.translate = '';
      el.animate([{ translate: from }, { translate: '0px 0px' }], {
        duration: 450,
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      });
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target : null;

      const candidate = target?.closest<HTMLElement>(magnetSelector) ?? null;
      if (candidate !== magnet) releaseMagnet();
      if (candidate) {
        magnet = candidate;
        const r = candidate.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        candidate.style.translate = `${(dx * 10).toFixed(1)}px ${(dy * 8).toFixed(1)}px`;
      }
    };

    const onLeave = (e: PointerEvent) => {
      if (e.relatedTarget) return;
      releaseMagnet();
    };

    // ----- spark burst on click -----
    const COLORS = ['#F43F5E', '#2563A6', '#93C5FD', '#FDA4B4'];
    const onDown = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (target?.closest('input, textarea, select')) return;
      const count = 10;
      for (let i = 0; i < count; i += 1) {
        const angle = (360 / count) * i + Math.random() * 24;
        const dist = 26 + Math.random() * 30;
        const s = document.createElement('div');
        s.setAttribute('aria-hidden', 'true');
        Object.assign(s.style, {
          position: 'fixed',
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          width: '10px',
          height: '2px',
          borderRadius: '2px',
          background: COLORS[i % COLORS.length],
          boxShadow: `0 0 8px ${COLORS[i % COLORS.length]}`,
          transformOrigin: '0 50%',
          pointerEvents: 'none',
          zIndex: '9998',
        } as Partial<CSSStyleDeclaration>);
        document.body.appendChild(s);
        const anim = s.animate(
          [
            { transform: `rotate(${angle}deg) translateX(4px) scaleX(1)`, opacity: 1 },
            { transform: `rotate(${angle}deg) translateX(${dist}px) scaleX(0.2)`, opacity: 0 },
          ],
          { duration: 520 + Math.random() * 160, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
        );
        anim.onfinish = () => s.remove();
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerout', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerout', onLeave);
      releaseMagnet();
    };
  }, []);

  return (
    <>
      {/* Spark riding the scroll-progress bar */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 z-[62] h-[3px] w-16 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-white"
        style={{ left: sparkLeft, boxShadow: '0 0 14px 3px rgba(255,255,255,0.9), 0 0 24px 6px rgba(244,63,94,0.6)' }}
      />
    </>
  );
};