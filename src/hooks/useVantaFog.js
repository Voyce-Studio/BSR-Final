import { useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const DEFAULT_FOG_OPTIONS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xffc9ff,
  midtoneColor: 0x5cb8ff,
  lowlightColor: 0x060311,
  baseColor: 0x020102,
  speed: 1.35,
  zoom: 1
};

export default function useVantaFog(options = {}, interactions = {}) {
  const elementRef = useRef(null);
  const vantaRef = useRef(null);
  const {
    respondToScroll = false,
    scrollRange = [0.85, 1.05],
    centerBias = 1,
    oscillateSpeed = false,
    speedRange = [0.95, 1.35]
  } = interactions;

  useEffect(() => {
    if (!elementRef.current) return undefined;

    if (vantaRef.current) {
      vantaRef.current.setOptions({ ...options });
      return undefined;
    }

    vantaRef.current = FOG({
      el: elementRef.current,
      THREE,
      ...DEFAULT_FOG_OPTIONS,
      ...options
    });

    return () => {
      vantaRef.current?.destroy();
      vantaRef.current = null;
    };
  }, [options]);

  useEffect(() => {
    if (!respondToScroll || !vantaRef.current) return undefined;

    const handleScroll = () => {
      if (!vantaRef.current) return;
      const doc = document.documentElement;
      const scrollY = window.scrollY || doc.scrollTop || 0;
      const range = Math.max(window.innerHeight * centerBias, 1);
      const progress = Math.min(Math.max(scrollY / range, 0), 1);
      const [minZoom, maxZoom] = scrollRange;
      const zoom = minZoom + (maxZoom - minZoom) * progress;
      vantaRef.current.setOptions({ zoom });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [respondToScroll, scrollRange, centerBias]);

  useEffect(() => {
    if (!oscillateSpeed || !vantaRef.current) return undefined;
    const [minSpeed, maxSpeed] = speedRange;
    const mid = (minSpeed + maxSpeed) / 2;
    const amplitude = (maxSpeed - minSpeed) / 2;

    const handleSpeed = () => {
      if (!vantaRef.current) return;
      const base = window.innerHeight || 1;
      const wave = Math.sin((window.scrollY || 0) / base);
      const speed = mid + wave * amplitude;
      vantaRef.current.setOptions({ speed });
    };

    handleSpeed();
    window.addEventListener('scroll', handleSpeed, { passive: true });
    return () => window.removeEventListener('scroll', handleSpeed);
  }, [oscillateSpeed, speedRange]);

  return elementRef;
}
