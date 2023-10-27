/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let totalElement = m * n;
    let counter = 0;
    let i = 0;
    let j = 0;
    let direction = "right";
    let border = {
        top: 0,
        bottom: m - 1,
        right: n - 1,
        left: 0
    }
    let result = [];

    while (counter < totalElement) {
        result.push(matrix[i][j]);

        if (direction === "right") {
            if (j !== border.right) {
                j++;
            } else {
                direction = "bottom";
                border.top += 1;
                i++;
            }
        } else if (direction === "bottom") {
            if (i !== border.bottom) {
                i++;
            } else {
                direction = "left";
                border.right -= 1;
                j--;
            }
        } else if (direction === "left") {
            if (j !== border.left) {
                j--;
            } else {
                direction = "top";
                border.bottom -= 1;
                i--;
            }
        } else {
            if (i !== border.top) {
                i--;
            } else {
                direction = "right";
                border.left += 1;
                j++;
            }
        }

        counter++;
    }

    return result;
};