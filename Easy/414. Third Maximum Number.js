/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxNumber = {
        max1: -Infinity,
        max2: -Infinity,
        max3: -Infinity
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= maxNumber.max1) {
            if (maxNumber.max1 !== nums[i]) {
                maxNumber.max3 = maxNumber.max2;
                maxNumber.max2 = maxNumber.max1;
            }
            maxNumber.max1 = nums[i];
        } else if (nums[i] >= maxNumber.max2) {
            if (maxNumber.max2 !== nums[i]) {
                maxNumber.max3 = maxNumber.max2;
            }
            maxNumber.max2 = nums[i];
        } else if (nums[i] >= maxNumber.max3) {
            maxNumber.max3 = nums[i];
        }
    }

    if (maxNumber.max3 === -Infinity) {
        return maxNumber.max1;
    }

    return maxNumber.max3;
};