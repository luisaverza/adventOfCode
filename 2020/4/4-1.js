fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split("\n\n");

  const checkPassport = (passport) => {
    let conditions = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    let gambiarra = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];

    let normalValidation = conditions.every((key) => passport.includes(key));
    let gambiValidation = gambiarra.every((key) => passport.includes(key));

    return normalValidation || gambiValidation;
  };

  const howManyValid = input.filter((passport, index) => {
    return checkPassport(passport);
  }).length;

  console.log(howManyValid);
});
