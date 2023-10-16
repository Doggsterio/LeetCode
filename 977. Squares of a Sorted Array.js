/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[leftPointer]) < Math.abs(nums[rightPointer])) {
            result[i] = nums[rightPointer] ** 2;
            rightPointer--;
        } else {
            result[i] = nums[leftPointer] ** 2;
            leftPointer++;
        }
    }

    return result;
};