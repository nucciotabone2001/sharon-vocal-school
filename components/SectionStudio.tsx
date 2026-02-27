export default function SectionStudio() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        padding: "6rem 8vw",
        gap: "4rem",
        flexWrap: "wrap", // <-- fondamentale per mobile
      }}
    >
      {/* FOTO */}
      <div
        className="fade-up"
        style={{
          flex: 1,
          minWidth: "280px",
          backgroundImage: 'url("/elements/studio.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1.5rem",
          minHeight: "380px",
        }}
      />

      {/* TESTO */}
      <div
        className="fade-up"
        style={{
          flex: 1,
          minWidth: "280px",
          maxWidth: "32rem",
        }}
      >
        <h2
          className="fade-up"
          style={{
            fontSize: "1.2rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C9A86A",
            marginBottom: "1rem",
          }}
        >
          Lo Studio
        </h2>

        <p
          className="fade-up"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
          }}
        >
          Uno studio moderno, immersivo e insonorizzato, progettato per offrirti
          un ambiente professionale e accogliente. Qui ogni lezione diventa
          un’esperienza di crescita e scoperta.
        </p>
      </div>

      <style>{`
        /* MOBILE FIX */
        @media (max-width: 800px) {
          section {
            flex-direction: column;
            padding: 4rem 6vw;
          }

          .fade-up {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
