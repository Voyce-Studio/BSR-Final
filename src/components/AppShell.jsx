import React from 'react';
import clsx from 'clsx';

/**
 * AppShell provides a consistent padded column layout that mirrors the framed-strip concept.
 * It is a lightweight wrapper so individual pages remain uncluttered.
 */
export default function AppShell({ children, className }) {
  return (
    <div className={clsx('min-h-[60vh] w-full', className)}>
      {children}
    </div>
  );
}
