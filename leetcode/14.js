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

// 解法2
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  if(strs.length === 1) return strs[0];
  const pos = strs[0];
  for(let x = 0; x< pos.length; x++){
    const byte = pos[x];
    for(let y = 1; y<strs.length; y++){
      if(strs[y][x] !== byte){
        return pos.slice(0,x)
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["",""]))
console.log(longestCommonPrefix(["flower","flow","flight"]))