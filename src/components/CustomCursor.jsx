import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Check if pointer is fine (desktop/mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || window.innerWidth < 768) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let glowX = -250;
    let glowY = -250;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Check if hovering over clickable/interactive elements
      const target = e.target;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.group') ||
          target.classList.contains('interactive-hover'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      // Immediate position for center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // Smooth ambient glow behind cursor
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX - 250}px, ${glowY - 250}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient background glow following cursor */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent blur-[110px] z-0 transition-opacity duration-300 will-change-transform opacity-50"
      />

      {/* Small Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 z-50 transition-opacity duration-200 will-change-transform ${
          isVisible ? 'opacity-90' : 'opacity-0'
        }`}
      />

      {/* Soft Outer Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 rounded-full border border-cyan-400/40 z-50 will-change-transform transition-all duration-200 ${
          isHovered
            ? '-ml-5 -mt-5 w-10 h-10 bg-cyan-400/10 border-cyan-300 scale-110'
            : '-ml-3.5 -mt-3.5 w-7 h-7 bg-transparent border-cyan-400/30'
        } ${isVisible ? 'opacity-80' : 'opacity-0'}`}
      />
    </>
  );
}
