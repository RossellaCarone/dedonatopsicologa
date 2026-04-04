export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sin dal primo incontro mi sono sentita accolta e ascoltata senza giudizio. Monica ha un modo delicato ma deciso di guidarti verso una maggiore consapevolezza di te stessa.",
    name: "Valentina M.",
    role: "Percorso individuale",
    initials: "VM",
  },
  {
    quote:
      "Avevo tanti dubbi sul iniziare un percorso psicologico, ma Monica mi ha messo subito a mio agio. Ogni seduta è uno spazio sicuro dove poter esplorare i miei pensieri.",
    name: "Luca G.",
    role: "Consulenza online",
    initials: "LG",
  },
  {
    quote:
      "Quello che apprezzo di più è la capacità di Monica di cogliere sfumature che nemmeno io riuscivo a vedere. Un approccio professionale e profondamente umano.",
    name: "Sara T.",
    role: "Percorso individuale",
    initials: "ST",
  },
];
