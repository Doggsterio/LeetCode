/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let counter = 0;

    while (leftPointer <= rightPointer) {
        if (nums[leftPointer] === val) {
            if (nums[rightPointer] != val) {
                let temp = nums[rightPointer];
                nums[rightPointer] = nums[leftPointer];
                nums[leftPointer] = temp;

                counter++;
                leftPointer++;
            }

            rightPointer--;
        } else {
            counter++;
            leftPointer++;
        }
    }

    return counter;
};