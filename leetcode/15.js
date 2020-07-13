// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortNums = nums.sort((a,b)=>a-b);
  const lastIndex = sortNums.length-1;
  const res = [];
  for(let x = 0 ; x<lastIndex; x++){
    if(nums[x]>0) break;
    if(x>0 && nums[x] === nums[x-1]) continue;
    let y = x+1;
    let z = lastIndex;
    while(y<z){
      const sum = sortNums[x] + sortNums[y] + sortNums[z];
      if(sum === 0){
        res.push([sortNums[x] , sortNums[y] , sortNums[z]]);
        while (sortNums[y] === sortNums[++y]) {}
        while (sortNums[z] === sortNums[--z]) {}
      }
      else if(sum > 0)  z --;
      else if(sum<0) y ++;
    }
  }
  return res;
};

console.log(threeSum([  -4, -1,-1, 0, 0, 0, 0,0 , 1, 2]));
// console.log(threeSum([1,1,-2]));
// console.log(threeSum([0,0,0,0,0]));
// console.log(threeSum([-1,0,0,1]));
// console.log(threeSum([-1, 0, 0, 0, 1, 2, -1, -4]));
