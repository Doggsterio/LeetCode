/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needleLength = needle.length;
    let i = 0;
    let j = -1;

    const lps = [-1];
    while (i < needleLength - 1) {
        if (j === -1 || needle[i] === needle[j]) {
            i++;
            j++;
            lps[i] = j;
        } else {
            j = lps[j];
        }
    }

    i = 0, j = 0;
    while (i < haystack.length && j < needleLength) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            j = lps[j];
            if (j < 0) {
                i++;
                j++;
            }
        }
    }

    if (j === needleLength) {
        return i - j;
    }

    return -1;
};