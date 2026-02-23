import Link from 'next/link';

export default function SectionPrenota() {
  return (
    <section
      style={{
        padding: '6rem 8vw',
        background: 'linear-gradient(to bottom, #000000 0%, #0A0A0A 100%)',
        color: '#FFFFFF',
        textAlign: 'left',
      }}
    >
      <h2 className="fade-in"
        style={{
          fontSize: '1.2rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#C9A86A',
          marginBottom: '1.5rem',
        }}
      >
        Lezione di prova gratuita
      </h2>

      <p className="fade-in"
        style={{
          fontSize: '1.1rem',
          maxWidth: '32rem',
          lineHeight: 1.6,
          opacity: 0.9,
          marginBottom: '2rem',
        }}
      >
        Prenota una lezione introduttiva gratuita per conoscere Sharon,
        valutare il tuo livello e costruire insieme un percorso personalizzato.
      </p>

      <Link className="fade-in"
        href="/prenota"
        style={{
          padding: '1rem 2.6rem',
          borderRadius: '999px',
          border: '1px solid #C9A86A',
          background: '#C9A86A',
          color: '#0A0A0A',
          fontSize: '0.95rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          display: 'inline-block',
        }}
      >
        Prenota ora
      </Link>
    </section>
  );
}
