// Given this additional criterion, but still ignoring the range rule, the following are now true:

// 112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
// 123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
// 111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).

// How many different passwords within the range given in your puzzle input meet all of the criteria?

// Your puzzle input is still 158126-624574.

let count_how_many_meet_these_criteria = 0;

const doTheMagic = (numero) => {
  let numeros = ('' + numero).split('');

  let has_one_case_that_previous_is_bigger_then_next = false;
  let has_one_case_that_previous_is_equal_next = false;

  numeros.map((value, index) => {
    if (value > numeros[index + 1]) {
      has_one_case_that_previous_is_bigger_then_next = true;
    }
    if (value === numeros[index + 1] && value !== numeros[index + 2]) {
      if (value !== numeros[index - 1]) {
        has_one_case_that_previous_is_equal_next = true;
      }
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

// doTheMagic(112233) //true
// doTheMagic(123444) //false
// doTheMagic(111122) //true
// doTheMagic(112222) //true
// doTheMagic(111234) //false
