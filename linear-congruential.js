/**
 * Linear Congruential Method
 */
function linearCongruential(m, b, a, N) {
  console.time("linearCongruential"); // Start the timer

  for (var i = 2; i < N; i++) {
    a[i] = (a[i - 1] * b + 1) % m;
    console.log(a[i]);
  }

  console.timeEnd("linearCongruential"); // Stop the timer

  return a;
}

// Example values
const m = 1000000000,
  b = 31415821,
  a = [1, 2, 3, 4, 5, 6, 7],
  N = 100;

//   The results are deterministic
const result1 = linearCongruential(m, b, a, N);
const result2 = linearCongruential(m, b, a, N);

console.log(result1 === result2);

