let startTime = Date.now()

for (let i = 1; i < 500; i++) {
    if (1000 * (500 - i) % (1000 - i) === 0) {
        let second = 1000 * (500 - i) / (1000 - i)
        let third = ((second ** 2) + (i**2)) ** 0.5
        console.log(Number(i * second * third))
        break
    }
}

let endTime = Date.now()
console.log((endTime - startTime), "ms")
