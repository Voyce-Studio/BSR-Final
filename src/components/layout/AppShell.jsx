import React from 'react';
import clsx from 'clsx';

/**
 * AppShell provides a consistent padded column layout that mirrors the framed-strip concept.
 * It is a lightweight wrapper so individual pages remain uncluttered.
 */
export default function AppShell({ children, className }) {
  return (
    <main className={clsx('flex-1 w-full', className)}>
      {children}
    </main>
  );
}
