// 数组相乘

// 实现一
function fn1 (arr){
  return arr.reduce((result, property) => property.reduce((acc, value) => acc.concat(result.map(ele =>  ele + value)), []));
}

// 实现二
function fn2 (arr){
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
}

const data = [["a","b"],["e"],["d","e","f"]]

console.log(fn1(data))
// out: 
// [ 'aed', 'bed', 'aee', 'bee', 'aef', 'bef' ]

console.log(fn2(data))
// out: 
// [ 'aed', 'bed', 'aee', 'bee', 'aef', 'bef' ]
