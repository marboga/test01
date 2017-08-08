function Print1To255(){
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
};

function PrintIntsAndSum0To255(){
    var sum = 0
    for (var i = 0 - 1; i < 255; i++) {
        console.log(i);
        sum += i;
    }
};

function PrintMaxOfArray(arr){
    return arr.sort()[arr.length - 1];
};

function ReturnOddsArray1To255(){
    var numbers = [];
    for (var i = 1 - 1; i < 256; i++) {
        if (i%2 != 0) {
            numbers.push(i);
        }
    }
};

function ReturnArrayCountGreaterThanY(arr,y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
            console.log(arr[i]);
        }
    }
}

function PrintMaxMinAverageArrayVals(arr) {
    var temp = arr.sort();
    console.log(temp[temp.length - 1]);
    console.log(temp[0]);
    console.log((temp.reduce(function (a,b) {
        return a+b;
    })) / temp.length);
}

function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
}

function PrintOdds1To255() {
    for (var i = 1 - 1; i < 256; i++) {
        if (i%2 != 0) {
            console.log(i)
        }
    }
}

function PrintArrayVals(arr) {
    arr.map(function (a) {
        console.log(a);
        return a
    })
}

function PrintAverageOfArray(arr) {
    temp = arr.sort();
    console.log((temp.reduce(function (a,b) {
        return a+b;
    })) / temp.length);
}

function SquareArrayVals(arr) {
    return arr.map(function(a) {return a**2});
}

function ZeroOutArrayNegativeValues(arr) {
    return arr.map(function(a) {
        if (a < 0) {
            return 0
        }
        else
            return a
    })
}

function ShiftArrayValsLeft(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = 0
}