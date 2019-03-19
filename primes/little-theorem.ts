/**
 * Fermat's little theorem:
 * If n is a prime number and a is any positive integer less than n,
 * then a raised to the nth power is congruent to a modulo n. If n 
 * is not prime, then, in general, most numbers a < n will not satisfy 
 * this condition. 
 */

/**
 * Compute the exponential of a number modulo another number.
 * Given a number n, pick a random number a < n and compute the remainder 
 * of a^n % n. If the result is not equal to a, then n is certainly not
 * prime. If it is a, there is a good chance n is prime. 
 * @param base 
 * @param exp the exponent
 * @param m 
 */
function expmod(base: number, exp: number, m: number): number {
  if (exp === 0) {
    return 1;
  } else if (exp % 2 === 0) {
    const n: number = (expmod(base, (exp / 2), m));
    return (n * n) % m;
  } else {
    const n: number = (expmod(base, (exp - 1), m)) * base;
    return n % m;
  }
}

/**
 * Return a random number given a specified maximum
 * @param max Maximum number to return
 */
function random(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * The Fermat Test is performed by choosing a random number a between
 * 1 and n - 1 inclusive and checking whether the remainder modulo n 
 * of the nth power of a is equal to a.
 * @param a Random number between 1 and n - 1 inclusive
 * @param n Number to test
 */
function fermatTest(n: number): boolean {
  let a = random(n - 1) + 1;
  let b = expmod(a, n, n);

  console.log(`a: ${a} | b: ${b}`);

  return (b === a);
}

/**
 * Runs the test a given number of times. Returns true if the test 
 * succeeds every time, and false otherwise. 
 * @param n Number to test for primeness
 * @param times Number of times to test the number
 */
function fastPrime(n: number, times: number): boolean {
  console.time('fastPrime');

  if (times === 0) {
    console.timeEnd('fastPrime');
    return true;
  } else if (fermatTest(n)) {
    return fastPrime(n, (times - 1))
  } else {
    console.timeEnd('fastPrime');
    return false;
  };
}

!function (): boolean {

  let n = 6241988;
  let b = fastPrime(n, 1000);

  if (b) {
    console.log(`${n} is prime.`);
  } else {
    console.log(`${n} is not prime.`);
  };

  return b;
}();