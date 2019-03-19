/**
 * Additive-Congruential Method for generating random numbers
 */

/**
 * 
 * @param s Number to start with
 * @param b Constant.
 * @param m Constant.
 * @param c Number of most recent values to store in the register
 */
function init(s = 5, b = 31, m = 100, c = 55) {

  console.time("init");

  let a = [],
    j = 0;

  a[0] = s;

  for (let i = 0; i < c; i++) {
    j = j + 1;
    a[j] = (b * a[j - 1] + 1) % m;
    // console.log(`a[${j}]: ${a[j]}`);
  }

  console.timeEnd("init");

  return { a, j };
}

// r: int
function additiveCongruential(r: number, a: Array<number>, j: number, m = 100, m1 = 250): number {
  j = (j + 1) % 55;

  a[j] = (a[(j + 23) % 55] + a[(j + 54) % 55]) % m;

  // console.log(((a[j] / m1) * r) % m1);
  return ((a[j] / m1) * r) % m1;
}

!function (): boolean {

  const { a, j } = init(3.1);
  const length = 10000;

  console.time("random stream");
  for (let i = 0; i < length; i++) {
    let r = additiveCongruential(i, a, j);
    console.log(r);
  }
  console.timeEnd("random stream");

  return true;
}();