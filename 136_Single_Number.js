/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var obj = {}
    for(var i=0;i<nums.length;i++){
        if(obj[nums[i]]==null){
            obj[nums[i]]=1
        }else{
            obj[nums[i]]++
        }
    }
    for(var i=0;i<nums.length;i++){
        console.log(obj[nums[i]])
        if(obj[nums[i]]===1){
            return nums[i]
        }
    }
    return 0
};

console.log(singleNumber([1,2,3,4,5,1,2,3,4]))
