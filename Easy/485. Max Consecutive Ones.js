/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxSequenceLength = 0;
    let currentSequenceLength = 0;
    
    for (let num of nums) {
        currentSequenceLength = num === 1 ? currentSequenceLength + 1 : 0;
        maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
    }
    
    return maxSequenceLength;
};