/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniquePointer = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniquePointer - 1]) {
            nums[uniquePointer] = nums[i];
            uniquePointer++;
        }
    }

    return uniquePointer;
};