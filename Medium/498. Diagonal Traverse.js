/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let i = 0;
    let j = 0;
    let m = mat.length;
    let n = mat[0].length;
    let totalElements = n * m;
    let counter = 0;
    let isUp = true;
    let result = [];

    while (counter < totalElements) {
        result.push(mat[i][j]);

        if (isUp) {
            if (i === 0 && j < n - 1) {
                j++;
                isUp = false;
            } else if (j === n - 1) {
                i++;
                isUp = false;
            } else {
                i--;
                j++;
            }
        } else {
            if (j === 0 && i < m - 1) {
                i++;
                isUp = true;
            } else if ( i === m - 1) {
                j++;
                isUp = true;
            } else {
                i++;
                j--;
            }
        }

        counter++;
    }

    return result;
};