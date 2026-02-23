export default function SectionTestimonianze() {
  const testimonianze = [
    {
      quote: "Avevo già preso lezioni di canto in passato, ma senza risultati e con molta frustrazione. Con Sharon è stato diverso fin dalla prima lezione: mi sono sentita capita, guidata e finalmente a mio agio. Ha una capacità unica di rendere semplice ciò che sembra complesso e di trovare la chiave giusta per ogni allievo. In pochi mesi ho acquisito sicurezza, consapevolezza e libertà nel cantare. I progressi arrivano davvero, e arrivano divertendosi.",
      author: "Chiara",
    },
    {
      quote: "Sharon è un’insegnante straordinaria: sa ascoltare, capire e mettere davvero a proprio agio. Con lei ho superato l’insicurezza di cantare in pubblico e ho iniziato a credere nelle mie capacità. Mi ha guidata con sensibilità e professionalità, aiutandomi a raggiungere note e risultati che non pensavo possibili. È un’insegnante che fa davvero la differenza.",
      author: "Giulia",
    },
    {
      quote: "Quando ho iniziato a prendere lezioni con Sharon ero bloccato, intimidito e incapace di lasciarmi andare. Le prime lezioni sono state liberatorie: con pazienza e sensibilità mi ha aiutato a sciogliermi e a trovare fiducia nella mia voce. Il momento più difficile è stato il primo saggio: per paura mi sono tirato indietro. Ma insieme abbiamo lavorato sulle mie insicurezze e da allora non ho più evitato un’esibizione. Oggi mi rapporto al canto in modo completamente diverso. Non sono migliorato solo tecnicamente, ma anche come persona. Sharon ha fatto davvero la differenza nel mio percorso.",
      author: "Gianluca",
    },
    {
      quote: "Alla Sharon Vocal School ho imparato molto più della tecnica: ho scoperto come usare davvero la mia voce. Fin dall’inizio ho acquisito le basi — appoggio, respirazione, posizione della voce — e grazie ai saggi organizzati dalla scuola ho imparato a sentirmi sempre più a mio agio sul palco. Ogni esperienza mi ha dato sicurezza, dimestichezza e una nuova consapevolezza nel cantare.",
      author: "Alexis",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        padding: "6rem 8vw",
      }}
    >
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* FOTO CARD */}
        <div
          style={{
            width: "100%",
            aspectRatio: "3 / 4",
            backgroundImage: 'url("/elements/abbraccio.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            border: "1px solid rgba(201,168,106,0.4)",
          }}
        />

        {/* TESTIMONIANZE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonianze.map((t, index) => (
            <article
              key={index}
              style={{
                border: "1px solid #333",
                borderRadius: "1rem",
                padding: "2rem",
                backgroundColor: "#111",
              }}
            >
              <p style={{ fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                “{t.quote}”
              </p>
              <p style={{ color: "#C9A86A", fontSize: "0.95rem" }}>— {t.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}