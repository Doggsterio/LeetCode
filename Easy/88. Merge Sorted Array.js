/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let result = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < m && pointer2 < n) {
        if (nums1[pointer1] > nums2[pointer2]) {
            result.push(nums2[pointer2]);
            pointer2++;
        } else {
            result.push(nums1[pointer1]);
            pointer1++;
        }
    }

    if (pointer1 < m) {
        for (let i = pointer1; i < m; i++) {
            result.push(nums1[i]);
        }
    } else if(pointer2 < n) {
        for (let i = pointer2; i < n; i++) {
            result.push(nums2[i]);
        }
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = result[i];
    }
};