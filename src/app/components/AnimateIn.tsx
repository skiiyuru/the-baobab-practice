import { type ReactNode, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Animation variant */
  variant?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'fade-scale';
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Whether to animate only once (default: true) */
  once?: boolean;
}

const variantMap = {
  'fade-up': { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  'fade-in': { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  'fade-left': { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  'fade-right': { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  'fade-scale': { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

/**
 * Scroll-triggered animation wrapper powered by Motion.
 * Uses whileInView for scroll-triggered entrance.
 * Respects prefers-reduced-motion via useReducedMotion.
 */
export function AnimateIn({
  children,
  className = '',
  style,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  once = true,
}: AnimateInProps) {
  const prefersReduced = useReducedMotion();

  const { hidden, visible } = variantMap[variant];

  // If user prefers reduced motion, render without animation
  if (prefersReduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // ease-out-quart
      }}
    >
      {children}
    </motion.div>
  );
}
