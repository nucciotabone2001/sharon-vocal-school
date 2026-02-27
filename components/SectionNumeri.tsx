"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionNumeri() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".stat-number")
    );
    els.forEach((el, i) => {
      if ((el.dataset as any).countInit) return;
      (el.dataset as any).countInit = "1";

      const targetAttr = el.dataset.target;
      const target = targetAttr
        ? parseInt(targetAttr, 10)
        : parseInt((el.textContent || "").replace(/\D/g, ""), 10) || 0;

      if (reduce) {
        el.textContent = target > 0 ? `+${target}` : `${target}`;
        return;
      }

      const obj = { value: 0 };
      const duration = 1.2;

      gsap.fromTo(
        obj,
        { value: 0 },
        {
          value: target,
          duration,
          ease: "power2.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            const v = Math.floor(obj.value);
            el.textContent = target >= 0 ? `+${v}` : `${v}`;
          },
          onComplete: () => {
            el.textContent = target >= 0 ? `+${target}` : `${target}`;
          },
        }
      );
    });
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        padding: "4rem 8vw",
      }}
    >
      <div
        className="numeri-grid fade-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3rem",
          textAlign: "center",
        }}
      >
        {/* 1 */}
        <div className="numero-card">
          <div className="stat-number" data-target="7">
            +7
          </div>
          <div className="numero-label">anni di insegnamento</div>
        </div>

        {/* 2 */}
        <div className="numero-card">
          <div className="stat-number" data-target="130">
            +130
          </div>
          <div className="numero-label">studenti formati</div>
        </div>

        {/* 3 */}
        <div className="numero-card">
          <div className="stat-number" data-target="26">
            +26
          </div>
          <div className="numero-label">studenti attivi ogni mese</div>
        </div>

        {/* 4 */}
        <div className="numero-card">
          <div className="stat-number" data-target="150">
            +750
          </div>
          <div className="numero-label">lezioni all'anno</div>
        </div>
      </div>

      <style>{`
        /* DESKTOP */
        .stat-number {
          font-size: 4rem;
          font-weight: 700;
          color: #C9A86A;
          margin-bottom: 0.5rem;
        }

        .numero-label {
          font-size: 1rem;
          opacity: 0.8;
        }

        /* MOBILE */
        @media (max-width: 800px) {
          .numeri-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .stat-number {
            font-size: 3.4rem !important;
          }

          .numero-card {
            padding: 1rem 0;
          }

          .numero-label {
            font-size: 1.1rem !important;
            max-width: 20rem;
            margin: 0 auto;
            line-height: 1.4;
          }
        }
      `}</style>
    </section>
  );
}
