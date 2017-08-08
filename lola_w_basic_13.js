'use strict';

// print 1-255
for (var i = 1; i <= 255; i++){
  console.log(i);
}

//print odds 1-255
for (var i = 1; i <= 255; i++) {
  if(i % 2 !== 0){
    console.log(i);
  }
}

//print Ints and sum 0-255
function printIntsAndSum(){
  var sum = 0;
  for(var i = 1; i <= 255; i++){
    console.log(i);
    sum += i;
    console.log(sum);
  }
}

printIntsAndSum();

//interate and print array
function printArray(arr){
  arr.forEach(function (e){
    console.log(e);
  });
}

//find and print max
function printMax(aa){
  aa.forEach(function(e, index){
    if(Number.isInteger(e) === false){
      aa.splice(index, 1);
    }}); //validate isIntegr

  var max = aa[0];
  for(var i = 0; i < aa.length; i ++) {
    console.log('this is', max);
    if(max < aa[i]){
      max = aa[i];
    }
  }
  return max;
}

//get and print average
function getAverage(arr){
  var sum = 0;
  arr.forEach(function(e){
    if(Number.isInteger(e)){
      sum += e;
    }
  });
  var avg = sum/(arr.length);
  console.log(avg);
}

//array with odds
for(var i = 1 ; i <= 255; i++){
  var array_1 = [];
  array_1.push(i);
}

array_1.forEach(function (e, i){
  if(e % 2 !== 0){
    var arrayOdd = [];
    arrayOdd.push(e);
  }
});

arrayOdd;

//square the value
function sqArrayValue(arr){
  arr.forEach(function(e,i){
    arr[i] = e * e;
  });
  return arr;
}

//greater than y
function greaterThanY(arr, y){
  var count = 0;
  arr.forEach(function(e){
    while(Number.isInteger(e) && Number.isInteger(y)){
      if(e > y){
        count ++;
        console.log(e);
      }
    }
  });
}

//zero out negtive numbers
function zeroOutNegative(arr){
  arr.forEach(function (e, i){
    if(Number.isInteger(e) && e < 0){
      arr[i] = 0;
    }
  });
  return arr;
}

//max min avg
function maxMinAvg(arr) {
  var avg = getAverage(arr);
  var max = printMax(arr);
  var min = printMin(arr);
}

function printMin(arr){
  var min = arr[0];
  arr.forEach(function(e, index){
    if(Number.isInteger(e) === false){
      arr.splice(index, 1);
    }}); //validate isIntegr
  for(var i = 0; i < aa.length; i ++) {
    if(min > aa[i]){
      min = aa[i];
    }
  }
}

//shift array values;
function shiftArray(arr){
  arr.forEach(function(e, i){
    if(i === arr.length - 1){
      arr[i] = 0;
    } else {
      arr[i] = arr[i + 1]
    }
  });
  return arr;
}

//swap string for array negative values
function swayStringForNegative(arr){
  zeroOutNegative(arr);
  arr.forEach(function(e, i){
    if(e === 0){
      arr[i] = 'Dojo';
    }
  });
}
