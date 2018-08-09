/**
 * Additive-Congruential Method for generating random numbers
 */

// Constant values
const b = 31,
  c = 55, // number of most recent values to store in the register
  m = 100,
  m1 = 250,
  r = 31415821;

// s: int
function init(s) {
  console.time("init");

  let a = [],
    j = 0;

  a[0] = s;

  for (let i = 0; i <= 54; i++) {
    j = j + 1;
    console.log("j:", j);

    a[j] = (b * a[j - 1] + 1) % m;
    console.log("a[j]:", a[j]);
  }

  console.timeEnd("init");

  return { a, j };
}

// r: int
function randomInt(r, a, j) {
  j = (j + 1) % 55;

  a[j] = (a[(j + 23) % 55] + a[(j + 54) % 55]) % m;

  console.log(((a[j] / m1) * r) % m1);
  return ((a[j] / m1) * r) % m1;
}

let { a, j } = init(5);

console.time("random stream");
for (var i = 0; i < 1000; i++) {
  randomInt(i, a, j);
}
console.timeEnd("random stream");
