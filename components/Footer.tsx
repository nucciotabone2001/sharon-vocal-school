"use client";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        padding: "4rem 8vw 3rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
      className="footer"
    >
      {/* CONTENUTO */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        {/* LOGO TIPOGRAFICO */}
        <div style={{ flex: "1 1 240px" }}>
          <h2
            style={{
              fontFamily: "sloop-script-one",
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              margin: 0,
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: "0.01em",
              color: "#FFFFFF",
              opacity: 0.9,
            }}
          >
            Sharon Tabone
          </h2>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
              marginTop: "0.2rem",
              letterSpacing: "0.35em",
              fontWeight: 300,
              opacity: 0.7,
            }}
          >
            VOCAL SCHOOL
          </h3>
        </div>


        {/* CONTATTI */}
        <div style={{ flex: "1 1 200px" }}>
          <h4
            style={{
              fontSize: "1rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C9A86A",
              marginBottom: "1rem",
            }}
          >
            Contatti
          </h4>

          <p style={{ marginBottom: "0.6rem", opacity: 0.9 }}>
            <strong>Email:</strong>
            <a
              href="mailto:sharontaboneschool@gmail.com"
              style={{ color: "#FFFFFF", textDecoration: "none", marginLeft: "0.3rem" }}
            >
              sharontaboneschool@gmail.com
            </a>
          </p>

          <p style={{ marginBottom: "0.6rem", opacity: 0.9 }}>
            <strong>Instagram:</strong>
            <a
              href="https://instagram.com/sharon.tabone"
              target="_blank"
              style={{ color: "#FFFFFF", textDecoration: "none", marginLeft: "0.3rem" }}
            >
              @sharon.tabone
            </a>
          </p>

          <p style={{ opacity: 0.9 }}>
            <strong>Indirizzo:</strong>
            <span style={{ marginLeft: "0.3rem" }}>
              Via Privata Rosalba Carriera 11, Milano
            </span>
          </p>
        </div>

        {/* LINK UTILI */}
        <div style={{ flex: "1 1 200px" }}>
          <h4
            style={{
              fontSize: "1rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C9A86A",
              marginBottom: "1rem",
            }}
          >
            Link utili
          </h4>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, opacity: 0.9 }}>
            <li style={{ marginBottom: "0.6rem" }}>
              <a href="#SectionSharon" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                Chi sono
              </a>
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <a href="#SectionInsegnanti" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                Insegnanti
              </a>
            </li>
            <li style={{ marginBottom: "0.6rem" }}>
              <a href="#SectionCorsi" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                Corsi
              </a>
            </li>
            <li>
              <a href="/prenota" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                Prenota una lezione
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
          opacity: 0.5,
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Sharon Tabone Vocal School — Tutti i diritti riservati.
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .footer {
            padding: 3rem 6vw 2.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 3rem 5vw 2rem !important;
          }

          .footer h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
