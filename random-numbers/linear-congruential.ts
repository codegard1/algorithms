/**
 * @
 * @param m Constant. Should be large, a power of 10 or 2. e.g. 10^9
 * @param b Constant. Should be medium-sized: a number with one less digit than _m_. Also, _b_ should end with _x21_, where _x_ is an even number. This helps prevent "bad cases". e.g. 31415821
 * @param a Array of registers. e.g. [1,2,3,4,5,6,7]
 * @param N Number of times to iterate the function. e.g. 100
 */
function linearCongruential(m: number, b: number, a: Array<number>, N: number) {
  console.time("linearCongruential"); // Start the timer

  for (let i = 2; i < N; i++) {
    a[i] = (a[i - 1] * b + 1) % m;
    console.log(a[i]);
  }

  console.timeEnd("linearCongruential"); // Stop the timer

  return a;
}

!function (): boolean {
  // Example values
  const m = 1000000000,
    b = 31415821,
    a = [1, 2, 3, 4, 5, 6, 7],
    N = 100;

  //   The results are deterministic
  const result1 = linearCongruential(m, b, a, N);
  const result2 = linearCongruential(m, b, a, N);

  return result1 === result2; // true
}();
