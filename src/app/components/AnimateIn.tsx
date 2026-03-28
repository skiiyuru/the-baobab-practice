import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from 'react';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Animation variant */
  variant?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
}

/** Custom hook to check prefers-reduced-motion */
function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}

const transformMap = {
  'fade-up': 'translateY(24px)',
  'fade-in': 'none',
  'fade-left': 'translateX(24px)',
  'fade-right': 'translateX(-24px)',
};

/**
 * Scroll-triggered animation wrapper.
 * Uses IntersectionObserver for performance.
 * Only animates transform and opacity (GPU-accelerated).
 * Respects prefers-reduced-motion.
 */
export function AnimateIn({
  children,
  className = '',
  style,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, prefersReduced]);

  const animationStyle: CSSProperties = prefersReduced
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transformMap[variant],
        transition: `opacity ${duration}ms var(--ease-out-quart) ${delay}ms, transform ${duration}ms var(--ease-out-quart) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...animationStyle, ...style }}
    >
      {children}
    </div>
  );
}
