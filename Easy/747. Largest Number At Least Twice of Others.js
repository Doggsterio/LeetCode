/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxNumber = 0;
    let maxIndex = 0;

    nums.forEach((element, index) => {
        if (element > maxNumber) {
            maxNumber = element;
            maxIndex = index;
        }
    });

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== maxNumber && maxNumber / nums[i] < 2) {
            return -1;
        }
    }

    return maxIndex;
};