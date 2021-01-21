fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf8");

const rawPassports = text.split("\n\n");

const passports = rawPassports.map((rp) => {
  return rp.replace(/\r?\n|\r/g, " ");
});

let requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let requiredFieldsPassingCid = [
  "byr",
  "iyr",
  "eyr",
  "hgt",
  "hcl",
  "ecl",
  "pid",
  "cid",
];

let passportsWithRequiredFields = passports.filter((passport) => {
  return passport.includes("cid")
    ? requiredFieldsPassingCid.every((k) => passport.includes(k))
    : requiredFields.every((k) => passport.includes(k));
});

let validPassport = passportsWithRequiredFields.filter((passport) => {
  const fields = passport.split(" ");

  const isValidFields = fields.map((field) => {
    let keyValue = field.split(`:`);

    if (keyValue[0] === "hgt") {
      // hgt (Height) - a number followed by either cm or in:
      // If cm, the number must be at least 150 and at most 193.
      // If in, the number must be at least 59 and at most 76.
      const unity = keyValue[1].slice(-2);
      const toNumber = parseInt(keyValue[1]);

      if (unity === "cm") {
        return toNumber >= 150 && toNumber <= 193;
      }
      if (unity === "in") {
        return toNumber >= 59 && toNumber <= 76;
      }
    }
    if (keyValue[0] === "iyr") {
      // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
      const toNumber = parseInt(keyValue[1]);
      return toNumber >= 2010 && toNumber <= 2020;
    }
    if (keyValue[0] === "ecl") {
      let eyeColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

      return eyeColor.some((color) => color === keyValue[1]);
    }

    if (keyValue[0] === "hcl") {
      // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
      return /^#[0-9A-F]{6}$/i.test(keyValue[1]);
    }

    if (keyValue[0] === "byr") {
      // byr (Birth Year) - four digits; at least 1920 and at most 2002.
      const toNumber = parseInt(keyValue[1]);
      return toNumber >= 1920 && toNumber <= 2002;
    }

    if (keyValue[0] === "eyr") {
      // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
      const toNumber = parseInt(keyValue[1]);
      return toNumber >= 2020 && toNumber <= 2030;
    }

    if (keyValue[0] === "pid") {
      // pid (Passport ID) - a nine-digit number, including leading zeroes.
      const bananaSplit = keyValue[1].split("").length;
      return bananaSplit === 9;
    }

    if (keyValue[0] === "cid") {
      return true;
    }

    return false;
  });

  return isValidFields.every((v) => v);
});

console.log(validPassport.length);
