//Print 1-255
function Print1To255(){
    for (var i=1; i <256; i++){
        console.log(i);
    }
}

Print1To255();

// Print Odds 1-255
function PrintOdds1To255(){
    for (var i=1; i<256; i+=2){
        console.log(i);
    }
} 
PrintOdds1To255();

// Print Ints and Sum 0-255
function PrintIntsAndSum0To255(){
    var total = 0;
    for (var i=0; i <256; i++){
        console.log(i);
        total += i;
        console.log(total);   
    }
    
}
PrintIntsAndSum0To255();


// Iterate and Print Array
function PrintArrayVals(arr){
    
    for (var i=0; i<arr.length; i++){
        console.log(arr[i])
    }

}
PrintArrayVals(arr)

// Find and Print Max
function PrintMaxOfArray(arr){
    for (var i=0; i<arr.length; i++){
       var max = 0
        if (i > max){
            max = i
        }
    }
}
PrintMaxOfArray(arr)
//negative numbers....

// Get and Print Average
function PrintAverageOfArray(arr){
    var total = 0;
        for (var i=0; i<arr.length; i++){
            total += arr[i];
        }
    average = total/arr.length
    console.log(average)
}
PrintAverageOfArray(arr);

// Array with Odds
function ReturnOddsArray1To255(){
    var arr=[];
    for (var i=1; i<256; i+=2){
        arr.push(i);
    }
    console.log(arr);
}
ReturnOddsArray1To255();

// Square the Values
function SquareArrayVals(arr){
        for (var i=0; i<arr.length; i++){
            square = arr[i]*arr[i];
            arr[i] = square;

        }
}
console.log(SquareArrayVals(arr))
//undefined...


// Greater than Y
function ReturnArrayCountGreaterThanY(){
    var total = 0; 
    for (var i=0; i<arr.length; i++){
        if (arr[i] > y){
            total += i;
        }
    } 
    console.log(total)
}
console.log(ReturnArrayCountGreaterThanY())

// Zero Out Negative Numbers
function ZeroOutArrayNegativeVals(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr)
}
console.log(ZeroOutArrayNegativeVals(arr))


// Max, Min, Average
function PrintMaxMinAverageArrayVals(){
    var max = 0;
    var min = 0;
    var total = 0;
    for (var i=0; i<arr.length; i++){
        if (i > max){
            max = i;
            //something is wrong here
        }
        if (i < min){
            min = i;
        }{
         total += arr[i];}
    }
    average = total/arr.length
    console.log(average,max,min)
}
PrintMaxMinAverageArrayVals()

//but what about negative numbers...


// Shift Array Values
function ShiftArrayValsLeft(){
    for(var i = arr.length - 1;i=0;i--){
        if(i>0){
        arr[i] = arr[i-1];
        }
        else{
            arr[i]=0
            }

        }
         console.log(arr);
 
    }
ShiftArrayValsLeft()
//not quite there yet

// Swap String For Array Negative Values
