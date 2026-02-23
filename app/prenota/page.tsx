"use client";

import { useState } from "react";
import Link from "next/link";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "emailjs-com";

export default function PrenotaPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({} as any);

  const validate = () => {
    const newErrors: any = {};

    if (!name.trim()) newErrors.name = "Il nome è obbligatorio.";
    if (!email.trim() || !email.includes("@"))
      newErrors.email = "Inserisci un'email valida.";
    if (!availability.trim())
      newErrors.availability = "Scrivi almeno una disponibilità.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "prenotazioni"), {
        nome: name,
        email: email,
        disponibilita: availability,
        note: notes,
        timestamp: serverTimestamp(),
      });

      emailjs.send(
        "service_3iempju",
        "template_v8hzqhj",
        {
          nome: name,
          email: email,
          disponibilita: availability,
          note: notes,
          timestamp: new Date().toLocaleString("it-IT"),
        },
        "fEwbQqUFxzhaA2sBw"
      );

      setSuccess(true);
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* TORNA ALLA HOME */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "calc(1.5rem + 64px)", // posizionato sotto la navbar fissa
          left: "1.5rem",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "1px solid #C9A86A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C9A86A",
          fontSize: "1.2rem",
          zIndex: 65,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
        }}
      >
        ←
      </Link>

      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          padding: "8rem 8vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {!success && (
          <div style={{ maxWidth: "520px", width: "100%" }}>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
                color: "#FFFFFF",
              }}
            >
              Richiedi la tua lezione di prova gratuita
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                maxWidth: "40rem",
                lineHeight: 1.6,
                marginBottom: "3rem",
                opacity: 0.85,
              }}
            >
              La lezione di prova dura <strong>30 minuti</strong> ed è completamente
              <strong> gratuita</strong>. Scrivi le tue disponibilità e troveremo
              insieme il momento migliore.
            </p>

            <div
              style={{
                border: "1px solid rgba(201,168,106,0.4)",
                borderRadius: "1rem",
                padding: "2rem",
                backgroundColor: "#111111",
                backdropFilter: "blur(4px)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "#C9A86A",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                I tuoi dati
              </h3>

              {/* Nome */}
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  marginBottom: "0.3rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #333",
                  background: "#0A0A0A",
                  color: "#FFFFFF",
                }}
              />
              {errors.name && (
                <p style={{ color: "#D9534F", marginBottom: "1rem" }}>
                  {errors.name}
                </p>
              )}

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  marginBottom: "0.3rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #333",
                  background: "#0A0A0A",
                  color: "#FFFFFF",
                }}
              />
              {errors.email && (
                <p style={{ color: "#D9534F", marginBottom: "1rem" }}>
                  {errors.email}
                </p>
              )}

              {/* Disponibilità */}
              <textarea
                placeholder="Scrivi le tue disponibilità (es: “Sono disponibile martedì dopo le 17”)"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  height: "120px",
                  borderRadius: "0.5rem",
                  border: "1px solid #333",
                  background: "#0A0A0A",
                  color: "#FFFFFF",
                  marginBottom: "0.3rem",
                }}
              />
              {errors.availability && (
                <p style={{ color: "#D9534F", marginBottom: "1rem" }}>
                  {errors.availability}
                </p>
              )}

              {/* Note */}
              <textarea
                placeholder="Note (opzionale)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  height: "90px",
                  borderRadius: "0.5rem",
                  border: "1px solid #333",
                  background: "#0A0A0A",
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Bottone */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "999px",
                  border: "1px solid #C9A86A",
                  background: loading ? "#C9A86A88" : "#C9A86A",
                  color: "#0A0A0A",
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: loading ? "default" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  transition: "0.2s",
                }}
              >
                {loading ? "Invio in corso..." : "Invia richiesta"}
              </button>
            </div>
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              textAlign: "center",
              padding: "3rem 2rem",
              backgroundColor: "#111111",
              borderRadius: "1rem",
              border: "1px solid rgba(201,168,106,0.4)",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#C9A86A" }}>
              Richiesta inviata!
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, opacity: 0.9 }}>
              Grazie <strong>{name}</strong>, abbiamo ricevuto la tua richiesta di
              lezione di prova. Ti contatteremo presto per concordare giorno e ora.
            </p>
          </div>
        )}
      </main>
    </>
  );
}
