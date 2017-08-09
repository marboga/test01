// Tests for each function commented out below

var testArr = [7, 13, 9, -3, 4, 22, -30];

function Print1To255() {
  for(var i = 1; i < 256; i++) {
    console.log(i);
  }
}
// Print1To255();

function PrintIntsAndSum0To255() {
  var sum = 0
  for(var i = 1; i < 255; i++) {
    sum += i;
    console.log(i, sum);
  }
}
// PrintIntsAndSum0To255();

function PrintMaxOfArray(arr) {
  var max = arr[0];
  for(i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}
// PrintMaxOfArray(testArr);

function ReturnOddsArray1To255() {
  var result = new Array(128);
  for(i = 0; i < 128; i++) {
    result[i] = 2 * i + 1;
  }
  return result;
}
// var testArr = ReturnOddsArray1To255();
// console.log(testArr[testArr.length -1]);

function ReturnArrayCountGreaterThanY(arr, y) {
  var count = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      count++;
    }
  }
  console.log(count);
}
// ReturnArrayCountGreaterThanY(testArr, 7);

function PrintMaxMinAverageArrayVals(arr) {
  var max = min = arr[0];
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(arr[i] > max) {
      max = arr[i];
    } else if(arr[i] < min) {
      min = arr[i];
    }
  }
  console.log('max is ' + max);
  console.log('min is ' + min);
  console.log('mean is ' + (sum / arr.length));
}
// PrintMaxMinAverageArrayVals(testArr);

function SwapStringForArrayNegativeValues(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
}
// SwapStringForArrayNegativeValues(testArr);
// console.log(testArr);

function PrintOdds1To255() {
  for(var i = 1; i < 256; i += 2) {
    console.log(i);
  }
}
// PrintOdds1To255();

function PrintArrayVals(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// PrintArrayVals(testArr);

function PrintAverageOfArray(arr) {
  sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}
// PrintAverageOfArray(testArr);

function SquareArrayVals(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr[i] = Math.pow(arr[i], 2);
  }
  return newArr;
}
// console.log(SquareArrayVals(testArr));

function ZeroOutNegativeNumbers(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      newArr[i] = 0;
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}
// console.log(ZeroOutNegativeNumbers(testArr));

function ShiftArrayValsLeft(arr) {
  var newArr = new Array(arr.length)
  for(i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i]
  }
  newArr[arr.length - 1] = 0;
  return newArr;
}
console.log(ShiftArrayValsLeft(testArr));
