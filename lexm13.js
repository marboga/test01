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
// var testArr = [7, 13 ,9 ,-3 , 4, 22, -30];
// PrintMaxOfArray(testArr);

function ReturnOddsArray1To255() {
  var result = new Array(128);
  for(i = 0; i < 128; i++) {
    result[i] = 2 * i + 1;
  }
  return result;
}

console.log(ReturnOddsArray1To255());
