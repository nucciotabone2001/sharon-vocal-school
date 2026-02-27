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

    // -----------------------------
    // FIX: pixel ratio per mobile
    // -----------------------------
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    // palette originale
    const PALETTE = ["#d68531", "#efe2d8", "#fffae7", "#501a0b"];

    function hexToRgba(hex: string, alpha = 1) {
      const h = hex.replace('#', '');
      const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const IS_MOBILE = width < 640;
    const SCALE = IS_MOBILE ? 0.55 : width < 900 ? 0.8 : 1;

    // ----------------------------------------------------
    // FIX: blob più centrati (concentrazione verso il centro)
    // ----------------------------------------------------
    const blobs: Blob[] = Array.from({ length: 4 }).map((_, i) => ({
      x: width * (0.5 + (Math.random() - 0.5) * 0.25),
      y: height * (0.5 + (Math.random() - 0.5) * 0.25),
      r: Math.max(30, (90 + Math.random() * 160) * SCALE),
      t: Math.random() * Math.PI * 2,
      speed: (0.0006 + Math.random() * 0.002) * (IS_MOBILE ? 0.6 : 1),
      hue: 18 + i * 30 + Math.random() * 20,
      phase: Math.random() * 10,
      vx: (Math.random() - 0.5) * (IS_MOBILE ? 0.06 : 0.12),
      vy: (Math.random() - 0.5) * (IS_MOBILE ? 0.04 : 0.08),
    }));

    function drawBlob(blob: Blob, color: string, points = 64) {
      ctx.beginPath();

      for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / points) {
        const noise =
          Math.sin(i * 3 + blob.t * 2 + blob.phase) * (8 + Math.sin(blob.t) * 4) +
          Math.cos(i * 2 + blob.t * 0.5 + blob.phase * 0.5) * 6 +
          Math.sin(i * 7 + blob.t * 0.2) * 3;

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
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      ctx.save();
      ctx.filter = "blur(12px)";
      blobs.forEach((blob, idx) => {
        const alpha = 0.16 + idx * 0.04;
        const colorHex = PALETTE[idx % PALETTE.length];
        const color = hexToRgba(colorHex, alpha);
        drawBlob(blob, color);
      });
      ctx.restore();

      blobs.forEach((blob, idx) => {
        const alpha = 0.08 + idx * 0.045;
        const colorHex = PALETTE[idx % PALETTE.length];
        const color = hexToRgba(colorHex, alpha);
        drawBlob(blob, color, 80);
      });

      blobs.forEach((b) => {
        b.t += b.speed;

        const oscX = Math.sin(b.t * 0.6) * 0.06 * (b.r / 120);
        const oscY = Math.cos(b.t * 0.7) * 0.04 * (b.r / 120);

        b.x += b.vx + oscX;
        b.y += b.vy + oscY;

        b.vx *= 0.92;
        b.vy *= 0.92;

        if (Math.random() < 0.0008) {
          b.vx += (Math.random() - 0.5) * (IS_MOBILE ? 0.12 : 0.2);
          b.vy += (Math.random() - 0.5) * (IS_MOBILE ? 0.08 : 0.12);
        }

        const margin = 220 * SCALE;
        if (b.x < -margin) { b.x = -margin; b.vx = Math.abs(b.vx) * 0.3; }
        if (b.x > width + margin) { b.x = width + margin; b.vx = -Math.abs(b.vx) * 0.3; }
        if (b.y < -margin) { b.y = -margin; b.vy = Math.abs(b.vy) * 0.3; }
        if (b.y > height + margin) { b.y = height + margin; b.vy = -Math.abs(b.vy) * 0.3; }
      });

      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    const handleTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      if (t) {
        mouse.current.x = (t.clientX - rect.left) / rect.width;
        mouse.current.y = (t.clientY - rect.top) / rect.height;
      }
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleTouch as EventListener);
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
        pointerEvents: "none",
      }}
    />
  );
}
