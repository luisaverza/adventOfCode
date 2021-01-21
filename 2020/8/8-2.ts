import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let program = text.split(`\n`);

let index = 0;
let passedIndex: number[] = [];
let accumulator = 0;
let hasChanged: boolean = false;
let accChanged = 0;
let passedChanged: number[] = [];

let howMany = program.filter((v) => v.includes("jmp")).length;

while (index < program.length && accChanged < howMany) {
  let [cmd, value] = program[index].split(" ");

  passedIndex.push(index);

  if (!hasChanged && cmd === "jmp" && !passedChanged.includes(index)) {
    passedChanged.push(index);
    cmd = "nop";
    hasChanged = true;
    ++accChanged;
  }

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
    index = 0;
    passedIndex = [];
    hasChanged = false;
    accumulator = 0;
  }
  console.log(accChanged, howMany, hasChanged);
}

console.log(accumulator);
