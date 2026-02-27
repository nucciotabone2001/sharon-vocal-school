"use client";

import { motion } from "framer-motion";

const photos = [
  "/elements/photo1.jpg",
  "/elements/photo2.jpg",
  "/elements/photo3.jpg",
  "/elements/photo4.jpg",
];

export default function SectionCommunity() {
  return (
    <section
      style={{
        padding: "6rem 8vw",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          marginBottom: "3rem",
        }}
      >
        La nostra community
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {photos.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            initial={{
              opacity: 0,
              rotate: i % 2 === 0 ? -8 : 8,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            style={{
              width: "100%",
              borderRadius: "1rem",
            }}
          />
        ))}
      </div>
    </section>
  );
}
