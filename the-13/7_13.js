
// Given an array of numbers, replace any negative values with 'Dojo'

function DojoForNeg(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 'Dojo'
    }
  }
  console.log(arr)
}

let array = [-1, 2, -1, 0, 'cat', 7]

DojoForNeg(array)
