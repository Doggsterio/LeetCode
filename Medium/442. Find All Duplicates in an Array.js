/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];

    nums.forEach( (element) => {
        let index = Math.abs(element) - 1;

        if (nums[index] > 0) {
            nums[index] *= -1; 
        } else {
            result.push(Math.abs(element));
        }
    } );

    return result;
};