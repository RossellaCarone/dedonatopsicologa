export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Creo uno spazio di ascolto autentico, privo di giudizio, dove ogni persona può esprimersi liberamente. La relazione terapeutica è il fondamento da cui parte ogni percorso di crescita e cambiamento.",
    name: "Ascolto Empatico",
    role: "Uno spazio sicuro per te",
    initials: "AE",
  },
  {
    quote:
      "Il mio approccio clinico e dinamico integra la comprensione profonda dei processi emotivi con strumenti evidence-based. Ogni percorso è costruito sulla tua storia, non su schemi preconfezionati.",
    name: "Approccio Clinico e Dinamico",
    role: "Fondato sull'evidenza, centrato su di te",
    initials: "CD",
  },
  {
    quote:
      "Lavoro sia in presenza che online, adattando tempi e modalità alle tue esigenze reali. Che tu sia adulto, giovane adulto, adolescente o in coppia, il percorso prende forma insieme a te.",
    name: "Flessibilità e Personalizzazione",
    role: "Online e in presenza, su misura",
    initials: "FL",
  },
];
