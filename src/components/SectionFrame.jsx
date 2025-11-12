import React from 'react';
import clsx from 'clsx';

const toneClasses = {
  frost: 'frame glass',
  ink: 'frame frame--ink',
  dusk: 'frame frame--dusk',
  halo: 'frame frame--halo'
};

export default function SectionFrame({ children, className, tone = 'frost', bleed = false }) {
  return (
    <section className={clsx('section-block', bleed && 'section-block--bleed')}>
      <div className={clsx('section-shell', bleed && 'section-shell--bleed')}>
        <div className={clsx(toneClasses[tone] ?? toneClasses.frost, className)}>{children}</div>
      </div>
    </section>
  );
}
