const palindromes = []

for(let n = 100; n < 1000; n++) {
    for(let i = 100; i < 1000; i++) {
        let multiplied = String(n * i)
        if (multiplied === multiplied.split("").reverse().join("") && multiplied.length === 6) {
            palindromes.push(multiplied)
        }
    }
}

console.log(palindromes.sort().reverse()[1])
