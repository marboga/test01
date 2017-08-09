var arr = [3,4,5,22,-9,66,-90];

function Print1To255(){
    for(i=1;i<=255;i++){
        console.log(i);
    }
}
Print1To255();

function PrintIntsAndSum0To255(){
    var sum = 0;
    for(i=1;i<=255;i++){
        console.log(i);
        sum = sum + i;
        console.log(sum);        
    }
}
PrintIntsAndSum0To255();


var arr = [1,5,8,3,5,0];
function PrintMaxOfArray(arr){
    var greatest = 0;
    for (i=0;i<arr.length;i++){
        if (arr[i] > greatest){
            greatest = arr[i];
        }
        else{
            }
    }
        console.log(greatest);

    return greatest;
}
PrintMaxOfArray(arr);

function ReturnOddsArray1To255(){
    var roa = [];
    for(i=1;i<=255;i++){
        if(i%2!=0){
        roa.push(i);
        }
    else{}
    }
console.log(roa);
    return roa;
}

ReturnOddsArray1To255();


ReturnOddsArray1To255();

var y = 10;
var arr = [1,3,5,8,11,55,66];
function ReturnArrayCountGreaterThanY(arr,y){
count = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]>y){
            console.log(arr[i]);
            count = count +1;
        }
        else{
            count = count;
        }
    }
    console.log(count);
}

ReturnArrayCountGreaterThanY (arr,y);


function PrintMaxMinAverageArrayVals(arr){
        var max = -Infinity
        var min = Infinity
        var sum = 0
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
        if(arr[i]>max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    var average = sum / arr.length;
    console.log(max);
    console.log(min);
    console.log(average);
}
PrintMaxMinAverageArrayVals(arr);
function SwapStringForArrayNegative(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}

SwapStringForArrayNegative(arr);
function PrintOdds1to255(){
    for(i=1;i<=255;i++){
        if(i%2===0){
            
        }
        else{
            console.log(i);
        }
    }
}
PrintOdds1to255();
function PrintArrayVals(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

PrintArrayVals(arr);
function PrintAverageOfArray(arr){
        var sum = 0
        var count = 0
    for(i=0;i<arr.length;i++){
        count = count + 1;
        sum = sum + arr[i];
    }
    var average = sum / count;
    console.log(average);
}
PrintAverageOfArray(arr);
function SquareArrayVals(arr){
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
    return (arr);
}
SquareArrayVals(arr);
function ZeroOutArrayNegativeVals(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

ZeroOutArrayNegativeVals(arr);


function ShiftArrayValsLeft(arr){
    for(i=0; i<(arr.length - 1);i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
}


ShiftArrayValsLeft(arr);