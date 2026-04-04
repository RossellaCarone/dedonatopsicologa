export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Monica mi ha aiutata a ritrovare me stessa dopo un periodo molto buio. Il suo approccio è caldo ma professionale, mai giudicante. Le sono profondamente grata.",
    name: "Anna L.",
    role: "Paziente, terapia individuale",
    initials: "AL",
  },
  {
    quote:
      "Grazie al percorso con Monica, io e mio marito abbiamo riscoperto come comunicare davvero. Ci ha dato strumenti concreti che usiamo ancora oggi.",
    name: "Marco R.",
    role: "Paziente, terapia di coppia",
    initials: "MR",
  },
  {
    quote:
      "Ero scettico sulla terapia online, ma Monica ha reso ogni seduta uno spazio sicuro e prezioso. L'ansia che mi bloccava è ormai gestibile. Consiglio vivamente.",
    name: "Giulia P.",
    role: "Paziente, consulenza online",
    initials: "GP",
  },
];
