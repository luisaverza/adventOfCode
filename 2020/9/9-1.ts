import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let xmasData = text.split(`\n`);

let xmasNumbers = xmasData.map((string) => parseInt(string));

const PREAMBLE = 25;
let possibilities: number[] = [];

let weakness = xmasNumbers.filter((number, index) => {
  possibilities = [];
  if (index <= PREAMBLE - 1) {
    return false;
  }

  let preamble = xmasNumbers.filter((pnumber, pindex): boolean => {
    return pindex < index && pindex >= index - PREAMBLE;
  });

  preamble.forEach((pnumber) => {
    preamble.forEach((compareNumber) => {
      if (pnumber !== compareNumber) {
        if (!possibilities.includes(pnumber + compareNumber))
          possibilities.push(pnumber + compareNumber);
      }
    });
  });

  return !possibilities.includes(number);
});

console.log(weakness);
