export interface Stat {
  value: number | string;
  suffix: string;
  label: string;
  isText?: boolean;
}

export const stats: Stat[] = [
  {
    value: 100,
    suffix: "%",
    label: "Percorsi su misura",
  },
  {
    value: 30,
    suffix: " min",
    label: "Prima consulenza gratuita",
  },
  {
    value: "Online",
    suffix: "",
    label: "e in presenza",
    isText: true,
  },
];
