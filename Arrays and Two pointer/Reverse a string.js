/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  
 let n=s.length;
let i=0;
let j=n-1; 
 let t=0;
       while(i<=j){
       temp=s[i];
       s[i]=s[j];
       s[j]=temp;
       i++;
       j--;
       }

    
};
