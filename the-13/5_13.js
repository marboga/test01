
//Find and count array values greater than y

function ReturnArrayCountGreaterThanY(arr, y){
 let newArr = arr.filter(function(val) {
   return val > y;
 })
 console.log(newArr)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

ReturnArrayCountGreaterThanY(array, 2)
    
