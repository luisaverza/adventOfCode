const moduleMasses = [ 82406,
83106,
120258,
142695,
50629,
117793,
81165,
83442,
70666,
94355,
64069,
72830,
88813,
148762,
90723,
121206,
57713,
116892,
82470,
101686,
83768,
92160,
91532,
136997,
142382,
120050,
81062,
106227,
112071,
102275,
54033,
109059,
91772,
63320,
81872,
52925,
92225,
60053,
110402,
97125,
87404,
54970,
66662,
83979,
88474,
91361,
69272,
61559,
56603,
96324,
66226,
95278,
105643,
139141,
116838,
130717,
97708,
108371,
73652,
100518,
98295,
63127,
50486,
121157,
109721,
110874,
124791,
147116,
127335,
65889,
76769,
100596,
79740,
125860,
120185,
73861,
97700,
147169,
106781,
71891,
64744,
107113,
59274,
77680,
101891,
69848,
98922,
147825,
128315,
55221,
119892,
87492,
75814,
80350,
131504,
81095,
57344,
63765,
143915,
126768,
]

// Advent Of Code # Day 1 Part 1
// What is the sum of the fuel requirements for all of the modules on your spacecraft?

const fuelRequired = moduleMasses.map(module => Math.floor(module/3)-2);
const reducedValue = fuelRequired.reduce((a, b) => a + b, 0)
console.log(reducedValue)

// Advent Of Code # Day 1 Part 2
// What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? 

let sumAllFuelAndAddFuel = 0;

moduleMasses.map(module => {
  let nextFuel = module;
  while (nextFuel > 0) {
    nextFuel = Math.floor(nextFuel/3)-2;
    if (nextFuel > 0) {
      sumAllFuelAndAddFuel = sumAllFuelAndAddFuel + nextFuel;
    }
  }
});

console.log(sumAllFuelAndAddFuel)