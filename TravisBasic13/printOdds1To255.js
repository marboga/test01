function PrintOdds1To255() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

PrintOdds1To255();