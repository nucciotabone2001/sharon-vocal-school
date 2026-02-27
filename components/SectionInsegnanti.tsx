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
      <h2
        ref={titleRef}
        className="fade-in"
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

      {/* GRID RESPONSIVA */}
      <div className="insegnanti-grid fade-in">
        {/* INSEGNANTE 1 */}
        <div ref={teacher1} className="insegnante-card fade-in">
          <img
            src="/elements/foto_sha.jpg"
            alt="Sharon Tabone"
            className="insegnante-img fade-in"
          />

          <h3 className="fade-in">Sharon Tabone</h3>
          <p className="fade-in" style={{ opacity: 0.85, margin: 0 }}>
            formazione per ragazzi e adulti
          </p>

          <p className="fade-in insegnante-bio">
            Diplomata al conservatorio in pop con un background di Soul, specializzata come vocal coach.
            Il suo approccio personalizzato, empatico e orientato ai risultati aiuta ogni studente a scoprire e valorizzare
            la propria voce, migliorare la tecnica e raggiungere i propri obiettivi
          </p>
        </div>

        {/* INSEGNANTE 2 */}
        <div ref={teacher2} className="insegnante-card fade-in">
          <img
            src="/elements/laetitia.jpg"
            alt="Laetitia Ricotta"
            className="insegnante-img fade-in"
          />

          <h3 className="fade-in">Laetitia Ricotta</h3>
          <p className="fade-in" style={{ opacity: 0.85, margin: 0 }}>
            formazione per bambini e adolescenti
          </p>

          <p className="fade-in insegnante-bio">
            Diplomata al conservatorio in pop-rock, specializzata in didattica all'insegnamento e musical.
            Il suo approccio è un percorso musicale strutturato su misura adatto per bambini e adolescenti per accompagnali nello sviluppo della voce e della musicalità
          </p>
        </div>
      </div>

      {/* STILI RESPONSIVI */}
      <style>{`
        .insegnanti-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        /* Desktop: 2 colonne */
        @media (min-width: 800px) {
          .insegnanti-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .insegnante-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
          padding: 1rem;
        }

        .insegnante-img {
          width: 260px;
          height: 260px;
          object-fit: cover;
          object-position: 50% 0%;
          border-radius: 50%;
          border: 6px solid rgba(201,168,106,0.12);
          box-shadow: 0 12px 30px rgba(0,0,0,0.6);
          transition: transform 300ms ease;
        }

        .insegnante-img:hover {
          transform: scale(1.03);
        }

        .insegnante-bio {
          opacity: 0.8;
          margin-top: 0.6rem;
          max-width: 40rem;
        }
      `}</style>
    </section>
  );
}
