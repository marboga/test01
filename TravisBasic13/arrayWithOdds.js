function returnOddsArray1To255() {
    var oddsArray =[];
    for (var i = 0; i <= 255; i++) {
        if (i % 2 !== 0) {
            oddsArray.push(i);
        }
    }
    return oddsArray;
}

console.log(returnOddsArray1To255());