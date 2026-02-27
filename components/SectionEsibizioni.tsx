"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function SectionEsibizioni() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        padding: "6rem 8vw 8rem",
      }}
    >
      {/* TITOLO */}
      <div className="perf-fade title-block">
        <div className="title-bar"></div>
        <h2>
          “Qui non impari solo a cantare. Qui impari a esibirti.”
        </h2>
      </div>

      {/* COVERFLOW SLIDER */}
      <div className="perf-fade" style={{ marginBottom: "3rem" }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="esibizioni-swiper"
        >
          {[
            "/elements/students1.jpg",
            "/elements/students2.jpg",
            "/elements/students4.jpg",
            "/elements/students5.jpg",
            "/elements/students6.jpeg",
            "/elements/students3.jpg",
            "/elements/students7.jpeg",
            "/elements/students8.jpg",
          ].map((src, i) => (
            <SwiperSlide
              key={i}
              className="esibizioni-slide"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "1.2rem",
              }}
            />
          ))}
        </Swiper>
      </div>

      {/* TESTO */}
      <div className="perf-fade" style={{ maxWidth: "40rem" }}>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          Ogni anno la Sharon Tabone Vocal School organizza esibizioni dal vivo
          in locali e teatri di Milano, offrendo ai nostri studenti la
          possibilità di vivere l’esperienza più autentica e formativa per un
          cantante: il palco.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          Le performance sono parte integrante del nostro metodo. Servono a:
        </p>

        <ul
          className="section-bullets"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
          }}
        >
          <li>mostrare i progressi reali del percorso</li>
          <li>imparare a gestire emozione, pubblico e presenza scenica</li>
          <li>trasformare la tecnica in espressività</li>
          <li>crescere come performer, non solo come studenti</li>
        </ul>

        <p style={{ fontSize: "1.5rem", lineHeight: 1.6 }}>
          È un approccio che fa la differenza tra
          chi studia canto e chi diventa un artista.
        </p>
      </div>

      <style>{`
        /* DESKTOP */
        .esibizioni-slide {
          width: 60%;
          max-width: 420px;
          aspect-ratio: 16/9;
        }

        /* MOBILE */
        @media (max-width: 700px) {
          .esibizioni-slide {
            width: 85% !important;
            max-width: none !important;
            aspect-ratio: 4/5 !important; /* più verticale, più grande */
          }

          .esibizioni-swiper {
            padding-top: 10px !important;
            padding-bottom: 30px !important;
          }

          h2 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
