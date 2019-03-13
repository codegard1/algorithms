/**
 * 
 * @param n the number to factorialize
 */
function factorial(n: number): number {
  console.time("factorial");
  if (n === 1) {
    console.timeEnd("factorial");
    return 1;
  } else {
    console.timeEnd("factorial");
    return n * factorial(n - 1);
  }
}

!function (): boolean {
  var r: number = factorial(5);

  console.log(r); // 120
  return true;
}

