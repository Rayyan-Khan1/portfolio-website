import { useEffect, useRef, Fragment } from 'react';
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

    let startTime = null;
    let rafId;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress    = Math.min(1, (ts - startTime) / DURATION);
      const revealCount = Math.floor(progress * chars.length);

      const currentChar = chars[Math.min(revealCount, chars.length - 1)];
      if (currentChar) {
        const cRect = currentChar.getBoundingClientRect();
        const pRect = container.getBoundingClientRect();
        star.style.left    = `${cRect.left - pRect.left + cRect.width / 2}px`;
        star.style.top     = `${cRect.top  - pRect.top  + cRect.height / 2}px`;
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

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [name]);

  // Each word wrapped in white-space:nowrap so the browser only breaks between
  // whole words. Spaces use a fixed-width gap span — a space char inside
  // inline-block collapses to 0 in many browsers.
  const words = name.split(' ');
  let charIdx = 0;
  const nameChars = words.map((word, wi) => {
    const letters = word.split('').map((char) => {
      const i = charIdx++;
      return (
        <span
          key={i}
          className="tn-char"
          style={{ opacity: 0, color: i < firstSpace ? 'var(--text)' : 'var(--accent)' }}
        >
          {char}
        </span>
      );
    });
    return (
      <Fragment key={wi}>
        <span className="tn-word">{letters}</span>
        {wi < words.length - 1 && <span className="tn-word-gap" aria-hidden="true" />}
      </Fragment>
    );
  });

  return (
    <h1 className="typed-name" ref={containerRef}>
      <span className="typed-name__star" ref={starRef} aria-hidden="true" style={{ opacity: 0 }} />
      {nameChars}
    </h1>
  );
}
