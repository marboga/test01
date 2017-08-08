
// Return arrays negative values to 0

function NoNegative(arr){
  let newArr = arr.map(function(val){
    if(val < 0){
      return val = 0
    }
    else {
      return val
    }
  })
  console.log(newArr)
}

let array = [1, 2, -1, -2, 'poop']

NoNegative(array)
