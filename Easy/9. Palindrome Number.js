/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNumber = 0;
    let tempX = x;

    while (tempX > 0) {
        reversedNumber = reversedNumber * 10 + tempX % 10;
        tempX = ~~(tempX / 10);
    }

    return reversedNumber === x;
};