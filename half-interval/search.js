function f1(x, y) {
    var a = (x * y) + 1;
    var b = (1 - y);
    return ((a * a) * x) + (y * b) + (a * b);
}
function f(x) {
    return ((x * x * x) - (2 * x) - 3);
}
function isCloseEnough(x, y) {
    return Math.abs(x - y) < 0.000001;
}
function search(f, negPoint, posPoint) {
    var midpoint = (negPoint + posPoint) / 2;
    if (isCloseEnough(negPoint, posPoint)) {
        return midpoint;
    }
    else {
        var testValue = f(midpoint);
        if (testValue > 0) {
            return search(f, negPoint, midpoint);
        }
        else if (testValue < 0) {
            return search(f, midpoint, posPoint);
        }
        else {
            return midpoint;
        }
    }
}
function halfInterval(f, a, b) {
    var aValue = f(a);
    var bValue = f(b);
    if ((aValue < 0) && (bValue > 0)) {
        return search(f, a, b);
    }
    else if ((bValue < 0) && (aValue > 0)) {
        return search(f, b, a);
    }
    else {
        console.error("Values are not of opposite sign.");
    }
}
