import { useEffect, useState } from 'preact/hooks';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (testimonials.length < 2) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const intervalId = window.setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.75fr)] lg:gap-6">
      <article
        className="spotlight-card relative overflow-hidden rounded-[1.9rem] border border-sage/15 bg-cream p-6 shadow-[0_22px_54px_rgba(44,44,42,0.08)] lg:p-10"
        data-spotlight
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,216,201,0.38),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />

        <div className="relative z-[1]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage/12 bg-white/75 px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-sage shadow-[0_8px_22px_rgba(44,44,42,0.04)]">
              <span className="h-2 w-2 rounded-full bg-warm" />
              Valore {activeIndex + 1} di {testimonials.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/15 bg-white/80 text-txt transition-colors hover:border-sage/35 hover:text-sage"
                aria-label="Mostra il valore precedente"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current fill-none stroke-[1.8]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/15 bg-white/80 text-txt transition-colors hover:border-sage/35 hover:text-sage"
                aria-label="Mostra il valore successivo"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current fill-none stroke-[1.8]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div key={activeIndex}>
            <div className="mb-4 font-serif text-[4rem] leading-[0.6] text-sage/20 lg:text-[4.6rem]">
              &ldquo;
            </div>

            <p className="max-w-[44rem] text-[1rem] font-light italic leading-[1.9] text-txt-mid lg:text-[1.08rem]">
              {activeTestimonial.quote}
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-sage/10 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-medium tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(138,158,140,0.22)]">
                {activeTestimonial.initials}
              </div>

              <div>
                <div className="font-serif text-[1.15rem] leading-[1.2] text-txt">
                  {activeTestimonial.name}
                </div>
                <div className="mt-1 text-[0.82rem] uppercase tracking-[0.14em] text-txt-light">
                  {activeTestimonial.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-3">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`text-left rounded-[1.35rem] border p-5 transition-all ${
                isActive
                  ? 'border-sage/22 bg-white shadow-[0_18px_40px_rgba(44,44,42,0.06)]'
                  : 'border-sage/12 bg-white/70 hover:border-sage/20 hover:bg-white'
              }`}
              aria-pressed={isActive}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-warm">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-[1.1rem] leading-[1.2] text-txt">
                    {testimonial.name}
                  </h3>
                </div>

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                    isActive ? 'bg-sage text-white' : 'bg-sage-pale text-sage'
                  }`}
                >
                  {testimonial.initials}
                </div>
              </div>

              <p className="mt-3 max-h-[4.9rem] overflow-hidden text-[0.9rem] font-light leading-[1.7] text-txt-mid">
                {testimonial.quote}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
