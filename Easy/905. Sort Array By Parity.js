/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evenPointer = 0;
    let oddPointer = nums.length - 1;
    let temp = 0;

    while (evenPointer < oddPointer) {
        if (nums[evenPointer] % 2 !== 0) {
            if (nums[oddPointer] % 2 === 0) {
                temp = nums[evenPointer];
                nums[evenPointer] = nums[oddPointer];
                nums[oddPointer] = temp;

                evenPointer++;
            }
            
            oddPointer--;
        } else {
            evenPointer++;
        }
    }

    return nums;
};