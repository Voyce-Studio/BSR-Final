import React from 'react';

export default function MissBlissLogo({ className }) {
  const gradientId = React.useId();

  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Miss Bliss logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd6ff" />
          <stop offset="50%" stopColor="#f99ff2" />
          <stop offset="100%" stopColor="#ff7a33" />
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="96" height="96" rx="28" fill={`url(#${gradientId})`} opacity="0.15" />
      <path
        d="M36 28h28c15 0 26 11 26 26s-11 26-26 26H36Zm16 16v20h10c6.5 0 10-4.2 10-10s-3.5-10-10-10Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="52" cy="88" r="8" fill={`url(#${gradientId})`} />
      <circle cx="76" cy="88" r="8" fill={`url(#${gradientId})`} opacity="0.55" />
    </svg>
  );
}
