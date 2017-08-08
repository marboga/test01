function shiftArrayValsLeft(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i !== 0) {
            arr[i-1] = arr[i];
        }
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(shiftArrayValsLeft([1,2,3,5]));