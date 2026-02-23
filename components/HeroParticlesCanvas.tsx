"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  r: number;
  t: number;
  speed: number;
  hue: number;
  phase: number;
  vx: number;
  vy: number;
};

export default function HeroLiquidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // inizializza dimensioni in base all'elemento (più robusto di window.innerWidth)
    let width = (canvas.width = canvas.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.clientHeight || window.innerHeight);

    // parametri di controllo per il movimento
    // aumento lo smorzamento e riduco la deriva massima per rallentare il movimento
    const FRICTION = 0.92; // smorzamento della velocità di deriva (0..1, più basso = più smorzamento per frame)
    const MAX_DRIFT = 0.18; // velocità massima di deriva ridotta

    // palette richiesta dall'utente
    const PALETTE = ["#d68531", "#efe2d8", "#fffae7", "#501a0b"];

    // helper per convertire hex in rgba con alpha
    function hexToRgba(hex: string, alpha = 1) {
      const h = hex.replace('#', '');
      const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // rilevo se siamo su schermo piccolo per ridurre proporzionalmente bolle e velocità
    const IS_MOBILE = width < 640;
    const SCALE = IS_MOBILE ? 0.55 : width < 900 ? 0.8 : 1;

    // crea più blob con proprietà leggermente randomizzate
    const blobs: Blob[] = Array.from({ length: 4 }).map((_, i) => ({
      x: width * (0.2 + Math.random() * 0.6),
      y: height * (0.25 + Math.random() * 0.5),
      r: Math.max(30, (90 + Math.random() * 160) * SCALE),
      t: Math.random() * Math.PI * 2,
      // velocità angolare più lenta per movimenti più morbidi; su mobile ancora più lenta
      speed: (0.0006 + Math.random() * 0.002) * (IS_MOBILE ? 0.6 : 1),
      hue: 18 + i * 30 + Math.random() * 20,
      phase: Math.random() * 10,
      // velocità di deriva iniziale molto piccola (più piccola su mobile)
      vx: (Math.random() - 0.5) * (IS_MOBILE ? 0.06 : 0.12),
      vy: (Math.random() - 0.5) * (IS_MOBILE ? 0.04 : 0.08),
    }));

    // funzione che disegna un blob con una deformazione più ricca
    function drawBlob(blob: Blob, color: string, points = 64) {
      ctx.beginPath();

      for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / points) {
        // "rumore" combinando più sin/cos con fasi diverse per ottenere forme più organiche
        const noise =
          Math.sin(i * 3 + blob.t * 2 + blob.phase) * (8 + Math.sin(blob.t) * 4) +
          Math.cos(i * 2 + blob.t * 0.5 + blob.phase * 0.5) * 6 +
          Math.sin(i * 7 + blob.t * 0.2) * 3;

        // parallax legato al mouse (leggero)
        const mx = (mouse.current.x - 0.5) * 50;
        const my = (mouse.current.y - 0.5) * 50;

        const x = blob.x + mx + Math.cos(i) * (blob.r + noise);
        const y = blob.y + my + Math.sin(i) * (blob.r + noise);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    function animate() {
      // pulisco la canvas
      ctx.clearRect(0, 0, width, height);

      // modalità di fusione che accentua i colori sovrapposti
      ctx.globalCompositeOperation = "lighter";

      // disegno una versione sfocata per il glow
      ctx.save();
      ctx.filter = "blur(12px)";
      blobs.forEach((blob, idx) => {
        const alpha = 0.16 + idx * 0.04;
        const colorHex = PALETTE[idx % PALETTE.length];
        const color = hexToRgba(colorHex, alpha);
        drawBlob(blob, color);
      });
      ctx.restore();

      // disegno la versione nitida in cima per definire i bordi
      blobs.forEach((blob, idx) => {
        const alpha = 0.08 + idx * 0.045;
        const colorHex = PALETTE[idx % PALETTE.length];
        const color = hexToRgba(colorHex, alpha);
        drawBlob(blob, color, 80);
      });

      // aggiorno i parametri dei blob per animazione e oscillazioni
      blobs.forEach((b) => {
        // avanzamento temporale (più lento)
        b.t += b.speed;

        // oscillazioni molto leggere legate al tempo
        const oscX = Math.sin(b.t * 0.6) * 0.06 * (b.r / 120);
        const oscY = Math.cos(b.t * 0.7) * 0.04 * (b.r / 120);

        // applico deriva controllata
        b.vx = Math.max(Math.min(b.vx, MAX_DRIFT), -MAX_DRIFT);
        b.vy = Math.max(Math.min(b.vy, MAX_DRIFT), -MAX_DRIFT);

        b.x += b.vx + oscX;
        b.y += b.vy + oscY;

        // smorzamento della velocità per evitare accelerazioni incontrollate
        b.vx *= FRICTION;
        b.vy *= FRICTION;

        // piccoli impulsi casuali raramente per rendere il movimento più naturale (molto più piccoli)
        if (Math.random() < 0.0008) {
          b.vx += (Math.random() - 0.5) * (IS_MOBILE ? 0.12 : 0.2);
          b.vy += (Math.random() - 0.5) * (IS_MOBILE ? 0.08 : 0.12);
        }

        // limito la posizione ai bordi con riflessione morbida (no wrapping improvviso)
        const margin = 220 * (SCALE);
        if (b.x < -margin) {
          b.x = -margin;
          b.vx = Math.abs(b.vx) * 0.3;
        }
        if (b.x > width + margin) {
          b.x = width + margin;
          b.vx = -Math.abs(b.vx) * 0.3;
        }
        if (b.y < -margin) {
          b.y = -margin;
          b.vy = Math.abs(b.vy) * 0.3;
        }
        if (b.y > height + margin) {
          b.y = height + margin;
          b.vy = -Math.abs(b.vy) * 0.3;
        }
      });

      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.clientWidth || window.innerWidth;
      height = canvas.height = canvas.clientHeight || window.innerHeight;
    };

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    // supporto touch per mobile
    const handleTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      if (t) {
        mouse.current.x = (t.clientX - rect.left) / rect.width;
        mouse.current.y = (t.clientY - rect.top) / rect.height;
      }
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleTouch as EventListener);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // evita interferenze con eventi della UI
      }}
    />
  );
}
