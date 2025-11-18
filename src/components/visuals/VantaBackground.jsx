import React from 'react';
import clsx from 'clsx';
import useVantaFog from '../../hooks/useVantaFog';
import { VANTA_FOG_PRESET, VANTA_INTERACTIONS } from '../../config/vantaControls';

export default function VantaBackground({ className, options = {}, interactions = {}, ...props }) {
  const fogOptions = React.useMemo(() => ({ ...VANTA_FOG_PRESET, ...options }), [options]);
  const fogInteractions = React.useMemo(() => ({ ...VANTA_INTERACTIONS, ...interactions }), [interactions]);
  const fogRef = useVantaFog(fogOptions, fogInteractions);

  return (
    <div
      ref={fogRef}
      className={clsx('pointer-events-none', className)}
      aria-hidden
      {...props}
    />
  );
}
