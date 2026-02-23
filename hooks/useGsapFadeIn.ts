"use client";

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGsapFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
      }
    );
  }, [delay]);

  return ref;
}
