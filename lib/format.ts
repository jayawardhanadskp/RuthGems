export function formatLkr(amount: number) {
  return `LKR ${amount.toLocaleString("en-LK")}`;
}

export function formatCarat(carat: number) {
  return `${carat.toFixed(2)} ct`;
}
