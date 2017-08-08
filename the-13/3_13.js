//find and log largest number of an array

function PrintMaxOfArray(arr){
  let largest = 0
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > largest && typeof arr[i] === 'number'){
	largest = arr[i]
    }
  }
  console.log(largest)
}

let array = [2, 3, 4, 'cat', '1000000', 100, 2]

PrintMaxOfArray(array)

