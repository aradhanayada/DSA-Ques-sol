
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0; // Initialize left pointer

    // Iterate through the array
    for (let right = 0; right < nums.length; right++)
     {
        if (nums[right] !== 0)
         {
    // If the element is not zero, swap it with the element at the left pointer
            [nums[left], nums[right]] = [nums[right], nums[left]];
            // Move the left pointer to the next position
            left++;
        }
}

    
};
