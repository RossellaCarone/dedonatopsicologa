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
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {testimonials.map((t, idx) => (
        <article
          key={idx}
          className="h-full rounded-[10px] bg-cream p-5 md:rounded-lg md:p-8"
        >
          <div className="mb-3 font-serif text-[2.1rem] leading-[0.5] text-sage-light md:mb-4 md:text-[2.5rem]">
            &ldquo;
          </div>

          <p className="mb-4 text-[0.9rem] font-light italic leading-[1.7] text-txt-mid md:mb-6 md:text-[0.95rem] md:leading-[1.8]">
            {t.quote}
          </p>

          <div className="flex items-center gap-3">
            <div className="h-[34px] w-[34px] shrink-0 rounded-full bg-sage-light text-center text-xs font-medium leading-[34px] text-white md:h-9 md:w-9 md:leading-9">
              {t.initials}
            </div>

            <div>
              <div className="mb-[0.2rem] text-[0.84rem] font-medium leading-[1.35] text-txt md:text-[0.85rem]">
                {t.name}
              </div>
              <div className="text-[0.78rem] leading-[1.45] text-txt-light">
                {t.role}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
