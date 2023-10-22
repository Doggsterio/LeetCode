/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    let isDivisibleThree = 0;
    let isDivisibleFive = 0;
    
    for (let i = 1; i < n+1; i++) {
        isDivisibleThree = i % 3 == 0;
        isDivisibleFive = i % 5 == 0;

        if (isDivisibleThree && isDivisibleFive) {
            result.push("FizzBuzz");
        } else if (isDivisibleThree) {
            result.push("Fizz");
        } else if (isDivisibleFive) {
            result.push("Buzz");
        } else {
            result.push(`${i}`);
        }
    }

    return result;
};