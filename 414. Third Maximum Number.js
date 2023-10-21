/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let N = nums.length;
    let m1=-Infinity,m2=-Infinity,m3=-Infinity;
    for(let i=0;i<N;i++){
        if (nums[i] === m1 || nums[i] === m2 || nums[i] === m3) continue;
        if(nums[i]>m1){
            m3=m2;
            m2=m1;
            m1= nums[i];
        }else if(nums[i]>m2){
            m3=m2;
            m2= nums[i];
        }else if(nums[i]>m3){
            m3= nums[i];
        }
    };
    return m3 == -Infinity ? m1 :m3;
};