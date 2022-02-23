let startTime = Date.now()
let number = 600851475143;
const factors = []
let finished = false
let divide = 2

while(!finished) {
    if (number % divide !== 0) {
        if (divide < number) {
            divide++
        } else {
            finished = true
        }
        
    } else {
        factors.push(divide)
        number = number / divide
        divide = 2
    }
}

console.log(factors.sort((a,b) => a - b)[factors.length - 1])
let endTime = Date.now()
console.log((endTime - startTime), " ms")
