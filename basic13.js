function print1To255(){
  for(var i = 1; i <= 255; i++){
    console.log(i)
  }
}

print1To255();

function printIntsAndSum0To255(){
  var sum = 0;
  for(var i = 0; i <= 255; i++){
     sum += i;
    console.log(sum);
  }
}

printIntsAndSum0To255();

function printOddsTo255(){
  for(var i = 1; i <= 255; i++){
     if(i % 2 !== 0){
    console.log(i);
    }
  }
}

printOddsTo255();


function printArrayVals(arr){
  for (var i=0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

var newArray = [1,2,3,4];

printArrayVals(newArray);



function printMaxOfArray(arr){
  var counter = arr[0];
  for (var i=0; i < arr.length; i++){
    if (arr[i] > counter){
      counter = arr[i];
    }
  }
  console.log(counter)
}

var newArray = [-1,2,-3,-4];

printMaxOfArray(newArray);


function printAverageOfArray(arr){
  var average = 0;
  for (var i=0; i < arr.length; i++){
    average += arr[i];
    }
  
  average = average/arr.length;
  console.log(average);
}

var newArray = [1,2,-3,4];

printAverageOfArray(newArray);

function returnOddsTo255(){
  var newArray = [];
  for(var i = 1; i <= 255; i++){
     if(i % 2 !== 0){
    newArray.push(i)
    }
  }
  return newArray;
}

returnOddsTo255();

function squareArrayVals(arr){
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
     newArray.push(arr[i]*arr[i]);
    }
  arr = newArray;
  return arr;
}

var squared = [2,4,6,8]

squareArrayVals(squared);


function returnArrayCountGreaterThanY(arr, y){
  var counter = 0;
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > y){
      newArray.push(arr[i]);
      counter++;
    }
  }
  console.log('Array had ' + counter + ' values greater than ' + y + '. Here are the values: '+ newArray);
}

 var compareArray = [1,2,3,6,7,8];
 
 var compareVal = 5;
 
 returnArrayCountGreaterThanY(compareArray, compareVal)


 function zeroOutArrayNegativeVals(arr){
  var zero = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = zero;
    }
  }
  return arr;
}


zeroOutArrayNegativeVals([1,2,-3,4,-5])


function printMaxMinAverageArrayVals(arr){
  var average = 0;
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    average += arr[i];
  }
  average = average/arr.length;
  console.log(min)
  console.log(max)
  console.log(average)

}


printMaxMinAverageArrayVals([1,2,3,4,0])


function shiftArrayValsLeft(arr){
  var length = arr.length - 1;
  var end = 0;
  for(var i = 1; i < arr.length; i++){
    arr[i-1] = arr[i];
  }
  arr[length] = end;
  return arr;
}

shiftArrayValsLeft([1,2,3,4,5])


function swapStringForArrayNegativeVals(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      newArr.push('Dojo');
    } else{
      newArr.push(arr[i]);
    }
  }
    return newArr;
  }



swapStringForArrayNegativeVals([1,-3,4,-5,6])

