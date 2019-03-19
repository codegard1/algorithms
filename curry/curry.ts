/**
 * Basic Currying example
 * A curried function that takes multiple paramaters decomposes into 
 * a series of unary functions that each returns a function with a 
 * single parameter. This is possible because the bottmmost closure 
 * has access to all parameters passed to the topmost function
 */

// Normal function
function additionNormal(x: number, y: number): number {
  return x + y;
}

// Curried function
/**
 * @example makeAddition(x)(y) => x + 7
 */
function makeAddition(x: number) {
  return function (y: number) {
    x + y
  };
}

function curry(f) {
  return function (x) {
    return function (y) {
      return f(x, y);
    };
  };
}
