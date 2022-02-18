const naturalNumbers = 100
const naturalNumbersArr = []
let squareSum = 0

for (let n = 1; n < naturalNumbers + 1; n++) {
    naturalNumbersArr.push(n ** 2)
}
let naturalNumbersSum = naturalNumbersArr.reduce((accum, prev) => accum + prev, 0)

for (let n = 0; n < naturalNumbers + 1; n++) {
    squareSum += n
}

console.log((squareSum ** 2) - naturalNumbersSum)
