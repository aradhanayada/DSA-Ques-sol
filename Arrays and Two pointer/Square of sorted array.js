/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let  n=nums.length;
    let result=[];
   let left=0,right=nums.length-1;
        let leftsq, rightsq;
        for(let i=nums.length-1;i>=0;i--){
            leftsq=nums[left]*nums[left];
            rightsq=nums[right]*nums[right];
            if(leftsq > rightsq ){
                result[i]=leftsq;
                left++;
            }
            else{
                result[i]=rightsq;
                right--;
            }
        }
        return result;
        
};
