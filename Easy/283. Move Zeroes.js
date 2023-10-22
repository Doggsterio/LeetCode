/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let notZeroPointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[notZeroPointer];
            nums[notZeroPointer] = nums[i];
            nums[i] = temp;

            notZeroPointer++;
        }
    }
};