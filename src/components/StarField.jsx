import { useMemo } from 'react';
import './StarField.css';

const STAR_COUNT = 110;

export default function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id:           i,
      top:          `${Math.random() * 110}%`,
      left:         `${Math.random() * 100}%`,
      size:         0.8 + Math.random() * 1.8,
      opacity:      0.15 + Math.random() * 0.5,
      twinkleDur:   2 + Math.random() * 4,
      twinkleDelay: -(Math.random() * 6),
      driftDur:     10 + Math.random() * 14,
      driftDelay:   -(Math.random() * 14),
    }));
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map(star => (
        <span
          key={star.id}
          className="starfield__star"
          style={{
            top:    star.top,
            left:   star.left,
            width:  `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            '--twinkle-dur':   `${star.twinkleDur}s`,
            '--twinkle-delay': `${star.twinkleDelay}s`,
            '--drift-dur':     `${star.driftDur}s`,
            '--drift-delay':   `${star.driftDelay}s`,
          }}
        />
      ))}
    </div>
  );
}
