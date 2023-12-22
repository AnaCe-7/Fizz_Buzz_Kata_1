const {expect} = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz");

describe('Tests validating multiples of 3 and 5', () =>{

    const fizz_buzz = new FizzBuzz();
    
    test('Test returns Fizz when a number is divisible by 3', () =>{

        /**
         * GHERKIN TEST
         * GIVEN / ARRANCHE: a number
         * WHEN / ACT: when it is divisible by 3
         * THEN / ASSERT: returns Fizz as result
         */

        //ARRANGE: prepara el escenario, las estradas que quiero dar y las salidas que yo espero
        const given_number = 3;
        const expected_response = "Fizz";

        //ACT: ejecutar el escenario
        const current_response = fizz_buzz.validate_prime_numbers_3_5(given_number);

        //ASSERT: comprueba el escenario
        expect(current_response).toBe(expected_response)
    });

    test('Test returns Buzz when a number is divisible by 5', () =>{

        /**
         * GHERKIN TEST
         * GIVEN / ARRANCHE: a number
         * WHEN / ACT: when it is divisible by 5
         * THEN / ASSERT: returns Buzz as result
         */

        //ARRANGE: prepara el escenario, las estradas que quiero dar y las salidas que yo espero
        const given_number = 5;
        const expected_response = "Buzz";

        //ACT: ejecutar el escenario
        const current_response = fizz_buzz.validate_prime_numbers_3_5(given_number);

        //ASSERT: comprueba el escenario
        expect(current_response).toBe(expected_response)
    });

    test('Test returns FizzBuzz when a number is divisible by 3 and 5', () =>{

        /**
         * GHERKIN TEST
         * GIVEN / ARRANCHE: a number
         * WHEN / ACT: when it is divisible by 3 and 5
         * THEN / ASSERT: returns FizzBuzz as result
         */

        //ARRANGE: prepara el escenario, las estradas que quiero dar y las salidas que yo espero
        const given_number = 15;
        const expected_response = "FizzBuzz";

        //ACT: ejecutar el escenario
        const current_response = fizz_buzz.validate_prime_numbers_3_5(given_number);

        //ASSERT: comprueba el escenario
        expect(current_response).toBe(expected_response)
    });

    test('Test returns the same number when it is not divisible by 3 or 5.', () =>{

        /**
         * GHERKIN TEST
         * GIVEN / ARRANCHE: a number
         * WHEN / ACT: when it is not divisible by 3 or 5
         * THEN / ASSERT: returns same number as result
         */

        //ARRANGE: prepara el escenario, las estradas que quiero dar y las salidas que yo espero
        const given_number = 7;
        const expected_response = 7;

        //ACT: ejecutar el escenario
        const current_response = fizz_buzz.validate_prime_numbers_3_5(given_number);

        //ASSERT: comprueba el escenario
        expect(current_response).toBe(expected_response)
    });

})