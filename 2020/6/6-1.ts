import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

const rawForms = text.split(`\n\n`);

const forms = rawForms.map((rp) => {
  return rp.replace(/\r?\n|\r/g, " ");
});

const unique = forms.map((f) =>
  f
    .split("")
    .filter(function (item, i, ar) {
      return ar.indexOf(item) === i;
    })
    .join("")
    .replace(" ", "")
);

const countUniques = unique.map((u) => {
  const count = u.split("");

  return count.length;
});

console.log(countUniques.reduce((a, b) => a + b, 0));
