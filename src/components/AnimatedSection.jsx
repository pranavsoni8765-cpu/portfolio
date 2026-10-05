import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedSection({
  children,
  id,
  className = '',
  delay = 0
}) {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.4 }
      }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: {
          duration: 0.6,
          delay,
          ease: [0.16, 1, 0.3, 1]
        }
      };

  return (
    <motion.section
      id={id}
      className={className}
      {...animationProps}
    >
      {children}
    </motion.section>
  );
}
