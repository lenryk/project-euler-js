let startTime = Date.now()
const primes = [2]

for (let n = 3; n < 2_000_000; n+=2) {
    let factors = 0
    for (let factor = 2; factor <= Math.sqrt(n); factor++) {
        if(n % factor === 0) factors += 1
    }
    if (!factors) primes.push(n)
}

console.log(primes.reduce((accum, curr) => accum + curr, 0))
let endTime = Date.now()
console.log((endTime - startTime) / 1000, "seconds")
