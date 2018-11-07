function firstDenomination(kindsOfCoins) {
    switch (kindsOfCoins) {
        case 1:
            return 1;
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 25;
        case 5:
            return 50;
        default:
            break;
    }
}
function cc(amount, kindsOfCoins) {
    if (amount === 0) {
        return 1;
    }
    else if (amount < 0 || kindsOfCoins === 0) {
        return 0;
    }
    else {
        return (cc(amount, kindsOfCoins - 1) +
            cc(amount - firstDenomination(kindsOfCoins), kindsOfCoins));
    }
}
/**
 *
 * @param amount
 */
function countChange(amount) {
    return cc(amount, 5);
}
var r = countChange(500);
console.log(r);
