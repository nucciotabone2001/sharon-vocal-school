"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const linkColor = scrolled ? "#111" : "#fff";
  const accent = '#C9A86A';

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: "0.8rem 6vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(255,255,255,0.3)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.2)" : "none",
        zIndex: 60,
      }}
    >
      {/* LOGO */}
      <Link href="#hero" onClick={() => setMenuOpen(false)}>
        <img
          src="/elements/logo.png"
          alt="Sharon Tabone Vocal School"
          style={{
            height: "40px",
            cursor: "pointer",
            transition: "0.3s ease",
            opacity: scrolled ? 0.9 : 1,
          }}
        />
      </Link>

      {/* DESKTOP MENU */}
      {!isMobile && (
        <div
          className="flex gap-8 text-[1rem]"
          style={{
            color: linkColor,
            fontWeight: 400,
          }}
        >
          <a href="#SectionSharon">Chi sono</a>
          <a href="#SectionInsegnanti">Insegnanti</a>
          <a href="#SectionCorsi">Corsi</a>
          <a href="/prenota">Prenota</a>
        </div>
      )}

      {/* MOBILE BURGER */}
      {isMobile && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            aria-label="Apri menu"
            onClick={() => setMenuOpen((s) => !s)}
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              background: scrolled ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
              border: "none",
              cursor: "pointer",
            }}
          >
            {/* simple hamburger / close icon */}
            {!menuOpen ? (
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2" rx="1" fill={linkColor} />
                <rect y="6" width="20" height="2" rx="1" fill={linkColor} />
                <rect y="12" width="20" height="2" rx="1" fill={linkColor} />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18" stroke={linkColor} strokeWidth="2" strokeLinecap="round" />
                <path d="M6 18L18 6" stroke={linkColor} strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* MOBILE MENU OVERLAY */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            right: 16,
            left: 16,
            zIndex: 70,
            background: "rgba(10,10,10,0.98)",
            borderRadius: 12,
            padding: "1.25rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <a href="#SectionSharon" onClick={() => setMenuOpen(false)} style={{ padding: "0.6rem 0", color: accent, fontWeight: 700, textDecoration: 'none' }}>
            Chi sono
          </a>
          <a href="#SectionInsegnanti" onClick={() => setMenuOpen(false)} style={{ padding: "0.6rem 0", color: accent, fontWeight: 700, textDecoration: 'none' }}>
            Insegnanti
          </a>
          <a href="#SectionCorsi" onClick={() => setMenuOpen(false)} style={{ padding: "0.6rem 0", color: accent, fontWeight: 700, textDecoration: 'none' }}>
            Corsi
          </a>
          <a href="/prenota" onClick={() => setMenuOpen(false)} style={{ padding: "0.6rem 0", color: accent, fontWeight: 700, textDecoration: 'none' }}>
            Prenota
          </a>
        </div>
      )}
    </nav>
  );
}
