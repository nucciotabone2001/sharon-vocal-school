"use client";

import { useGsapPhotoParallax } from "@/hooks/useGsapPhotoParallax";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionPhotos() {
  const photos = [
    "/elements/foto_.jpg",
    "/elements/foto_4.jpg",
    "/elements/foto_2.jpg",
  ];

  const ref1 = useGsapPhotoParallax(-4, "left");
  const ref2 = useGsapPhotoParallax(3, "right");
  const ref3 = useGsapPhotoParallax(5, "left");

  // ANIMAZIONI MOBILE
  useEffect(() => {
    if (window.innerWidth > 700) return;

    gsap.utils.toArray<HTMLElement>(".m-slide-right").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".m-slide-right").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 8vw 6rem",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        overflow: "visible",
      }}
    >
      <div className="photos-wrapper">
        <img ref={ref1} src={photos[0]} className="photo photo-a parallax m-slide-right" />
        <img ref={ref2} src={photos[1]} className="photo photo-b parallax m-slide-left" />
        <img ref={ref3} src={photos[2]} className="photo photo-c parallax m-slide-right" />
      </div>

      <style>{`
        /* DESKTOP COLLAGE */
        .photos-wrapper {
          position: relative;
          width: 100%;
          height: 600px;
        }

        .photo {
          position: absolute;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          object-fit: cover;
          will-change: transform;
        }

        .photo-a {
          top: -6%;
          left: 12%;
          width: 30%;
          transform: rotate(-4deg);
        }

        .photo-b {
          top: 20%;
          right: 12%;
          width: 28%;
          transform: rotate(3deg);
        }

        .photo-c {
          bottom: -2%;
          left: 40%;
          width: 26%;
          transform: rotate(5deg);
        }

        /* ULTRA-WIDE FIX */
        @media (min-width: 1600px) {
          .photos-wrapper {
            height: 750px;
          }
          .photo {
            max-width: 420px;
          }
        }

        /* MOBILE VERSIONE DRITTA + SLIDE-IN */
        @media (max-width: 700px) {
          .photos-wrapper {
            display: flex;
            flex-direction: column;
            gap: 3.5rem;
            height: auto;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .photo {
            position: relative !important;
            width: 100% !important;
            height: auto;
            transform: none !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            margin: 0 auto;
            max-height: 520px;
            object-fit: cover;
            opacity: 0; /* per animazione */
          }

          .photo-a, .photo-b, .photo-c {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
