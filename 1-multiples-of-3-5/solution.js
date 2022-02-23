const startTime = Date.now()
const output = [];

for (let n = 0; n < 1000; n++) {
  if (n % 3 == 0 || n % 5 == 0) output.push(n);
}

console.log(output.reduce((accum, current) => accum + current));
const endTime = Date.now()
console.log((endTime - startTime), " ms")
