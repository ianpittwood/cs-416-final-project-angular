export function roundNearest5(x: number | undefined) {
  if (typeof x === "number") return Math.ceil(x/5)*5;
  else return 0;
}
