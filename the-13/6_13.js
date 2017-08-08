
//Print the max min and average for an array

function MaxMinAverage(arr){
  PrintMaxOfArray(arr)
  PrintMinOfArray(arr)
  ArrAverage(arr)
}

function PrintMaxOfArray(arr){
  let largest = 0
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > largest && typeof arr[i] === 'number'){
        largest = arr[i]
    }
  }
  console.log(`The max: ${largest}`)
}

function PrintMinOfArray(arr){
  let smallest = arr[0] 
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > smallest && typeof arr[i] === 'number'){
        largest = arr[i]
    }
  }
  console.log(`The min: ${smallest}`)
}

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

let array = [2, 3, 4, 5, 100]

MaxMinAverage(array) 
