/**
 * INSERTION SORT
 * from INtroduction to Algorithms (Cormen, Leiserson, Rivest)
 */
function insertionSort(inputArray) {
    console.time("sort");
    var counter = 0;
    for (var j = 1; j < inputArray.length; j++) {
        var key = inputArray[j];
        var i = j - 1;
        while (i >= 0 && inputArray[i] > key) {
            inputArray[i + 1] = inputArray[i];
            i = i - 1;
            console.log(inputArray);
            counter++;
        }
        inputArray[i + 1] = key;
        counter++;
    }
    console.timeEnd("sort");
    console.log("steps: ", counter.toString());
    return inputArray;
}
var a1 = [101, 100, 4, 15, 34, 78, 45, 33, 26, 98];
var a2 = [101, 100, 98, 78, 45, 34, 33, 26, 15, 4];
var a3 = [4, 15, 26, 33, 34, 45, 78, 98, 100, 101];
console.log(insertionSort(a3));
