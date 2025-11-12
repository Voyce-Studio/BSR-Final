import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageSurface from './ImageSurface';

export default function ParallaxImage({ src, alt, label, height = 420 }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <motion.div ref={ref} style={{ y, height }} className="rounded-2xl overflow-hidden">
      <ImageSurface src={src} alt={alt} label={label} />
    </motion.div>
  );
}
