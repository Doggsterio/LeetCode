/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length >= 3) {
        let leftPointer = 0;
        let rightPointer = arr.length - 1;

        while (true) {
            if (arr[leftPointer] < arr[leftPointer + 1]) {
                leftPointer++;
            } else {
                break;
            }
        }

        while (true) {
            if (arr[rightPointer] < arr[rightPointer - 1]) {
                rightPointer--;
            } else {
                break;
            }
        }

        if (leftPointer === rightPointer && leftPointer !== 0 && rightPointer !== arr.length - 1) {
            return true;
        }
    }

    return false;
};