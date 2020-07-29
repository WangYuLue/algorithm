/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [[]];
  nums.forEach(num=>{
    res = temp(res,num)
  })
  return res;
};

var temp = function(numsList,newInt){
  const res = [];
  numsList.forEach(nums => {
    for(let x=0;x<=nums.length;x++){
      const tmp = [...nums]
      tmp.splice(x,0,newInt)
      res.push(tmp)
    }
  });
  return res;
}