"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapPhotoParallax(initialRotate = 0, direction = "left") {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const finalRotate = initialRotate;
    const startRotate = initialRotate + (direction === "left" ? -8 : 8);

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: direction === "left" ? -80 : 80,
        rotate: startRotate,
      },
      {
        opacity: 1,
        x: 0,
        rotate: finalRotate,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );

    // PARALLAX ORIZZONTALE
    gsap.to(ref.current, {
      x: direction === "left" ? -30 : 30,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }, []);

  return ref;
}
