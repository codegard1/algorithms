function factorial(n) {
    console.time("factorial");
    if (n === 1) {
        console.timeEnd("factorial");
        return 1;
    }
    else {
        console.timeEnd("factorial");
        return n * factorial(n - 1);
    }
}
var r = factorial(50);
console.log(r);
