/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let i = -1;
    let j = -1;
    for (let k = 0; k < arr.length - 1; k++) {
        for (let q = k + 1; q < arr.length; q++) {
            if (arr[k] === 2*arr[q]) {
                i = k;
                j = q;
            } else if (arr[q] === 2*arr[k]) {
                i = q;
                j = k;
            }
        }
    }

    if (i !== -1) {
        return true;
    }

    return false;
};