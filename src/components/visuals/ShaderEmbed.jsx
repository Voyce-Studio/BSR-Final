import React from 'react';
import clsx from 'clsx';

export default function ShaderEmbed({
  src = 'https://www.shadertoy.com/embed/7dyyRy?gui=false&t=10&paused=false&muted=true',
  title = 'Shadertoy neon sunrise',
  className
}) {
  return (
    <div className={clsx('absolute inset-0 -z-10 overflow-hidden rounded-[36px]', className)}>
      <iframe
        title={title}
        src={src}
        frameBorder="0"
        allowFullScreen
        className="h-full w-full scale-110 origin-center"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
    </div>
  );
}
