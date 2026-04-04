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

  useEffect(() => {
    if (isText) return;

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();

            const tick = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = eased * target;

              if (el) {
                el.textContent = `${Math.floor(current)}${suffix}`;
              }

              if (t < 1) {
                requestAnimationFrame(tick);
              }
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
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
