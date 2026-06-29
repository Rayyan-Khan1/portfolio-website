import { useEffect, useRef } from 'react';
import './TypedName.css';

export default function TypedName({ name }) {
  const containerRef = useRef(null);
  const starRef      = useRef(null);
  const firstSpace   = name.indexOf(' ');

  useEffect(() => {
    const container = containerRef.current;
    const star      = starRef.current;
    if (!container || !star) return;

    const chars    = Array.from(container.querySelectorAll('.tn-char'));
    const DURATION = 1100;
    const DELAY    = 0;

    let startTime = null;
    let rafId;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress    = Math.min(1, (ts - startTime) / DURATION);
      const revealCount = Math.floor(progress * chars.length);

      // Position star at current character's location
      const currentChar = chars[Math.min(revealCount, chars.length - 1)];
      if (currentChar) {
        const cRect = currentChar.getBoundingClientRect();
        const pRect = container.getBoundingClientRect();
        star.style.left    = `${cRect.left - pRect.left + cRect.width / 2}px`;
        star.style.top     = `${cRect.top  - pRect.top  + cRect.height / 2}px`;
        // Fade in quickly at start, fade out at end
        const fadeIn  = Math.min(1, progress / 0.05);
        const fadeOut = progress > 0.95 ? 1 - (progress - 0.95) / 0.05 : 1;
        star.style.opacity = `${fadeIn * fadeOut}`;
      }

      chars.forEach((c, i) => {
        if (i < revealCount) {
          c.style.opacity   = '1';
          c.style.transform = 'translateY(0)';
        } else {
          c.style.opacity   = '0';
          c.style.transform = 'translateY(4px)';
        }
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
  }, [name]);

  return (
    <h1 className="typed-name" ref={containerRef}>
      <span className="typed-name__star" ref={starRef} aria-hidden="true" style={{ opacity: 0 }} />
      {name.split('').map((char, i) => (
        <span
          key={i}
          className="tn-char"
          style={{
            opacity: 0,
            color: i < firstSpace ? 'var(--text)' : 'var(--accent)',
          }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </h1>
  );
}
