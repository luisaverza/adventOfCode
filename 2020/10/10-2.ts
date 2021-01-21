import { readFileSync } from "fs";

const text = readFileSync("./small.txt", "utf-8");

let adaptersText = text.split(`\n`);
let adapters = adaptersText.map((string) => parseInt(string));
let sortedAdapters = adapters.sort((a, b) => {
  return a - b;
});

let biggerNumber = sortedAdapters[sortedAdapters.length - 1];
let combinations: number[][] = [[0]];
let keepRepeat = true;

let count: number = 0;

let repeat = (combinations: number[][]) => {
  while (count <= 5) {
    let addCombi: number[][] = [];
    let newCombi: number[][] = combinations.map((combi) => {
      let last = combi[combi.length - 1];
      let next = adapters.filter((a) => a - last <= 3 && a - last > 0);

      // if (next.length > 1) {
      //   next.forEach((n, i) => !i && addCombi.push([...combi, n]));
      // }

      return [...combi, next[0]];
    });

    console.log(newCombi);
    ++count;
    repeat(newCombi);
  }
};

repeat(combinations);

// console.log(combinations);
