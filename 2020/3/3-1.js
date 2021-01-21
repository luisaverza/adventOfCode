fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split("\n");
  let goToRight = 0;

  const howManyTrees = input.filter((slopes, index) => {
    if (!index) return false;

    const mapSlope = slopes.split("");

    goToRight = goToRight + 3;

    if (goToRight > 30) {
      goToRight = goToRight - 31;
    }

    if (mapSlope[goToRight] === "#") {
      return true;
    }

    return false;
  }).length;

  console.log(howManyTrees);
});
