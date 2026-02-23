"use client";

import HeroParticlesCanvas from "./HeroParticlesCanvas";
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';
import Link from 'next/link';

export default function HeroLiquid() {
  const titleRef = useGsapFadeIn(0);
  const subtitleRef = useGsapFadeIn(0.3);
  const buttonRef = useGsapFadeIn(0.4);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0A0A0A',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 8vw',
        overflow: 'hidden',
        // CSS variables to make sizes easily overridable from outside
        ['--hero-title-size' as any]: 'clamp(3rem, 8vw, 10rem)',
      }}
    >
      {/* PARTICELLE IN BACKGROUND */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <HeroParticlesCanvas />
      </div>

      {/* OVERLAY MORBIDO */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* CONTENUTO */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '50rem', width: '100%', textAlign: 'center' }}>
        {/* logo al posto del titolo */}
        <div ref={titleRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h1 className="hero-title" aria-label="Sharon Tabone">Sharon Tabone <br /> Vocal School</h1>

        </div>

        <p
          ref={subtitleRef}
          className="subtitle-montserrat"
          style={{
            fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
            maxWidth: '36rem',
            margin: '0 auto 2.2rem',
            opacity: 0.9,
            lineHeight: 1.4,

          }}
        >
          Dai voce alla tua identità.
        </p>

        <div ref={buttonRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <Link className="hero-button"
            href="/prenota"
            style={{
              padding: '1rem 2.6rem',
              borderRadius: '999px',
              border: '1px solid #C9A86A',
              background: '#C9A86A',
              color: '#0A0A0A',
              fontSize: '0.95rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
          >
            Prenota la tua lezione gratuita
          </Link>
        </div>
      </div>
      <style>{`
        /* Import Cormorant Garamond (substitute for Adobe Light Italic). If you want the Adobe font, provide the file or Adobe embed info. */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400;0,400&display=swap');

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: var(--hero-title-size, clamp(2.2rem, 6.5vw, 4.5rem));
          margin: 0;
          line-height: 1.02;
          letter-spacing: 0.0009em; /* ridotto leggermente su richiesta */
        }

        .hero-subtitle-logo {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: var(--hero-subtitle-size, clamp(1rem, 2.5vw, 1.5rem));
          margin-top: 0.15rem; /* meno spazio tra titolo e sottotitolo */
          opacity: 0.95;
        }

        @media (max-width: 900px) {
          section {
            padding: 0 6vw !important;
            /* scale down variables on medium screens */
            --hero-title-size: clamp(2.4rem, 8.5vw, 3.6rem);
            --hero-subtitle-size: clamp(1.15rem, 3.2vw, 1.6rem);
          }

          .hero-button {
            padding: 0.9rem 1.8rem !important;
            font-size: 0.8rem !important;
            letter-spacing: 0.1em !important;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 0 5vw !important;
            /* scale down variables on small screens */
            --hero-title-size: clamp(1.6rem, 9.5vw, 2.8rem);
            --hero-subtitle-size: clamp(0.95rem, 4.5vw, 1.05rem);
          }

          .hero-button {
            padding: 0.8rem 1.6rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>

    </section>
  );
}
