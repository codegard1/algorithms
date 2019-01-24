function f1(x: number, y: number): number {
  let a: number = (x * y) + 1;
  let b: number = (1 - y);
  return ((a * a) * x) + (y * b) + (a * b);
}

function f(x: number): number {
  return ((x * x * x) - (2 * x) - 3);
}

function isCloseEnough(x: number, y: number): boolean {
  return Math.abs(x - y) < 0.0001;
}

function search(f: Function, negPoint: number, posPoint: number): number {
  let midpoint: number = (negPoint + posPoint) / 2;
  if (isCloseEnough(negPoint, posPoint)) {
    return midpoint;
  } else {
    let testValue: number = f(midpoint);
    if (testValue > 0) {
      return search(f, negPoint, midpoint);
    } else if (testValue < 0) {
      return search(f, midpoint, posPoint);
    } else {
      return midpoint;
    }
  }
}

function halfInterval(f: Function, a: number, b: number): number {
  let aValue = f(a);
  let bValue = f(b);

  if ((aValue < 0) && (bValue > 0)) {
    return search(f, a, b);
  } else if ((bValue < 0) && (aValue > 0)) {
    return search(f, b, a);
  } else {
    console.error("Values are not of opposite sign.");
  }
}

