"use client";

export default function SectionTestimonianze() {
  const testimonianze = [
    {
      quote:
        "Avevo già preso lezioni di canto in passato, ma senza risultati e con molta frustrazione. Con Sharon è stato diverso fin dalla prima lezione: mi sono sentita capita, guidata e finalmente a mio agio. Ha una capacità unica di rendere semplice ciò che sembra complesso e di trovare la chiave giusta per ogni allievo. In pochi mesi ho acquisito sicurezza, consapevolezza e libertà nel cantare. I progressi arrivano davvero, e arrivano divertendosi.",
      author: "Chiara",
    },
    {
      quote:
        "Sharon è un’insegnante straordinaria: sa ascoltare, capire e mettere davvero a proprio agio. Con lei ho superato l’insicurezza di cantare in pubblico e ho iniziato a credere nelle mie capacità. Mi ha guidata con sensibilità e professionalità, aiutandomi a raggiungere note e risultati che non pensavo possibili. È un’insegnante che fa davvero la differenza.",
      author: "Giulia",
    },
    {
      quote:
        "Quando ho iniziato a prendere lezioni con Sharon ero bloccato, intimidito e incapace di lasciarmi andare. Le prime lezioni sono state liberatorie: con pazienza e sensibilità mi ha aiutato a sciogliermi e a trovare fiducia nella mia voce. Il momento più difficile è stato il primo saggio: per paura mi sono tirato indietro. Ma insieme abbiamo lavorato sulle mie insicurezze e da allora non ho più evitato un’esibizione. Oggi mi rapporto al canto in modo completamente diverso. Non sono migliorato solo tecnicamente, ma anche come persona. Sharon ha fatto davvero la differenza nel mio percorso.",
      author: "Gianluca",
    },
    {
      quote:
        "Alla Sharon Vocal School ho imparato molto più della tecnica: ho scoperto come usare davvero la mia voce. Fin dall’inizio ho acquisito le basi — appoggio, respirazione, posizione della voce — e grazie ai saggi organizzati dalla scuola ho imparato a sentirmi sempre più a mio agio sul palco. Ogni esperienza mi ha dato sicurezza, dimestichezza e una nuova consapevolezza nel cantare.",
      author: "Alexis",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        padding: "6rem 8vw",
        color: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE FISSA */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/elements/abbraccio.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
          zIndex: 0,
        }}
      />

      {/* OVERLAY SCURO */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.20)",
          zIndex: 1,
        }}
      />

      {/* CONTENUTO */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "1.2rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C9A86A",
            marginBottom: "3rem",
          }}
        >
          Cosa dicono di noi
        </h2>

        {/* DESKTOP GRID */}
        <div className="testi-desktop">
          {testimonianze.map((t, index) => (
            <article key={index} className="testi-card">
              <p className="testi-quote">“{t.quote}”</p>
              <p className="testi-author">— {t.author}</p>
            </article>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="testi-mobile">
          {testimonianze.map((t, index) => (
            <article key={index} className="testi-card-mobile">
              <p className="testi-quote">“{t.quote}”</p>
              <p className="testi-author">— {t.author}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* DESKTOP GRID */
        .testi-desktop {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .testi-card {
          background: rgba(0,0,0,0.55);
          border: 1px solid #333;
          border-radius: 1rem;
          padding: 2rem;
          backdrop-filter: blur(4px);
        }

        .testi-quote {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .testi-author {
          color: #C9A86A;
          font-size: 0.95rem;
        }

        /* MOBILE SLIDER */
        .testi-mobile {
          display: none;
        }

        @media (max-width: 800px) {
          .testi-desktop {
            display: none;
          }

          .testi-mobile {
            display: flex;
            overflow-x: auto;
            gap: 1.4rem;
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .testi-card-mobile {
            flex: 0 0 85%;
            scroll-snap-align: start;
            background: rgba(0,0,0,0.55);
            border: 1px solid #333;
            border-radius: 1rem;
            padding: 2rem;
            backdrop-filter: blur(4px);
          }

          .testi-mobile::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
