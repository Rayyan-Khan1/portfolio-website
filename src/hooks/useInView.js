import { useEffect, useRef } from 'react';

const defaultOptions = { threshold: 0, rootMargin: '0px 0px -40px 0px' };

export function useInView(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, { ...defaultOptions, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useInViewChildren(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        children.forEach(child => child.classList.add('visible'));
        observer.unobserve(entry.target);
      }
    }, { ...defaultOptions, ...options });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}
