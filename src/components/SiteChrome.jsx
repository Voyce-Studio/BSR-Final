import React from 'react';
import clsx from 'clsx';

export default function SiteChrome({ children, className }) {
  return (
    <div className={clsx('relative z-10 flex min-h-screen flex-col text-slate-900', className)}>
      {children}
    </div>
  );
}
