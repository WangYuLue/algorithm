// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const sortNums = nums.sort((a,b)=>a-b);
  const lastIndex = sortNums.length-1;
  const res = [];
  for(let m = 0 ; m<lastIndex; m++){
    if(m>0 && nums[m] === nums[m-1]) continue;
    for(let x = m+1 ; x<lastIndex; x++){ 
      if(x>m+1 && nums[x] === nums[x-1]) continue;
      let y = x+1;
      let z = lastIndex;
      while(y<z){
        const sum = sortNums[m] + sortNums[x] + sortNums[y] + sortNums[z];
        if(sum === target){
          res.push([sortNums[m], sortNums[x] , sortNums[y] , sortNums[z]]);
          while (sortNums[y] === sortNums[++y]) {}
          while (sortNums[z] === sortNums[--z]) {}
        }else if(sum > target) {
          z --;
        }else if(sum<target) {
          y ++;
        }
      }
    }
  }
  return res;
};

// console.log(fourSum([1, 0, -1, 0, -2, 2],0));
console.log(fourSum([1,-2,-5,-4,-3,3,3,5],-11));

