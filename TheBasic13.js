// Print 1-255
function Print1To255() {
	for (var i = 0; i <= 255; i++) {
		console.log(i);
	}
}


// Print Odds 1-255
function PrintOdds1To255() {
	for (var i = 1; i <= 255; i++) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
}


// Print Ints and Sum 0-255
function PrintIntsAndSum0To255() {
	var sumOfNum = 0;
	for (var i = 0; i <= 255; i++) {
		sumOfNum += i;
		console.log(sumOfNum);
	}
}


// Iterate and Print Array
function PrintArrayVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}


// Find and Print Max
function PrintMaxOfArray(arr) {
	var Max = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > Max) {
			Max = arr[i];
		}
	}
	return Max;
}


// Get and Print Average
function PrintAverageOfArray(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	var average = sum / arr.length;
	console.log(average);
}


// Array with Odds
function ReturnOddsArray1To255() {
	var array = [];
	for (var i = 1; i <= 255; i++) {
		if (i % 2 !== 0) {
			array.push(i);
		}
	}
	return array;
}


// Square the Values
function SquareArrayVals(arr) {
	var newArrayValue = 0;
	for (var i = 0; i < arr.length; i++) {
		newArrayValue[i] = Math.pow(arr[i], 2);
		arr[i] = newArrayValue[i];
	}
}


// Greater than Y
function ReturnArrayCountGreaterThanY(arr, y) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			Count++;
		}
	}
	return count;
}


// Zero Out Negative Numbers
function ZeroOutArrayNegativeVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}


// Max, Min, Average
function PrintMaxMinAverageArrayVals(arr) {
	var max = 0;
	var min = 0;
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
			sum += arr[i];
		} elseif (arr[i] < min) {
			min = arr[i];
			sum += arr[i];
		} else {
			sum += arr[i];
		}
	}
	var average = sum / arr.length;
	console.log(max);
	console.log(min);
	console.log(average);
}


// Shift Array Values
function ShiftArrayValsLeft(arr) {
	var lastValue = arr[0];
	arr.shift();
	arr.push(lastValue);
	return arr;
}


// Shift Array Values
function ShiftArrayValsLeft(arr) {
	var temp = arr[0];
	for (var i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i+1];
	}
	arr[arr.length+1] = temp;
}


// Swap String for Array Negative Values
function SwapStringForArrayNegativeVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = “Dojo”;
		}
	}
	return arr;
}