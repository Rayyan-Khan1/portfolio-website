import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(sectionIds, progressRef) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const scrollY   = window.scrollY;
      const viewMid   = window.innerHeight / 2;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Progress: starts filling from the very first scroll, ends at bottom of page
      const raw = docHeight > 0 ? scrollY / docHeight : 0;
      if (progressRef?.current) {
        progressRef.current.style.width = `${Math.min(1, Math.max(0, raw)) * 100}%`;
      }

      // Active section
      let currentActive = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        const top = sections[i].getBoundingClientRect().top + scrollY;
        if (scrollY >= top - viewMid) {
          currentActive = sectionIds[i];
          break;
        }
      }
      setActive(currentActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, progressRef]);

  return { active };
}
