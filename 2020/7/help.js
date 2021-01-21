#!/usr/bin/env node
const run = require("../common/run");
run(prepare, answer);
function prepare(input) {
  return input
    .replace(/bags/gi, "bag")
    .replace(/\./gi, "")
    .split("\n")
    .filter((x) => x);
}
function answer(input) {
  return count(input, "shiny gold bag");
}
function count(input, search) {
  let containers = input
    .map((rule) => check(rule, search))
    .filter((x) => x)
    .flat();

  console.log(containers);
  if (containers.length > 0) {
    return containers.reduce((sum, container) => {
      return container
        ? sum + container.count + container.count * count(input, container.name)
        : sum;
    }, 0);
  }
  return 1;
}
function check(rule, search) {
  let relation = rule.split(" contain ");
  let contents = relation[1].split(",");
  let container = relation[0];
  if (container == search) {
    return contents.map((content) => {
      if (content.includes("no other bag")) return 0;
      let description = content.trim().split(" ");
      let count = +description.shift();
      let name = description.join(" ");
      return { name, count };
    });
  }
}
