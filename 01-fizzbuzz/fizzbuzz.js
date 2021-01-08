function fizzbuzz(num) {
  function canDivideBy(num, divideNum) {
    return num % divideNum === 0;
  }
  if (canDivideBy(num, 15)) {
    return "FizzBuzz";
  }
  if (canDivideBy(num, 3)) {
    return "Fizz";
  }
  if (canDivideBy(num, 5)) {
    return "Buzz";
  }
  return num.toString();
}

module.exports = fizzbuzz;
