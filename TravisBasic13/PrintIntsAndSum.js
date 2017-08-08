function PrintIntsAndSum0To255() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum += i;
        console.log('Int: ' + i + ', ' + 'Sum: ' + sum);
    }
}

PrintIntsAndSum0To255();