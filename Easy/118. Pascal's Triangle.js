/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1], [1,1]];

    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return result;
    }

    for (let i = 2; i < numRows; i++) {
        result.push([1]);

        for (let j = 1; j < i; j++) {
            result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
        }

        result[i].push(1);
    }

    return result;
};