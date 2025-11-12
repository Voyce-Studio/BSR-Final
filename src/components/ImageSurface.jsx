import React, { useState } from 'react';
import clsx from 'clsx';

/**
 * Animated gradient surface that reveals an image if provided.
 * Use `label` to hint where to drop the final asset (e.g. "Hero image → /src/assets/images/hero.webp").
 */
export default function ImageSurface({ src, alt = '', label, className, children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasImage = Boolean(src);

  return (
    <div className={clsx('image-surface animated-gradient', className)}>
      {label && (
        <span className="image-surface__label">
          {label}
        </span>
      )}
      {hasImage && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(false)}
          className={clsx('image-surface__img', { 'image-surface__img--visible': isLoaded })}
        />
      )}
      {children}
    </div>
  );
}
