/**
 * Given an array of integers nums, sort the array in ascending order.
 */
const sortAnArray = function(nums) {
    // hint : find a method that sorts
    return nums.sort((a,b) => a-b)
};

console.log(sortAnArray([5,2,3,1])) // [1,2,3,5]
console.log(sortAnArray([5,1,1,2,0,0])) // [0,0,1,1,2,5]