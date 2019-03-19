/**
 * Print "Fizz" for each number that is a multiple of 3
 * Print "Buzz" for each number that is a multiple of 5
 * Print "FizzBuzz" for each number that is both a multiple of 5 and a multiple of 3
 */

/* Configurtion */
const start = 0,
  limit = 100;

console.time("fizzbuzz");
for (var i = start; i < limit; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "fizz";
  }
  if (i % 5 === 0) {
    output += "buzz";
  }
  if (i % 5 !== 0 && i % 3 !== 0) {
    output += i;
  }

  console.log(output);
}
console.timeEnd("fizzbuzz");
