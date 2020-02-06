export function multiplesOf3and5(highWaterMark:number): number {
  let sum = 0;
  for (let i = 1; i < highWaterMark; i++) {
    sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;
  }
  return sum;
}
