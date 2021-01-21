const wireOne = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
const wireTwo = ['U62','R66','U55','R34','D71','R55','D58','R83']

let wireOneSteps = [];
let wireTwoSteps = [];
let wireOneDirection = [];
let wireTwoDirection = [];

wireOne.map(command => {
  wireOneDirection.push(command.substring(0, 1));
  wireOneSteps.push(parseInt(command.substring(1, 4)));
})

wireTwo.map(command => {
  wireTwoDirection.push(command.substring(0, 1));
  wireTwoSteps.push(parseInt(command.substring(1, 4)));
})

console.log(wireOneDirection, wireOneSteps)
console.log(wireTwoDirection, wireTwoSteps)