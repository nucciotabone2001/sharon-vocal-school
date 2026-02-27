"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

const pacchettiAdulti = [
  { title: "Lezione singola ", desc: "Per iniziare o lavorare su un aspetto specifico." },
  { title: "Pacchetto mensile", desc: "Un percorso costante per sviluppare tecnica, controllo e sicurezza." },
  { title: "Pacchetto semestrale", desc: "Crescita strutturata e progressiva nel tempo." },
  { title: "Pacchetto annuale", desc: "Il percorso completo per trasformare la tua voce." },
];

const pacchettiBambini = [
  { title: "Pacchetto mensile ", desc: "Lezioni pensate per bambini sotto i 10 anni, con approccio ludico e musicale." },
  { title: "Pacchetto semestrale ", desc: "Percorso educativo che sviluppa musicalità, ritmo e fiducia." },
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
        Adulti — 60 minuti
      </h3>

      {/* SLIDER MOBILE + GRID DESKTOP */}
      <div className="pacchetti-container fade-in">
        {pacchettiAdulti.map((p) => (
          <article className="pacchetto-card fade-in" key={p.title}>
            <h4 style={{ fontSize: "1.2rem", marginBottom: "0.8rem" }}>{p.title}</h4>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{p.desc}</p>
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
            <h4 style={{ fontSize: "1.2rem", marginBottom: "0.8rem" }}>{p.title}</h4>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>{p.desc}</p>
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
