class FizzBuzz{
    validate_prime_numbers_3_5(number) {
        if (number %3 === 0){
            return "Fizz";
        } else if (number %5 === 0) {
            return "Buzz";
        // } else if (number %3 === 0 && number %5 === 0) {
        //     return "FizzBuzz";
    } else if (number %15 === 0) {
        return "FizzBuzz";
        }
    }
};

module.exports = FizzBuzz;