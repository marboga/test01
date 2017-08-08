
// square each value

function SquareArr(arr){
  let squared = arr.map(function(val){
    return val * 2
  })
  console.log(squared)
}

let array = [1, 2, 3, 4, 5, 'poop']

SquareArr(array)
