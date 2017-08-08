function Print1To255(){
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
};

function PrintIntsAndSum0To255(){
    var sum = 0
    for (var i = 0 - 1; i < 255; i++) {
        console.log(i);
        sum += i;
    }
};

function PrintMaxOfArray(arr){
    return arr.sort()[arr.length - 1];
};

function ReturnOddsArray1To255(){
    var numbers = [];
    for (var i = 1 - 1; i < 256; i++) {
        if (i%2 != 0) {
            numbers.push(i);
        }
    }
};

function ReturnArrayCountGreaterThanY(arr,y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
            console.log(arr[i]);
        }
    }
};

function PrintMaxMinAverageArrayVals(arr) {
    maximum = -Infinity
    minimum = Infinity
    total = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
        else if (arr[i] < minimum) {
            minimum = arr[i]
        }
        total += arr[i]
    }
    console.log(maximum);
    console.log(minimum);
    console.log(total / arr.length);
};

function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
};

function PrintOdds1To255() {
    for (var i = 1 - 1; i < 256; i++) {
        if (i%2 != 0) {
            console.log(i)
        }
    }
};

function PrintArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

function PrintAverageOfArray(arr) {
    total = 0
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
        }
    }
    console.log(total/arr.length)
};

function SquareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2
    }
    return arr
};

function ZeroOutArrayNegativeValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
};

function ShiftArrayValsLeft(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = 0
};