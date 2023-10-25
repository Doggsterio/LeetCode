/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sums = {
        left: 0,
        right: 0
    };

    nums.forEach(element => sums.right += element);

    for (let i = 0; i < nums.length; i++) {
        sums.right -= nums[i];

        if (sums.left === sums.right) {
            return i;
        }

        sums.left += nums[i];
    }

    return -1;
};