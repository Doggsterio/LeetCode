/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let fixS = fixString(s);
    let fixT = fixString(t);

    return fixS === fixT;
};

function fixString(string) {
    let result = "";
    let index = string.length - 1;
    let backspaceCount = 0;

    while (index >= 0) {
        if (string[index] !== "#") {
            if (backspaceCount === 0) {
                result += string[index];
            } else {
                backspaceCount--;
            }
        } else {
            backspaceCount++;
        }

        index--
    }

    return result;
}