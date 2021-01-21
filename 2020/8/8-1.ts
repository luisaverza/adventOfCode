import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let program = text.split(`\n`);

let doNotRepeat = true;
let index = 0;
let passedIndex: number[] = [];
let accumulator = 0;

while (doNotRepeat) {
  let [cmd, value] = program[index].split(" ");

  passedIndex.push(index);

  if (cmd === "nop") {
    ++index;
  }
  if (cmd === "acc") {
    accumulator = accumulator + parseInt(value);
    ++index;
  }
  if (cmd === "jmp") {
    index = index + parseInt(value);
  }

  if (passedIndex.includes(index)) {
    doNotRepeat = false;
  }
}

console.log(accumulator);
