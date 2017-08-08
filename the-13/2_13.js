function PrintIntsAndSum0to255(num) {
    let total = 0
    for (let i = 1; i <= num; i++) {
        total = total + i
        console.log(`Round: ${i} Count: ${total}`)
    }
}

PrintIntsAndSum0to255(255)