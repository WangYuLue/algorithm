var threeSumClosest = function(nums, target) {
  const sortNums = nums.sort((a,b)=>a-b);
  const lastIndex = sortNums.length-1;
  let min;
  let val;
  for(let x = 0 ; x<lastIndex; x++){
    if(x>0 && nums[x] === nums[x-1]) continue;
    let y = x+1;
    let z = lastIndex;
    while(y<z){
      const sum = sortNums[x] + sortNums[y] + sortNums[z];
      const diff = Math.abs(sum-target)
      if(min===undefined || diff<min){
        min = diff;
        val = sum;
      }

      if(sum === target){
        return target;
      }
      else if(sum > target)  z --;
      else if(sum < target) y ++;
    }
  }
  return val;
};

console.log(threeSumClosest([-1,2,1,-4],1));
console.log(threeSumClosest([1,1,1,1],0));

