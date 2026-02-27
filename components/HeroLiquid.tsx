"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import Link from "next/link";

export default function HeroLiquid() {
  const titleRef = useGsapFadeIn(0);
  const subtitleRef = useGsapFadeIn(0.3);
  const buttonRef = useGsapFadeIn(0.4);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0A0A0A",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 8vw",
        overflow: "hidden",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,

        }}
      >
        <source src="/elements/sfondo.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75))",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "55rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* TITOLI */}
        <div ref={titleRef} style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontFamily: "sloop-script-one",
              fontSize: "clamp(4rem, 7vw, 8rem)",
              fontStyle: "normal",

              margin: 0,
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            Sharon Tabone
          </h1>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              marginTop: "-0,5rem",
              marginBottom: "4rem",
              letterSpacing: "0.35em",
              fontWeight: 300,
              opacity: 0.9,
            }}
          >
            VOCAL SCHOOL
          </h2>
        </div>

        {/* SOTTOTITOLO */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: "clamp(1.2rem, 1.7vw, 1.7rem)",
            maxWidth: "36rem",
            margin: "0 auto 2.2rem",
            opacity: 0.9,
            lineHeight: 1.4,
          }}
        >
          Dai voce alla tua identità.
        </p>

        {/* CTA */}
        <div ref={buttonRef} style={{ display: "flex", justifyContent: "center" }}>
          <Link
            href="/prenota"
            style={{
              padding: "1rem 2.6rem",
              borderRadius: "999px",
              border: "1px solid #C9A86A",
              background: "#C9A86A",
              color: "#0A0A0A",
              fontSize: "0.95rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontWeight: 600,
              transition: "all 0.3s ease",
              display: "inline-block",

            }}
          >
            Prenota la tua lezione gratuita
          </Link>
        </div>
      </div>

      <style>{`


        a:hover {
          background: transparent !important;
          color: #C9A86A !important;
        }
      `}</style>
    </section>
  );
}
