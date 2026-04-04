export const fadeUpConfig = {
  threshold: 0.12,
  staggerDelay: 80,
};

export const counterConfig = {
  duration: 2000,
  easing: (t: number): number => 1 - Math.pow(1 - t, 3), // ease-out cubic
};
