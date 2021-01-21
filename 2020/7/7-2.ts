import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

let bagRules = text.split(`\n`);

type Contain = { qtd: number; bag: string; contain: Contain[] };

let firstContain: Contain[] = [
  {
    qtd: 1,
    bag: "shiny gold",
    contain: [],
  },
];

// let sum = 0;

const addContains = (c: Contain) => {
  if (c.bag) {
    bagRules.forEach((rule) => {
      if (
        rule.includes(c.bag) &&
        rule.startsWith(c.bag) &&
        !rule.includes("no other bags")
      ) {
        const splitBag = rule.split(" ");
        splitBag.forEach((word, index) => {
          if (word >= "1" && word <= "9") {
            // sum = sum + 1;
            const qtd = parseInt(word, 10);
            // for (var i = 0; i < qtd; i++) {
            c.contain.push({
              qtd,
              bag: splitBag[index + 1].concat(" ").concat(splitBag[index + 2]),
              contain: [],
            });
            // }
          }
        });
      }
    });
  }

  c.contain.forEach((c) => {
    addContains(c);
  });
};

addContains(firstContain[0]);

const iterateQtdBags = (contain: Contain[]): number => {
  return contain.reduce((acc, contain) => {
    return contain
      ? acc + contain.qtd + contain.qtd * iterateQtdBags(contain.contain)
      : acc;
  }, 0);
};

console.log(iterateQtdBags(firstContain));
