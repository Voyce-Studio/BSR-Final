import React from 'react';
import clsx from 'clsx';

export default function FrostCard({ children, className }) {
  return <div className={clsx('glass p-6 md:p-10 shadow-glass', className)}>{children}</div>;
}
