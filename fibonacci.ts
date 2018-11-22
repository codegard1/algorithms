/**
 * Calculates the sum of a Fibonacci sequence of length N
 * @param n the length of the sequence to compute
 */
function fibo(n: number): number {

  if (n < 1) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibo(n - 2) + fibo(n - 1);
  }
}

console.time('test1');
console.log(fibo(10)); // 55
console.timeEnd('test1');

console.time('test2');
console.log(fibo(40)); // 102334155
console.timeEnd('test2');

console.time('test3');
console.log(fibo(45)); // 1134903170
console.timeEnd('test3');
