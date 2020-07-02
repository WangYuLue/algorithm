/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  let index = 0;
  let isSame = true;
  while(isSame){
    const arr = []
    strs.forEach(str=>{
      arr.push(str[index])
    })
    if(arr.includes(undefined)||  new Set(arr).size > 1){
      isSame = false;
    }else{
      index ++;
    }
  }
  return strs[0].slice(0,index)
};

console.log(longestCommonPrefix(["",""]))