export default function SectionStudio() {
  return (
    <section
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
      {/* FOTO DELLO STUDIO (placeholder) */}
      <div className="fade-in"
        style={{
          flex: 1,
          backgroundImage: 'url("/elements/studio.jpeg")',
          backgroundSize: 'cover',
          backgroundColor: '#111',
          borderRadius: '1.5rem',
          minHeight: '380px',
        }}
      />

      {/* TESTO */}
      <div className="fade-in" style={{ flex: 1, maxWidth: '32rem' }}>
        <h2 className="fade-in"
          style={{
            fontSize: '1.2rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C9A86A',
            marginBottom: '1rem',
          }}
        >
          Lo Studio
        </h2>

        <p className="fade-in" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Uno studio moderno, immersivo e insonorizzato, progettato per offrirti un ambiente
          professionale e accogliente. Qui ogni lezione diventa un’esperienza di crescita e
          scoperta.
        </p>
      </div>
    </section>
  );
}
