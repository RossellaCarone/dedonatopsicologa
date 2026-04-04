export interface Stat {
  value: number | string;
  suffix: string;
  label: string;
  isText?: boolean;
}

export const stats: Stat[] = [
  {
    value: "Albo A",
    suffix: "",
    label: "Ordine Psicologi Puglia",
    isText: true,
  },
  {
    value: "Clinico",
    suffix: "",
    label: "e Dinamico",
    isText: true,
  },
  {
    value: "Online",
    suffix: "",
    label: "e in presenza",
    isText: true,
  },
  {
    value: "1ª consulenza",
    suffix: "",
    label: "gratuita",
    isText: true,
  },
];
