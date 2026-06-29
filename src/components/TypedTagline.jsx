import { useEffect, useRef } from 'react';
import './TypedTagline.css';

export default function TypedTagline({ text, delay = 700 }) {
  const containerRef = useRef(null);
  const starRef      = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const star      = starRef.current;
    if (!container || !star) return;

    const chars    = Array.from(container.querySelectorAll('.tc'));
    const DURATION = 1200;
    const DELAY    = delay;

    let startTime = null;
    let rafId;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min(1, (ts - startTime) / DURATION);
      const textWidth = container.scrollWidth;

      star.style.left    = `${progress * textWidth}px`;
      star.style.opacity = progress < 0.98 ? '1' : '0';

      const reveal = Math.floor(progress * chars.length);
      chars.forEach((c, i) => {
        c.style.opacity = i < reveal ? '1' : '0';
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, DELAY);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [text]);

  return (
    <p className="typed-tagline" ref={containerRef}>
      <span className="typed-star" ref={starRef} aria-hidden="true">✦</span>
      {text.split('').map((char, i) => (
        <span key={i} className="tc" style={{ opacity: 0 }}>
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </p>
  );
}
