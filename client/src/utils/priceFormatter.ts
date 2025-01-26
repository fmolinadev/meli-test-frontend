export const priceFormatter = (number: number): string => {
  return number.toLocaleString("es-ES");
};

export const roundPercentage = (percentage: number): number => {
  return Math.round(percentage);
};
