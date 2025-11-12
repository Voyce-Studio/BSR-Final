import React from 'react';

export default function SpotifyGlyph({ size = 18, className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M7.4 9.4c3.3-1 7-0.7 10 0.8M8 12.4c2.6-0.7 5.2-0.4 7.6 0.7M8.6 15.1c1.6-0.4 3.3-0.2 4.9 0.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
