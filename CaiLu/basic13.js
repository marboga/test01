// Print 1-255
function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}

// Print Odds 1-255
function printOdds1To255() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

// Print Ints and Sum 0-255
function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum += i;
        console.log(i, sum);
    }
}

let arr = [-1, 0, 4, 100];

// Iterate and Print Array
function printArrayVals(arr) {
    arr.forEach(val => {
        console.log(val);
    });
}

// Find and Print Max
function printMaxOfArray(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        if (current > max) {
            max = current;
        }
    }
    
    console.log(max);
}

// Get and Print Average
function printAverageOfArray(arr) {
    let sum = 0;
    
    arr.forEach(val => {
        sum += val;
    });
    
    console.log(sum / arr.length);
}

// Array with Odds
function returnOddsArray1To255() {
    let arr = [];
    for (let i = 1; i <= 255; i += 2) {
        arr.push(i);
    }
    return arr;
}

// Square the Values
function squareArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (arr[i] * arr[i]);
    }
    
    return arr;
}

// Greater than Y
function returnArrayCountGreaterThanY(arr, y) {
    let count = 0;
    arr.forEach(val => {
        if (val > y) {
            count++;
        }
    });
    return count;
}

// Zero Out Negative Numbers
function zeroOutArrayNegativeValues(arr) {
    arr.forEach((val, index, array) => {
        if (val < 0) {
            array[index] = 0;
        }
    });
    return arr;
}

// Max, Min, Average
function printMaxMinAverageArrayVals(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    
    arr.forEach(val => {
        if (val > max) {
            max = val;
        }
        if (val < min) {
            min = val;
        }
        sum += val;
    });
    
    console.log('min:', min, 'max:', max, 'average:', sum/arr.length);
}

// Shift Array Values
function shiftArrayValsLeft(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    
    arr[arr.length - 1] = 0;
    return arr;
}

// Swap String for Array Negative Values
function swapStringForArrayNegativeVals(arr) {
    arr.forEach((val, index, array) => {
        if (val < 0) {
            array[index] = 'dojo';
        }
    });
    return arr;
}