const startTime = Date.now()

function calcFibs(maxLimit) {
  let fibs = [0, 1];
  while (fibs[fibs.length - 1] < maxLimit) {
    fibs.push(
      fibs
        .slice(fibs.length - 2, fibs.length)
        .reduce((accum, current) => accum + current)
    );
  }

  return fibs
    .filter((num) => num % 2 == 0)
    .reduce((accum, current) => accum + current);
}

console.log(calcFibs(4_000_000));
const endTime = Date.now()
console.log((endTime - startTime), " ms")
