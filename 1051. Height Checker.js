/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sortedArray = [...heights];
    let counter = 0;

    sortedArray.sort((a,b) => a - b);

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedArray[i]) {
            counter++;
        }
    }

    return counter;
};