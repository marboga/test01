function returnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}

console.log(returnArrayCountGreaterThanY([1,2,3,4,5], 2));