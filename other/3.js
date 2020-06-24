// 最长上升子序列

// 类型：动态规划

function fn1(arr) {
  const store = {};
  for(let x = 0; x< arr.length; x++){
    let h = 1
    for(let y = 0; y<x; y++){
      if(arr[x]>arr[y]){
        h = Math.max(h,store[y+1]+1)
      }
    }
    store[x+1] = h
  }
  console.log(store);
}

// fn1([1,2,3,4,1,5])
fn1([1,5,3,4,6,9,7,8])
// out:
// { '1': 1, '2': 2, '3': 2, '4': 3, '5': 4, '6': 5, '7': 5, '8': 6 }