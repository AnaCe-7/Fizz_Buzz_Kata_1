class FizzBuzz {
  validate_prime_numbers_3_5(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    }
    if (number % 3 === 0) {
      return "Fizz";
    }
    if (number % 5 === 0) {
      return "Buzz";
    }
    return number;
  }
}

module.exports = FizzBuzz;
