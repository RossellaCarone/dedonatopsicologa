export interface Stat {
  value: number | string;
  suffix: string;
  label: string;
  isText?: boolean;
}

export const stats: Stat[] = [
  {
    value: 10,
    suffix: "+",
    label: "Anni di esperienza",
  },
  {
    value: 500,
    suffix: "+",
    label: "Pazienti seguiti",
  },
  {
    value: 3,
    suffix: "",
    label: "Specializzazioni",
  },
  {
    value: "Online",
    suffix: "",
    label: "e in presenza",
    isText: true,
  },
];
