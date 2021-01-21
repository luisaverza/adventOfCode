// Find all possible combinations of settings without repeating

let settings = [0, 1, 2, 3, 4]
let position = 1
let positionFixed = 0
let nextFixed = 0
let combinations = []
let laps = 0

while (nextFixed < 5) {
  let oldFixed = settings[positionFixed]
  let fixed = settings[nextFixed]
  settings[positionFixed] = fixed;
  settings[nextFixed] = oldFixed;

  while (laps !== settings.length - position) {
    let firstValue = settings[position]

    settings[position] = settings[position + 3]
    settings[position + 3] = settings[position + 2];
    settings[position + 2] = settings[position + 1];
    settings[position + 1] = firstValue;
    
    var clone = settings.slice(0);
    combinations.push(clone)

    laps++
  }
  laps = 0
  nextFixed++
}

console.log(combinations)
