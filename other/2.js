// 凑纸币问题

// 类型：动态规划

/**
 * 
 * @param {*} total 要凑的钱的总量 
 * @param {*} arr 货币面值列表
 */
function fn1(total,arr){
  const f = {};
  f[0] = 0;
  for(let x=1;x<=total;x++){
    let cost;
    arr.sort().forEach(i=>{
      if(x-i>=0){
        cost = cost?Math.min(cost,f[x-i]+1):f[x-i]+1;
      }
    })
    f[x] = cost
  }
  console.log(f);
}

// total 过大时，这个算法比较慢
function fn2(total,arr){
  let f = {};
  f[0] = 0;
  while(!f[total]){
    let t = {};
    for (i in f){
      t[i] = f[i];
      arr.forEach(j=>{
        t[Number(i)+j] = f[Number(i)+j] || f[i] + 1
      })
    }
    f = t;
  }
  console.log(f);
}

fn1(15,[1,5,11])
// out:
/**
{
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 1,
  '6': 2,
  '7': 3,
  '8': 4,
  '9': 5,
  '10': 2,
  '11': 1,
  '12': 2,
  '13': 3,
  '14': 4,
  '15': 3
}
*/

fn2(15,[1,5,11])
// out:
/**
{
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '5': 1,
  '6': 2,
  '7': 3,
  '10': 2,
  '11': 1,
  '12': 2,
  '13': 3,
  '15': 3,
  '16': 2,
  '17': 3,
  '21': 3,
  '22': 2,
  '23': 3,
  '27': 3,
  '33': 3
}
*/
