import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

const rawForms = text.split(`\n\n`);

const forms = rawForms.map((rp) => {
  return rp.replace(/\r?\n|\r/g, " ");
});

const howManyRepeted = forms.map((f) => {
  const groupAwnserString = f.split(" ");

  let groupAwnserArrayLetters = groupAwnserString.map((ga, i) => ga.split(""));

  const result = groupAwnserArrayLetters.reduce((a, b) =>
    a.filter((c) => b.includes(c))
  );

  return result.length;
});

console.log(howManyRepeted.reduce((a, b) => a + b, 0));
