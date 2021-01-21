import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let xmasData = text.split(`\n`);

let xmasNumbers = xmasData.map((string) => parseInt(string));

const puzzle = 20874512;
// const puzzle = 127;
const indexOfPuzzle = xmasNumbers.findIndex((v) => v === puzzle);

let firstIndex = 0;
let lastIndex = 0;

let weakness = xmasNumbers.forEach((number, index) => {
  if (indexOfPuzzle !== index) {
    let sum = xmasNumbers[index];
    let i = index;

    while (sum < puzzle) {
      sum = sum + xmasNumbers[i + 1];
      ++i;
    }

    if (sum === puzzle) {
      firstIndex = index;
      lastIndex = i;
    }
  }
});

let contiguous = xmasNumbers.filter((v, i) => {
  if (i >= firstIndex && i <= lastIndex) return true;
});

let order = contiguous.sort((a, b) => {
  return a - b;
});

console.log(order[0] + order[order.length - 1]);
