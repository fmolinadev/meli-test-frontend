export const priceFormatter = (number: number): string => {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  const arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
};

export const roundPercentage = (percentage: number): number => {
  return Math.round(percentage);
};
