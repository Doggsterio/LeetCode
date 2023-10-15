/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numLength = nums.length;
    for (let i = 0; i < numLength; i++) {
        for (let j = i + 1; j < numLength; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};