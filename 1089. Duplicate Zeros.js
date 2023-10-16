/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if (arr[i] === 0) {
            result.push(0);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
};