"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

export default function SectionInsegnanti() {
  const titleRef = useGsapFadeIn(0);

  const teacher1 = useGsapFadeIn(0.2);
  const teacher2 = useGsapFadeIn(0.35);

  return (
    <section
      id="SectionInsegnanti"
      style={{
        width: "100%",
        padding: "6rem 8vw",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
      }}
    >
      {/* TITOLO */}
      <h2 className="fade-in"
        ref={titleRef}
        style={{
          fontSize: "1.2rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#C9A86A",
          marginBottom: "3rem",
        }}
      >
        I nostri insegnanti
      </h2>

      {/* GRID INSEGNANTI - ORA SOLO 2 */}
      <div className ="fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* INSEGNANTE 1 */}
        <div className ="fade-in"
          ref={teacher1}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <img className ="fade-in"
            src="/elements/foto_sha.jpg"
            alt="Sharon Tabone"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              objectPosition: "50% 0%", // sposta l'immagine leggermente verso l'alto per evitare teste tagliate
              borderRadius: "50%",
              border: "6px solid rgba(201,168,106,0.12)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
              transition: "transform 300ms ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <h3 className ="fade-in" style={{ fontSize: "1.3rem", fontWeight: 500 }}>Sharon Tabone</h3>
          <p className ="fade-in" style={{ opacity: 0.85, margin: 0 }}>Vocal Coach • Canto Moderno</p>

          {/* spazio per una breve descrizione/bio */}
          <p className ="fade-in" style={{ opacity: 0.8, marginTop: "0.6rem", maxWidth: "40rem" }}>
            Qui puoi aggiungere qualche riga che descriva l'insegnante: background, stile di insegnamento,
            esperienze, e cosa lo rende unico. Puoi sostituire questo testo con la biografia vera.
          </p>
        </div>

        {/* INSEGNANTE 2 */}
        <div className ="fade-in"
          ref={teacher2}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <img className ="fade-in"
            src="/elements/laetitia.jpg"
            alt="Laetitia Ricotta"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              objectPosition: "50% 20%", // stessa correzione per Laetitia
              borderRadius: "50%",
              border: "6px solid rgba(201,168,106,0.12)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
              transition: "transform 300ms ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <h3 className ="fade-in" style={{ fontSize: "1.3rem", fontWeight: 500 }}>Laetitia Ricotta</h3>
          <p className ="fade-in" style={{ opacity: 0.85, margin: 0 }}>Specializzazione</p>

          {/* spazio per una breve descrizione/bio */}
          <p className ="fade-in" style={{ opacity: 0.8, marginTop: "0.6rem", maxWidth: "40rem" }}>
            Inserisci qui una breve bio di Laetitia: formazione, percorsi artistici, metodi di lavoro e
            qualsiasi informazione utile ai futuri studenti.
          </p>
        </div>
      </div>
    </section>
  );
}
