// 盛水最多容器

// 类型：双指针法

function maxArea(arr) {
  let x0 = 0;
  let x1 = arr.length-1;
  let area = 0;
  while(x0<x1){
    let height = 0;
    if(arr[x0] > arr[x1]){
      height = arr[x1]
    }else{
      height = arr[x0]
    }
    area = Math.max(area,height*(x1-x0));
    arr[x0] > arr[x1] ? x1-- : x0++;
  }
  return area;
}

maxArea([1,8,6,2,5,4,8,3,7])