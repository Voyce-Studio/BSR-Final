import React from 'react';

export default function MissSpaceLogo({ className }) {
  const gradientId = React.useId();

  return (
    <svg
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Miss Space logo"
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#c2f1ff" />
          <stop offset="45%" stopColor="#66c3ff" />
          <stop offset="100%" stopColor="#3857ff" />
        </radialGradient>
      </defs>
      <circle cx="70" cy="70" r="60" fill={`url(#${gradientId})`} opacity="0.2" />
      <circle cx="70" cy="70" r="38" stroke={`url(#${gradientId})`} strokeWidth="6" fill="none" />
      <path
        d="M30 74c12-10 28-18 40-18s22 3 34 10"
        stroke={`url(#${gradientId})`}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="98" cy="52" r="8" fill={`url(#${gradientId})`} />
      <path
        d="M60 98c0-6 5-12 12-12s12 6 12 12-5 12-12 12-12-6-12-12Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        fill="none"
      />
    </svg>
  );
}
