/**
 * "One way to test if a number is prime is to find
 * the number's divisors. The following program finds
 * the smallest integral divisor (greater than 1) of
 * a given number n. It does this in a straightforward
 * way, by testing n for divisibility by successive
 * integers starting with 2.
 */
/**
 * Returns true if _a_ divides evenly into _b_
 * @param a the divisor
 * @param b the dividend
 */
function divides(a, b) {
    return b % a === 0;
}
/**
 *
 * @param n
 * @param testDivisor
 */
function findDivisor(n, testDivisor) {
    if (testDivisor * testDivisor > n) {
        return n;
    }
    else if (divides(testDivisor, n)) {
        return testDivisor;
    }
    else {
        return findDivisor(n, testDivisor + 1);
    }
}
function smallestDivisor(n) {
    return findDivisor(n, 2);
}
function isPrime(n) {
    return n === smallestDivisor(n);
}
var r = isPrime(101);
console.log(r); // true
