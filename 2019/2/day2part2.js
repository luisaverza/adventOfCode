// Advent Of Code # day 2 part 2
const doTheMagic = (memory, index, instruction) => {
  let paramOne = memory[index + 1];
  let paramTwo = memory[index + 2];
  let paramThree = memory[index + 3];

  let valueOne = memory[paramOne]
  let valueTwo = memory[paramTwo]

  let result = (instruction === 'add') ? valueOne + valueTwo : valueOne * valueTwo;

  memory.splice(paramThree, 1, result);
}

for (let firstValue = 0; firstValue < 100; firstValue++) {
  for (let secondValue = 0; secondValue < 100; secondValue++) {
    const memory = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,10,23,27,2,27,13,31,1,31,6,35,2,6,35,39,1,39,5,43,1,6,43,47,2,6,47,51,1,51,5,55,2,55,9,59,1,6,59,63,1,9,63,67,1,67,10,71,2,9,71,75,1,6,75,79,1,5,79,83,2,83,10,87,1,87,5,91,1,91,9,95,1,6,95,99,2,99,10,103,1,103,5,107,2,107,6,111,1,111,5,115,1,9,115,119,2,119,10,123,1,6,123,127,2,13,127,131,1,131,6,135,1,135,10,139,1,13,139,143,1,143,13,147,1,5,147,151,1,151,2,155,1,155,5,0,99,2,0,14,0]

    memory.splice(1, 1, firstValue)
    memory.splice(2, 1, secondValue)
    
    let index = 0;

    while (true) {
      if (memory[index] === 1) {
        doTheMagic(memory, index, 'add')
      } else if (memory[index] === 2) {
        doTheMagic(memory, index, 'multi')
      } else if (memory[index] === 99) {
        break;
      }
      index = index + 4
    }

    if (memory[0] === 19690720) {
      console.log(memory)
      break;
    }
    // determine what pair of memorys produces the output 19690720
    
    // What is 100 * noun + verb?
    // 100 * 41 + 12
  }
}
