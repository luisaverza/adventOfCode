// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
// Other than the range rule, the following are true:

// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).
// How many different passwords within the range given in your puzzle input meet these criteria?

// Your puzzle input is 158126-624574.

let numero = 123789;
let count_how_many_meet_these_criteria = 0;

const doTheMagic = (numero) => {
  let numeros = ('' + numero).split('');

  let has_one_case_that_previous_is_bigger_then_next = false;
  let has_one_case_that_previous_is_equal_next = false;

  numeros.map((value, index) => {
    if (value > numeros[index + 1]) {
      has_one_case_that_previous_is_bigger_then_next = true;
    }
    if (value === numeros[index + 1]) {
      has_one_case_that_previous_is_equal_next = true;
    }
  });

  if (!has_one_case_that_previous_is_bigger_then_next && has_one_case_that_previous_is_equal_next) {
    count_how_many_meet_these_criteria++
  }
}

let count = 158126

while (count <= 624574) {
  doTheMagic(count);
  count++;
};

console.log(count_how_many_meet_these_criteria)

