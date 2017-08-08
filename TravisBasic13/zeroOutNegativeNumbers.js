function zeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(zeroOutArrayNegativeVals([-3, -2, -1, 5, 1, 2, 3]));