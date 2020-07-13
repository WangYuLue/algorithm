// 和 other/1.js 类似，本质上是数组相乘

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits === '') return [];
  const keymap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const arr = digits.split('').map(i=>keymap[i]);
  let res = [];
  arr.forEach(i => {
    let tep = [];
    i.forEach(j => {
      if(res.length){
        res.forEach(k=>{
          tep.push(k+j)
        })
      }else{
        tep.push(j)
      }
    })
    res = tep;
  });
  return res
};

// 解法2
var letterCombinations2 = function(digits) {
  if(digits==='') return []
  const keymap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  return digits.split('').map(i=>keymap[i]).reduce((result, property) => property.reduce((acc, value) => acc.concat(result.map(ele =>  ele + value)), []));
};

console.log(letterCombinations('235'));

  
