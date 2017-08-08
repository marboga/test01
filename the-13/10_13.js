
// Print arrays values


function ArrAverage(arr){

  let filteredArr = arr.filter(function(val){
    return typeof val === 'number'
  })

  let newArr = filteredArr.reduce(function(sum, value) {
    if (typeof value === 'number'){
      return sum + value
    }
  }, 0)

  let avg = newArr/arr.length
  console.log(`The avg: ${avg}`)
}

array = [1, 'cat', 2, 3, 4, 5]

ArrAverage(array)
