"use client";

import { useGsapPhotoParallax } from "@/hooks/useGsapPhotoParallax";

export default function SectionPhotos() {
  const photos = [
    "/elements/foto_.jpg",
    "/elements/foto_4.jpg",
    "/elements/foto_2.jpg",
  ];

  const ref1 = useGsapPhotoParallax(-4, "left");
  const ref2 = useGsapPhotoParallax(3, "right");
  const ref3 = useGsapPhotoParallax(5, "left");

  return (
    <section
      style={{
        width: "100%",
        padding: "6rem 8vw 6rem", // ridotto leggermente il padding-top rispetto a prima
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
      }}
    >
      <div className="photos-wrapper">
        <img ref={ref1} src={photos[0]} className="photo photo-a parallax" />
        <img ref={ref2} src={photos[1]} className="photo photo-b parallax" />
        <img ref={ref3} src={photos[2]} className="photo photo-c parallax" />
      </div>

      <style>{`
        /* DESKTOP (collage originale) */
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
          top: -8%;
          left: 10%;
          width: 32%;
          transform: rotate(-4deg);
        }

        .photo-b {
          top: 18%;
          right: 10%;
          width: 30%;
          transform: rotate(3deg);
        }

        .photo-c {
          bottom: 0%;
          left: 38%;
          width: 28%;
          transform: rotate(5deg);
        }

        /* MOBILE: layout verticale e reset completo delle posizioni assolute */
        @media (max-width: 700px) {
          .photos-wrapper {
            display: flex;
            flex-direction: column;
            gap: 3.5rem; /* maggiore spazio tra le immagini */
            height: auto;
            padding-top: 2.5rem; /* spazio extra per evitare sovrapposizioni con la sezione sopra */
            padding-bottom: 2.5rem; /* spazio extra sotto */
            box-sizing: border-box;
          }

          /* NOTE: forziamo il comportamento "in-flow" delle immagini su mobile e annulliamo tutte le posizioni assolute e trasformazioni */
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
            max-height: 520px; /* limita l'altezza per evitare immagini troppo grandi */
            object-fit: cover;
          }

          /* assicurarsi che non rimangano offset specifici */
          .photo-a, .photo-b, .photo-c {
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
            width: 100% !important;
          }

          /* centratura visiva per ogni foto all'interno del column layout */
          .photo-a { align-self: center; }
          .photo-b { align-self: center; }
          .photo-c { align-self: center; }
        }
      `}</style>
    </section>
  );
}
