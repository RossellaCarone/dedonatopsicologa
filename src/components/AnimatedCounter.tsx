import { useRef, useEffect } from 'preact/hooks';

interface Props {
  target: number;
  suffix: string;
  duration?: number;
  isText?: boolean;
}

export default function AnimatedCounter({ target, suffix, duration = 2000, isText = false }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (isText) return;

    const el = elementRef.current;
    if (!el) return;

    const renderValue = (value: number) => {
      el.textContent = `${Math.floor(value)}${suffix}`;
    };

    const startAnimation = () => {
      if (hasAnimated.current) return;

      hasAnimated.current = true;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);

        renderValue(eased * target);

        if (t < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      renderValue(target);
      hasAnimated.current = true;
      return;
    }

    const isAlreadyVisible = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
    };

    if (isAlreadyVisible()) {
      startAnimation();
      return () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, suffix, duration, isText]);

  const style = {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '3rem',
    fontWeight: 300,
    color: '#2c2c2a',
    lineHeight: 1,
    marginBottom: '0.5rem',
    textAlign: 'center' as const,
  };

  if (isText) {
    return (
      <div style={style}>
        {target}{suffix}
      </div>
    );
  }

  return (
    <div ref={elementRef} style={style}>
      0{suffix}
    </div>
  );
}
