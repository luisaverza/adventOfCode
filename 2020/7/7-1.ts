import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let bagRules = text.split(`\n`);

let canEventuallyContain: string[] = ["shiny gold"];

let bagCounter = 0;

const iterate = (bag: string) => {
  if (bag) {
    let sizeOfBag: number = bag.split("").length;
    let ruleToRemoveFromBagRules: string[] = [];

    bagRules.forEach((rule) => {
      if (rule.includes(bag) && rule.substring(0, sizeOfBag) !== bag) {
        canEventuallyContain.push(rule.split(" ").slice(0, 2).join(" "));
        ruleToRemoveFromBagRules.push(rule);
      }
      if (rule.substring(0, sizeOfBag) === bag) {
        ruleToRemoveFromBagRules.push(rule);
      }
    });

    bagRules = bagRules.filter((rule) => {
      return !ruleToRemoveFromBagRules.includes(rule);
    });

    if (bagRules.length) {
      ++bagCounter;
      iterate(canEventuallyContain[bagCounter]);
    }
  }
};

iterate(canEventuallyContain[bagCounter]);

console.log(canEventuallyContain.length - 1);
