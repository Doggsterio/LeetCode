/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [[1], [1,1]];

    for (let i = 2; i <= rowIndex; i++) {
        result.push([1]);

        for (let j = 1; j < i; j++) {
            result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
        }

        result[i].push(1);
    }

    return result[rowIndex];
};