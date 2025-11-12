import React from 'react';
import { motion } from 'framer-motion';

const knobPresets = [
  { size: 140, top: '0%', left: '10%', speed: 18, delay: 0, hue: 320, label: 'swirl' },
  { size: 90, top: '40%', left: '65%', speed: 12, delay: 0.4, hue: 200, label: 'lift' },
  { size: 120, top: '60%', left: '20%', speed: 22, delay: 0.8, hue: 32, label: 'heat' },
  { size: 70, top: '15%', left: '75%', speed: 10, delay: 0.2, hue: 260, label: 'pulse' }
];

function Knob({ size, speed, delay, hue, label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-white/70" style={{ width: size }}>
      <motion.div
        className="rounded-full border border-white/40 backdrop-blur-xl bg-white/10 shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
        style={{
          width: size,
          height: size,
          backgroundImage: `radial-gradient(circle at 30% 30%, hsla(${hue}, 90%, 70%, 0.8), transparent 65%)`
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear', delay }}
      >
        <div className="relative h-full w-full">
          <motion.span
            className="absolute left-1/2 top-3 block h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: `0 ${size / 2 - 8}px` }}
            transition={{ duration: speed * 0.5, repeat: Infinity, ease: 'linear', delay: delay / 2 }}
          />
        </div>
      </motion.div>
      <span className="text-[0.55rem] uppercase tracking-[0.5em]">{label}</span>
    </div>
  );
}

export default function AnimatedKnobField() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] border border-white/15 bg-white/5 p-6 backdrop-blur-3xl">
      <div className="absolute inset-0 opacity-30 blur-3xl" style={{ background: 'linear-gradient(120deg, rgba(255,179,218,0.4), rgba(106,176,255,0.5))' }} />
      <div className="relative h-full w-full">
        {knobPresets.map((knob, index) => (
          <div
            key={knob.label}
            className="absolute"
            style={{ top: knob.top, left: knob.left, transform: 'translate(-50%, -50%)' }}
          >
            <Knob {...knob} size={knob.size} />
          </div>
        ))}
      </div>
    </div>
  );
}
