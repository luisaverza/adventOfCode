fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split("\n");
  // console.log(input)

  const validPasswordCount = input.filter((policy) => {
    const split = policy.split(" ");
    const minMax = split[0].split("-");

    const password = split[2];
    const letter = split[1].charAt(0);
    const min = minMax[0];
    const max = minMax[1];

    const passArray = password.split("");

    const showCount = passArray.filter((x) => x == letter).length;

    return showCount >= min && showCount <= max;
  }).length;

  console.log(validPasswordCount);
});
