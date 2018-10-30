/**
 * Compute the square root of 2 using 1 as a guess
 */

function sqrt(operand: number, guess: number): number {
  const quotient: number = operand / guess;
  const average: number = (quotient + guess) / operand;
  return average;
}

sqrt(2, 1); // 1.5

/**
 * "A guess is improved by averaging it with the quotient of the radicand and the old guess:"
 */
function improve(guess: number, x: number): number {
  return (x / guess + guess) / 2;
}

/**
 * "The idea is to improve the answer until it is close enough so that its square differs from the radicand by less than a predetermined tolerance (here 0.001):"
 */
function goodEnough(guess: number, x: number): boolean {
  const tolerance = 0.001;
  return Math.abs(guess * guess - x) < tolerance;
}

function sqrIter(guess: number, x: number): number {
  if (goodEnough(guess, x)) {
    return guess;
  } else {
    return sqrIter(improve(guess, x), x);
  }
}

console.log(sqrIter(1, 2)); // 1.4142156862745097
console.log(sqrIter(10, 100)); // 10
console.log(sqrIter(1, 5)); // 2.2360688956433634
console.log(sqrIter(2, 16)); // 4.0000001858445895
console.log(4.0000001858445895 * 4.0000001858445895); //16.00000148675675
