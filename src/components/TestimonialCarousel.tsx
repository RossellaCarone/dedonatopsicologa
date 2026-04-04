import { useRef, useState, useEffect, useCallback } from 'preact/hooks';
import type { EmblaCarouselType } from 'embla-carousel';
import EmblaCarousel from 'embla-carousel';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface Props {
  testimonials: Array<Testimonial>;
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const emblaRef = useRef<HTMLDivElement>(null);
  const emblaApi = useRef<EmblaCarouselType | null>(null);
  const autoplayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  const clearTimers = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const startAutoplay = useCallback(() => {
    clearTimers();
    autoplayTimer.current = setInterval(() => {
      emblaApi.current?.scrollNext();
    }, 5000);
  }, [clearTimers]);

  const onSelect = useCallback(() => {
    if (!emblaApi.current) return;
    setSelectedIndex(emblaApi.current.selectedScrollSnap());
  }, []);

  const onPointerDown = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const onPointerUp = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      startAutoplay();
    }, 3000);
  }, [startAutoplay]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !emblaRef.current) return;

    emblaApi.current = EmblaCarousel(emblaRef.current, { loop: true, align: 'start' });
    emblaApi.current.on('select', onSelect);
    emblaApi.current.on('pointerDown', onPointerDown);
    emblaApi.current.on('pointerUp', onPointerUp);

    startAutoplay();

    return () => {
      clearTimers();
      emblaApi.current?.destroy();
      emblaApi.current = null;
    };
  }, [isMobile, onSelect, onPointerDown, onPointerUp, startAutoplay, clearTimers]);

  const cardStyle: Record<string, string | number> = {
    background: '#faf8f4',
    borderRadius: isMobile ? '10px' : '8px',
    padding: isMobile ? '1.25rem' : '2rem',
    flexShrink: 0,
    height: '100%',
  };

  const quoteMark = (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: isMobile ? '2.1rem' : '2.5rem',
        color: '#c8d8c9',
        lineHeight: 0.5,
        marginBottom: isMobile ? '0.75rem' : '1rem',
      }}
    >
      &ldquo;
    </div>
  );

  const renderCard = (t: Testimonial, idx: number) => (
    <div key={idx} style={cardStyle}>
      {quoteMark}
      <p
        style={{
          fontSize: isMobile ? '0.9rem' : '0.95rem',
          color: '#5a5a56',
          fontWeight: 300,
          lineHeight: isMobile ? 1.7 : 1.8,
          fontStyle: 'italic',
          marginBottom: isMobile ? '1.1rem' : '1.5rem',
          margin: `0 0 ${isMobile ? '1.1rem' : '1.5rem'} 0`,
        }}
      >
        {t.quote}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            width: isMobile ? '34px' : '36px',
            height: isMobile ? '34px' : '36px',
            borderRadius: '50%',
            background: '#c8d8c9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          {t.initials}
        </div>
        <div>
          <div
            style={{
              fontSize: isMobile ? '0.84rem' : '0.85rem',
              fontWeight: 500,
              color: '#2c2c2a',
              lineHeight: 1.35,
              marginBottom: '0.2rem',
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: '0.78rem',
              color: '#9a9a94',
              lineHeight: 1.45,
            }}
          >
            {t.role}
          </div>
        </div>
      </div>
    </div>
  );

  if (!isMobile) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
        }}
      >
        {testimonials.map((t, idx) => renderCard(t, idx))}
      </div>
    );
  }

  return (
    <div>
      <div
        ref={emblaRef}
        style={{
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 0,
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                flex: '0 0 100%',
                minWidth: 0,
                padding: '0 0.25rem',
              }}
            >
              {renderCard(t, idx)}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1.25rem',
        }}
      >
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi.current?.scrollTo(idx)}
            style={{
              width: idx === selectedIndex ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: idx === selectedIndex ? '#c8d8c9' : '#d5d5ce',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
