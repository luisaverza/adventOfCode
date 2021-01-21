fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split("\n");

  const validPasswordCount = input.filter((policy) => {
    const split = policy.split(" ");
    const minMax = split[0].split("-");

    const password = split[2];
    const letter = split[1].charAt(0);
    const min = minMax[0];
    const max = minMax[1];

    const passArray = password.split("");

    const firstPosition = password.charAt(min - 1);
    const secondPosition = password.charAt(max - 1);

    let valid;
    if (firstPosition === letter && secondPosition === letter) {
      valid = false;
    } else if (firstPosition === letter) {
      valid = true;
    } else if (secondPosition === letter) {
      valid = true;
    } else {
      valid = false;
    }

    return valid;
  }).length;

  console.log(validPasswordCount);
});
