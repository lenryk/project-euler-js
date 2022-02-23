const startTime = Date.now()

function findNPrimeNumber(n) {
    let counter = 2
    let number = 3

    while(n + 1 !== counter) {
        if (checkPrime(number) <= 2) counter++
        number++
    }

    return number - 1
}

function checkPrime(number) {
    let counter = 1

    for (let prime = 2; prime < number + 1; prime++) {
        if (number % prime === 0) {
            counter++
        } else if (counter > 2) {
            break
        }
    }

    return counter
}

console.log(findNPrimeNumber(10_001))
const endTime = Date.now()
console.log((endTime - startTime) / 1000, " s")
