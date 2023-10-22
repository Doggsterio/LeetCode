/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxNumber = -1;
    let currentNumber = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        currentNumber = arr[i];
        arr[i] = maxNumber;
        
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }

    arr[arr.length - 1] = -1;

    return arr;
};