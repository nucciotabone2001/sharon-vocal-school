"use client";

export default function SectionSharon() {
  return (
    <section
      id="SectionSharon"
      className="section-sharon"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        padding: "6rem 8vw",
      }}
    >
      <div
        className="sharon-content"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          maxWidth: "1600px", // più ampio per monitor
          width: "100%",
        }}
      >


        {/* FOTO */}
        <div
          className="sharon-image fade-up parallax"
          style={{
            flex: 1,
            width: "100%",
            aspectRatio: "3 / 4", // proporzioni perfette
            backgroundImage: 'url("/elements/foto_3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1.5rem",
            minHeight: "520px",
            maxHeight: "60vh", // cresce su monitor ma non esagera
          }}
        />


        {/* TESTO */}
        <div
          className="sharon-text fade-up"
          style={{
            flex: 1,
            maxWidth: "40rem",
          }}
        >
          {/* TITOLO DESKTOP */}
          <h2
            className="section-title fade-up"
            style={{
              fontSize: "1.2rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C9A86A",
              marginBottom: "1rem",
            }}
          >
            Chi sono
          </h2>

          <p
            className="fade-up stagger-parent"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            Sharon Tabone è una vocal coach professionista con oltre 7 anni di esperienza e più di 160 studenti formati tra lezioni private, percorsi personalizzati e preparazioni per eventi e performance.
            <br /><br />
            Diplomata in Canto Pop presso il Conservatorio Giuseppe Verdi di Milano, ha costruito la sua formazione partendo dal jazz e studiando con maestri di livello internazionale come Barry Harris. Si specializza nel metodo Voicecraft con Gabriella Scalise, approfondendo la tecnica vocale moderna e la fisiologia della voce.
            <br /><br />
            Oggi unisce competenza tecnica, esperienza sul palco e un approccio didattico chiaro e progressivo. Il suo lavoro è accompagnare cantanti, performer e appassionati in un percorso di crescita reale, misurabile e personalizzato, aiutandoli a trovare la propria voce e a usarla con sicurezza.
          </p>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .sharon-content {
            flex-direction: column !important;
            text-align: left !important;
            gap: 2.5rem !important;
          }




          .sharon-image {
            width: 100% !important;
            max-width: 420px !important;
            min-height: 360px !important;
            margin: 0 auto !important;
          }

          .sharon-text {
            width: 100% !important;
            max-width: 90% !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
