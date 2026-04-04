export interface Service {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  iconSvg: string;
}

export const services: Service[] = [
  {
    id: "psicoterapia-individuale",
    title: "Psicoterapia individuale",
    description:
      "Un percorso personalizzato per affrontare difficoltà emotive, ansia, depressione e blocchi personali, in un ambiente sicuro e privo di giudizi.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>`,
  },
  {
    id: "terapia-di-coppia",
    title: "Terapia di coppia",
    description:
      "Sostegno alle coppie in crisi, miglioramento della comunicazione e riscoperta dell'intimità emotiva attraverso un dialogo guidato e costruttivo.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  },
  {
    id: "consulenza-online",
    title: "Consulenza online",
    description:
      "Sedute di psicologia a distanza tramite piattaforme sicure, per chi preferisce la comodità di casa o vive lontano. Stesso livello di qualità e riservatezza.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>`,
  },
  {
    id: "gestione-ansia",
    title: "Gestione dell'ansia",
    description:
      "Tecniche evidence-based di CBT e Mindfulness per comprendere e ridurre l'ansia, i disturbi del panico e le fobie, recuperando serenità quotidiana.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/>`,
  },
  {
    id: "prima-consulenza-gratuita",
    title: "Prima consulenza gratuita",
    description:
      "Un incontro conoscitivo di 30 minuti, senza impegno, per conoscerci, capire il tuo momento e valutare insieme se e come posso aiutarti.",
    linkText: "Prenota ora →",
    linkHref: "#contatti",
    iconSvg: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  },
  {
    id: "supporto-emdr",
    title: "Supporto psicologico EMDR",
    description:
      "Trattamento specializzato per traumi, lutti e memorie dolorose attraverso la tecnica EMDR, riconosciuta dall'OMS come terapia efficace per il PTSD.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  },
];
