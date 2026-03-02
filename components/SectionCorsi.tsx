"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

const pacchettiAdulti = [
  {
    title: "Lezione singola",
    desc: [
      "1 lezione individuale da 60 minuti.",
      "Perfetta per provare prima di iniziare un percorso."
    ]
  },
  {
    title: "Pacchetto mensile",
    desc: [
      "4 lezioni individuali da 60 minuti.",
      "Validità: 1 mese dalla data di acquisto.",
      "Ottimo per chi vuole costanza senza impegno lungo."
    ]
  },
  {
    title: "Pacchetto semestrale",
    desc: [
      "24 lezioni individuali da 60 minuti.",
      "Validità: 6 mesi dalla data di acquisto.",
      "Un percorso che assicura continuità, progressione costante e risultati tangibili."
    ]
  },
  {
    title: "Pacchetto annuale",
    desc: [
      "40 lezioni individuali da 60 minuti.",
      "Validità: 10 mesi.",
      "Garantisce miglioramento esponenziale, crescita strutturata e regolare."
    ]
  }
];

const pacchettiBambini = [
  {
    title: "Pacchetto mensile",
    desc: [
      "4 lezioni individuali da 40 minuti.",
      "Validità: 1 mese dalla data di acquisto.",
      "Approccio ludico e musicale. Perfetto per bambini sotto i 10 anni"
    ]
  },
  {
    title: "Pacchetto semestrale",
    desc: [
      "24 lezioni individuali da 40 minuti.",
      "Validità: 6 mesi dalla data di acquisto.",
      "Percorso educativo che sviluppa musicalità, ritmo e fiducia."
    ]
  }
];


export default function SectionCorsi() {
  return (
    <section
      id="SectionCorsi"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        padding: "6rem 8vw",
      }}
    >
      {/* TITOLO */}
      <h2
        className="fade-in"
        style={{
          fontSize: "1.2rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#C9A86A",
          marginBottom: "3rem",
        }}
      >
        Percorsi di canto individuali
      </h2>

      {/* ADULTI */}
      <h3
        className="fade-in"
        style={{
          fontSize: "1.1rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#C9A86A",
          marginBottom: "1.5rem",
        }}
      >
        Ragazzi e adulti — 60 minuti
      </h3>

      {/* SLIDER MOBILE + GRID DESKTOP */}
      <div className="pacchetti-container fade-in">
        {pacchettiAdulti.map((p) => (
          <article className="pacchetto-card fade-in" key={p.title}>
            <h4 style={{ fontSize: "1.2rem", marginBottom: "0.8rem", fontWeight: 700 }}>
              {p.title}
            </h4>

            <ul
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {p.desc.map((line, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    opacity: 0.9,
                  }}
                >
                  {line}
                </li>
              ))}
            </ul>

          </article>
        ))}
      </div>

      {/* BAMBINI */}
      <h3
        className="fade-in"
        style={{
          fontSize: "1.1rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#C9A86A",
          marginBottom: "1.5rem",
        }}
      >
        Bambini sotto i 10 anni — 40 minuti
      </h3>

      <div className="pacchetti-container fade-in">
        {pacchettiBambini.map((p) => (
          <article className="pacchetto-card fade-in" key={p.title}>
            <h4 style={{ fontSize: "1.2rem", marginBottom: "0.8rem", fontWeight: 700 }}>
              {p.title}
            </h4>

            <ul
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {p.desc.map((line, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    opacity: 0.9,
                  }}
                >
                  {line}
                </li>
              ))}
            </ul>

          </article>
        ))}
      </div>

      {/* MODALITÀ */}
      <div className="fade-in" style={{ marginTop: "3rem", maxWidth: "40rem" }}>
        <h3
          className="fade-in"
          style={{
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C9A86A",
            marginBottom: "1rem",
          }}
        >
          Modalità delle lezioni
        </h3>

        <p className="fade-in" style={{ fontSize: "1.05rem", lineHeight: 1.6, opacity: 0.9 }}>
          Le lezioni possono essere svolte <strong>online</strong> oppure{" "}
          <strong>in presenza a Milano in Via Privata Rosalba Carriera 11</strong>.
          Dopo la richiesta di prova gratuita, verrai contattato per concordare
          giorno, orario e modalità preferita.
        </p>
      </div>

      {/* CSS RESPONSIVE */}
      <style>{`
        /* DESKTOP: griglia elegante */
        .pacchetti-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        /* CARD */
        .pacchetto-card {
          border-radius: 1.2rem;
          border: 1px solid #333;
          padding: 2rem;
          background: radial-gradient(circle at top left, #E8DCC811, transparent 60%), #111;
          min-width: 260px;
          transition: 0.3s ease;
        }

        /* MOBILE: slider orizzontale */
        @media (max-width: 800px) {
          .pacchetti-container {
            display: flex;
            overflow-x: auto;
            gap: 1.4rem;
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .pacchetto-card {
            flex: 0 0 80%;
            scroll-snap-align: start;
            min-width: 80%;
            max-width: 80%;
          }

          .pacchetti-container::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
