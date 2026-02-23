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
        padding: "6rem 8vw",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
        }}
        className="photos-wrapper"
      >
        {/* FOTO A SINISTRA IN ALTO */}
        <img
          ref={ref1}
          src={photos[0]}
          className="photo photo-a"
          style={{
            position: "absolute",
            top: "-8%",
            left: "10%",
            width: "32%",
            borderRadius: "1rem",
            transform: "rotate(-4deg)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        />

        {/* FOTO A DESTRA CENTRALE */}
        <img
          ref={ref2}
          src={photos[1]}
          className="photo photo-b"
          style={{
            position: "absolute",
            top: "18%",
            right: "10%",
            width: "30%",
            borderRadius: "1rem",
            transform: "rotate(3deg)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        />

        {/* FOTO IN BASSO A SINISTRA */}
        <img
          ref={ref3}
          src={photos[2]}
          className="photo photo-c"
          style={{
            position: "absolute",
            bottom: "0%",
            left: "38%",
            width: "28%",
            borderRadius: "1rem",
            transform: "rotate(5deg)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        />
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .photos-wrapper {
            height: 500px;
          }

          .photo {
            width: 42% !important;
          }

          .photo-a {
            top: 0%;
            left: 5%;
          }

          .photo-b {
            top: 10%;
            right: 5%;
          }

          .photo-c {
            bottom: 5%;
            left: 10%;
          }
        }

        @media (max-width: 600px) {
          .photos-wrapper {
            height: 420px;
          }

          .photo {
            width: 48% !important;
          }
        }
      `}</style>
    </section>
  );
}
