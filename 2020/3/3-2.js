// Right 1, down 1. 84
// Right 3, down 1. 228
// Right 5, down 1. 89
// Right 7, down 1. 100
// Right 1, down 2. 40

// 84 * 228 * 89 * 100 * 40
// Result = 6828112000

fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split("\n");
  let goToRight = 0;

  const howManyTrees = input.filter((slopes, index) => {
    if (!index) return false;
    // if (index % 2 === 0) {

    const mapSlope = slopes.split("");

    goToRight = goToRight + 1;

    if (goToRight > 30) {
      goToRight = goToRight - 31;
    }

    if (mapSlope[goToRight] === "#") {
      return true;
    }

    return false;
    // }
  }).length;

  console.log(howManyTrees);
});
