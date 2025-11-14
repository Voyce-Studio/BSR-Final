import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

/**
 * AnimatedSunsetText renders high-res animated text using a 2D canvas.
 * It simulates a GSAP-like gradient sweep with glow + soft shadow and exposes knobs for modulation.
 */
export default function AnimatedSunsetText({
  text,
  fontFamily = "'Space Grotesk', 'Inter', sans-serif",
  fontWeight = 800,
  minSize = 42,
  maxSize = 160,
  speed = 0.12,
  glow = 120,
  resolution = 2,
  className,
  modulation = { swirl: 0.6, pulse: 0.4 }
}) {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const resizeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement;
      const dpr = Math.min(window.devicePixelRatio || 1, resolution * 2);
      canvas.width = Math.max(1, Math.floor(clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(clientHeight * dpr));
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      ctx.scale(1, 1);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);
    resizeRef.current = observer;

    const render = (time) => {
      const t = time * 0.001 * speed;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const fontSize = Math.min(Math.max(minSize, width * 0.08), maxSize);
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      const hues = [318, 280, 210, 35, 10];
      hues.forEach((h, idx) => {
        const phase = t + (idx / hues.length) * modulation.swirl;
        const stop = idx / (hues.length - 1);
        const sat = 70 + 20 * Math.sin(phase * 1.2);
        const light = 50 + 25 * Math.sin(phase * modulation.pulse);
        gradient.addColorStop(stop, `hsl(${(h + phase * 30) % 360}, ${sat}%, ${light}%)`);
      });

      ctx.shadowColor = 'rgba(255, 133, 255, 0.35)';
      ctx.shadowBlur = glow;
      ctx.fillStyle = gradient;
      ctx.filter = 'drop-shadow(0 0 30px rgba(255, 207, 139, 0.45))';
      ctx.fillText(text, width / 2, height / 2);

      ctx.filter = 'blur(30px)';
      ctx.globalAlpha = 0.35;
      ctx.fillText(text, width / 2, height / 2);
      ctx.globalAlpha = 1;
      ctx.filter = 'none';

      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      resizeRef.current?.disconnect();
    };
  }, [fontFamily, fontWeight, glow, maxSize, minSize, modulation.pulse, modulation.swirl, resolution, speed, text]);

  return <canvas ref={canvasRef} className={clsx('w-full h-full', className)} />;
}
