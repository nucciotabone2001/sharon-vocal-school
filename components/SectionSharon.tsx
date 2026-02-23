"use client";

export default function SectionSharon() {
  return (
    <section
      id="SectionSharon"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 8vw',
        gap: '4rem',
      }}
    >
      {/* FOTO */}
      <div
        className="sharon-image fade-up parallax"
        style={{
          flex: 1,
          backgroundImage: 'url("/elements/foto_3.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1.5rem",
          minHeight: "480px",
        }}
      />

      {/* TESTO */}
      <div className="sharon-text fade-up" style={{ flex: 1, maxWidth: '32rem' }}>
        <h2
          className="section-title fade-up"
          style={{
            fontSize: '1.2rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C9A86A',
            marginBottom: '1rem',
          }}
        >
          Chi è Sharon
        </h2>

        <p className="fade-up" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Sharon Tabone è una cantante professionista diplomata in Canto Pop presso il Conservatorio Giuseppe Verdi di Milano. <br />
          La sua formazione affonda le radici nel jazz, genere che ha approfondito con grandi maestri di fama internazionale come Barry Harris. <br />
          Si specializza nel metodo Voicecraft con l’insegnante Gabriella Scalise, approfondendo la tecnica vocale moderna e la fisiologia della voce. <br/><br/>
          Interprete raffinata e artista di eventi musicali e teatrali, Sharon affianca all’attività performativa un’intensa attività didattica: da anni insegna tecnica vocale moderna e repertorio, accompagnando cantanti e performer in un percorso di crescita tecnica ed espressiva.
        </p>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .section-sharon {
            flex-direction: column !important;
            padding: 4rem 6vw !important;
            text-align: left !important;
          }

          .sharon-image {
            width: 100% !important;
            min-height: 420px !important;
          }

          .sharon-text {
            width: 100% !important;
            max-width: none !important;
          }
        }

        @media (max-width: 600px) {
          .sharon-image {
            min-height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
