"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapGlobal() {
  useEffect(() => {
    // FADE-UP GLOBALE
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // FADE-IN GLOBALE
    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    // PARALLAX LEGGERO
    gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
      gsap.to(el, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      });
    });

    // STAGGER AUTOMATICO (per liste)
    gsap.utils.toArray<HTMLElement>(".stagger-parent").forEach((parent) => {
      const items = parent.querySelectorAll(".stagger-item");
      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: parent,
          start: "top 85%",
        },
      });
    });
  }, []);
}
