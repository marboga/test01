
// Move all values left by one index and replace the last value with 0

function ShiftArr(arr){
  let cut = arr.length + 1
  let shifted = arr.slice(1, cut)
  shifted.push(0)
  console.log(shifted)
}

let array = [1, 2, 3, 4, 5, 'poop']

ShiftArr(array)
