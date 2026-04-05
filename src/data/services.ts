export interface Service {
  id: string;
  title: string;
  description: string;
  detail: string;
  linkText: string;
  linkHref: string;
  iconSvg: string;
}

export const services: Service[] = [
  {
    id: "supporto-psicologico-individuale",
    title: "Supporto psicologico individuale",
    description:
      "Un percorso personalizzato per affrontare difficoltà emotive, ansia, depressione e blocchi personali, in un ambiente sicuro e privo di giudizi.",
    detail:
      "Il supporto psicologico individuale è uno spazio dedicato interamente a te, in cui esploriamo insieme ciò che porti: emozioni difficili, pensieri ricorrenti, blocchi o momenti di crisi. Con un approccio clinico e dinamico, lavoriamo per comprendere le radici di ciò che stai vivendo e costruire risorse reali per affrontarlo. Ogni percorso è unico e prende forma a partire dalla tua storia.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>`,
  },
  {
    id: "consulenza-di-coppia",
    title: "Consulenza di coppia",
    description:
      "Sostegno alle coppie in crisi, miglioramento della comunicazione e riscoperta dell'intimità emotiva attraverso un dialogo guidato e costruttivo.",
    detail:
      "La consulenza di coppia offre uno spazio neutro e sicuro in cui entrambi i partner possono esprimersi e ascoltarsi davvero. Lavoriamo sui cicli di conflitto, sulla comunicazione emotiva e sulla comprensione reciproca, con l'obiettivo di ritrovare connessione o affrontare insieme momenti di transizione. Non è necessario essere in crisi profonda per chiedere supporto: anche un momento di difficoltà è un'occasione di crescita.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  },
  {
    id: "supporto-adolescenti",
    title: "Consulenza adolescenziale",
    description:
      "Percorsi dedicati ai ragazzi per affrontare difficoltà scolastiche, relazionali, identitarie e il complesso passaggio verso l'età adulta, in un ambiente di ascolto e non giudizio.",
    detail:
      "L'adolescenza è un periodo di grandi trasformazioni, spesso accompagnato da confusione, ansia e conflitti. Offro uno spazio riservato in cui i ragazzi possono esprimersi liberamente, esplorare la propria identità, gestire le pressioni scolastiche e sociali, e sviluppare una maggiore consapevolezza emotiva. Lavoro con un approccio rispettoso e non direttivo, costruendo insieme ai ragazzi strumenti concreti per affrontare le sfide di questa fase delicata.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,
  },
  {
    id: "gestione-ansia",
    title: "Gestione dell'ansia",
    description:
      "Tecniche evidence-based di CBT e Mindfulness per comprendere e ridurre l'ansia, i disturbi del panico e le fobie, recuperando serenità quotidiana.",
    detail:
      "L'ansia è una delle esperienze più diffuse e invalidanti, ma può essere compresa e gestita con gli strumenti giusti. Attraverso tecniche evidence-based — tra cui elementi della CBT e pratiche di mindfulness — lavoriamo per identificare i pensieri e i comportamenti che alimentano l'ansia, sviluppare strategie concrete per affrontarla e ridurre progressivamente il suo impatto sulla vita quotidiana. Il percorso è graduale, rispettoso dei tuoi tempi e fortemente orientato alla pratica.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/>`,
  },
  {
    id: "sostegno-genitorialita",
    title: "Sostegno alla genitorialità",
    description:
      "Supporto ai genitori per migliorare la relazione con i figli, affrontare le sfide educative quotidiane e ritrovare equilibrio e serenità nel proprio ruolo genitoriale.",
    detail:
      "Essere genitori è un'esperienza intensa e complessa, che porta con sé dubbi, fatiche e momenti di sconforto. Il sostegno alla genitorialità offre uno spazio in cui esplorare le difficoltà educative, comprendere i bisogni emotivi dei figli, migliorare la comunicazione familiare e sviluppare strategie efficaci e rispettose. Lavoro sia con singoli genitori che con coppie, accompagnandovi nel costruire una relazione più autentica e consapevole con i vostri figli.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M3 21h18M4 18h16M6 18v-4.7M18 18v-4.7M10 18V9M14 18V9M12 2L4 9h16z"/>`,
  },
  {
    id: "supporto-transizioni-di-vita",
    title: "Supporto nelle transizioni di vita",
    description:
      "Accompagnamento psicologico nei momenti di cambiamento — un nuovo lavoro, un trasferimento, la genitorialità, un lutto, una separazione — per attraversarli con maggiore consapevolezza.",
    detail:
      "I grandi cambiamenti della vita — un nuovo lavoro, un trasferimento, diventare genitore, affrontare un lutto o una separazione — possono destabilizzare anche le persone più resilienti. Questo tipo di supporto offre uno spazio per elaborare le emozioni legate alla transizione, ritrovare un senso di continuità e identità, e sviluppare le risorse necessarie per affrontare il nuovo. Non si tratta di eliminare il cambiamento, ma di imparare a navigarlo.",
    linkText: "Scopri →",
    linkHref: "#contatti",
    iconSvg: `<path d="M3 17l4-8 4 4 4-6 4 10"/><path d="M3 17h18"/>`,
  },
];
