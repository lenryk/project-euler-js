const startTime = Date.now()
let finished = false
let i = 1

while(!finished) {
    let counter = 0
    let largestNum = 20
    for (let n = 1; n < largestNum + 1; n++) {
        if (i % n === 0) counter++
        if (counter === largestNum) {
            console.log(i)
            finished = true
        }
    }
    i++
}

const endTime = Date.now()
console.log((endTime - startTime) / 1000, " s")
