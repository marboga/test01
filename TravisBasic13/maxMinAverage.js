function printMaxMinAverageArrayVals(arr) {
    var max = 0;
    var min;
    var sum = 0;
    var average;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (i === 0) {
            min = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    average = sum / arr.length;
    console.log('Max = ' + max + ',' + ' Min = ' + min + ', ' + 'Average = ' + average);
}

printMaxMinAverageArrayVals([1,2,9,4,0.5,5]);