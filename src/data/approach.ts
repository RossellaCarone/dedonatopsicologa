export interface ApproachStep {
  number: string;
  title: string;
  boldPrefix?: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Consapevolezza e Ascolto",
    boldPrefix: "Mindfulness:",
    description:
      "Ti aiuto a focalizzarti sul presente e a coltivare una profonda consapevolezza di sé, per comprendere i tuoi vissuti in modo pieno.",
  },
  {
    number: "02",
    title: "Spazio Sicuro e Valorizzazione",
    boldPrefix: "Empatia:",
    description:
      "Creo un ambiente accogliente e non giudicante dove ogni persona può sentirti finalmente compresa e valorizzata nel profondo.",
  },
  {
    number: "03",
    title: "Trasformazione e Risorse",
    boldPrefix: "Crescita:",
    description:
      "Un'evoluzione sostenuta da strategie su misura e nuove intuizioni che emergono, incontro dopo incontro, durante le nostre sedute.",
  },
  {
    number: "04",
    title: "Senso e Serenità",
    description:
      "Insieme cercheremo di dare senso a ciò che accade nel tuo mondo interiore. Acquisirai gli strumenti necessari per affrontare ansie, stress e relazioni difficili, ritrovando la serenità.",
  },
];
