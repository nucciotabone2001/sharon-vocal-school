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

  const accent = "#C9A86A";

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: "1rem 6vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(0,0,0,0.45)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      {/* BRAND NAME */}
      <Link href="/" onClick={() => setMenuOpen(false)}>
        <h1
          style={{
            fontFamily: "'slopp-script-one', cursive",
            fontSize: "1.9rem",
            color: "#fff",
            margin: 0,
            letterSpacing: "0.02em",
            opacity: scrolled ? 0.9 : 1,
            transition: "0.3s ease",
          }}
        >

        </h1>
      </Link>

      {/* DESKTOP MENU */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "2.4rem",
            fontSize: "1rem",
            color: "#fff",
            letterSpacing: "0.05em",
          }}
        >
          <a href="#SectionSharon" className="nav-link">Chi sono</a>
          <a href="#SectionInsegnanti" className="nav-link">Insegnanti</a>
          <a href="#SectionCorsi" className="nav-link">Corsi</a>
          <Link href="/prenota" className="nav-link" style={{ color: accent }}>
            Prenota
          </Link>
        </div>
      )}

      {/* MOBILE BURGER */}
      {isMobile && (
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
            background: "rgba(255,255,255,0.08)",
            border: "none",
            cursor: "pointer",
          }}
        >
          {!menuOpen ? (
            <svg width="22" height="16" viewBox="0 0 20 14" fill="none">
              <rect width="20" height="2" rx="1" fill="#fff" />
              <rect y="6" width="20" height="2" rx="1" fill="#fff" />
              <rect y="12" width="20" height="2" rx="1" fill="#fff" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 18L18 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      )}

      {/* MOBILE MENU FULLSCREEN */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(12px)",
            zIndex: 60,
            display: "flex",
            flexDirection: "column",
            padding: "6rem 2rem",
            gap: "2rem",
          }}
        >
          <a href="#SectionSharon" onClick={() => setMenuOpen(false)} className="mobile-link">
            Chi sono
          </a>
          <a href="#SectionInsegnanti" onClick={() => setMenuOpen(false)} className="mobile-link">
            Insegnanti
          </a>
          <a href="#SectionCorsi" onClick={() => setMenuOpen(false)} className="mobile-link">
            Corsi
          </a>
          <Link href="/prenota" onClick={() => setMenuOpen(false)} className="mobile-link" style={{ color: accent }}>
            Prenota
          </Link>
        </div>
      )}

      <style>{`
        .nav-link {
          color: #fff;
          text-decoration: none;
          transition: 0.3s ease;
        }
        .nav-link:hover {
          color: ${accent};
        }

        .mobile-link {
          font-size: 1.6rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.05em;
          text-align: center;
        }
      `}</style>
    </nav>
  );
}
