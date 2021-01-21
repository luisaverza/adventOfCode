import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let adaptersText = text.split(`\n`);
let adapters = adaptersText.map((string) => parseInt(string));

let sortedAdapters = adapters.sort((a, b) => {
  return a - b;
});

let countThrees = 0;
let countOnes = 0;

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19];

sortedAdapters.forEach((jolts, index) => {
  if (!index) {
    if (jolts === 3) {
      ++countThrees;
    } else {
      ++countOnes;
    }
  }

  if (index !== sortedAdapters.length - 1) {
    if (sortedAdapters[index + 1] - jolts === 3) {
      ++countThrees;
    } else {
      ++countOnes;
    }
  }

  if (index === sortedAdapters.length - 1) {
    ++countThrees;
  }
});

console.log(countThrees * countOnes);
// console.log(sortedAdapters);
