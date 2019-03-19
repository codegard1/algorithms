function gcd(a: number, b: number): number {
  const result = b === 0
    ? a
    : (gcd(b, (a % b)));
  return result;
}

console.time('gcd');
const r1: number = gcd(824585690, 44935);
console.timeEnd('gcd');

console.log(r1); // 5