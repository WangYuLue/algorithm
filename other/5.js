// 排序算法（快速排序，归并排序，冒泡排序）

// 自己实现的算法
function sort (arr) {
  //辅助方法，用于 合并两个有序数组 (参考 4.js)
  function merge(arr1,arr2){
    const arr = [];
    const cpArr1 = [...arr1];
    const cpArr2 = [...arr2];
    let a1 = cpArr1.shift();
    let a2 = cpArr2.shift();
    while(a1 || a2){      
      if(!a1){
        arr.push(a2);
        a2 = cpArr2.shift();
      } else if(!a2){
        arr.push(a1);
        a1 = cpArr1.shift();
      } else {
        if(a1>a2){
          arr.push(a2);
          a2 = cpArr2.shift();
        }else{
          arr.push(a1);
          a1 = cpArr1.shift();
        }
      }
    }  
    return arr;
  }
  let step = 1;
  while (Math.pow(2,step-1)<=arr.length) {
    for(let x=0;x<arr.length;){
      sortArr = merge(
        arr.slice(x,x+Math.pow(2,step-1)),
        arr.slice(x+Math.pow(2,step-1),x+Math.pow(2,step)),
      )
      arr.splice(x,Math.pow(2,step),...sortArr)
      x = x + Math.pow(2,step);
    }
    step ++;
  }
  return arr
}

// 快速排序
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

/**
 * 另外一种快速排序实现
 * 
 * @param {*} A  数组
 * @param {*} p  起始下标
 * @param {*} r  结束下标 + 1
 */
function qsort(A, p = 0, r) {
  function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
  }
  
  /**
   *
   * @param {*} A  数组
   * @param {*} p  起始下标
   * @param {*} r  结束下标 + 1
   */
  function divide(A, p, r) {
    const x = A[r - 1];
    let i = p - 1;
  
    for (let j = p; j < r - 1; j++) {
      if (A[j] <= x) {
        i++;
        swap(A, i, j);
      }
    }
  
    swap(A, i + 1, r - 1);
  
    return i + 1;
  }

  r = r || A.length;

  if (p < r - 1) {
    const q = divide(A, p, r);
    qsort(A, p, q);
    qsort(A, q + 1, r);
  }

  return A;
}

// 归并排序
function mergeSort(array){  
  function merge(leftArr, rightArr){  
    var result = [];  
    while (leftArr.length > 0 && rightArr.length > 0){  
      if (leftArr[0] < rightArr[0])  
        result.push(leftArr.shift()); //把最小的最先取出，放到结果集中   
      else   
        result.push(rightArr.shift());  
    }   
    return result.concat(leftArr).concat(rightArr);  //剩下的就是合并，这样就排好序了  
  } 
  if (array.length == 1) return array;  
  var middle = Math.floor(array.length / 2);       //求出中点  
  var left = array.slice(0, middle);               //分割数组  
  var right = array.slice(middle);  
  return merge(mergeSort(left), mergeSort(right)); //递归合并与排序  
} 

// 冒泡排序
function bubbleSort (arr) {
  var max = arr.length - 1;
  for (var j = 0; j < max; j++) {
    // 声明一个变量，作为标志位
    var done = true;
    for (var i = 0; i < max - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}

// 随机生成数字
function random(num,range = 10000){
  const arr = [];
  const randomNum = () => {
    return Math.ceil(Math.random()*range)
  }
  while(num>0){
    arr.push(randomNum());
    num --
  }
  return arr;
}

const numList = random(30000);

console.time('自己的排序算法')
sort([...numList])
console.timeEnd('自己的排序算法')

console.time('快速排序')
quickSort([...numList])
console.timeEnd('快速排序')

console.time('快速排序2')
qsort([...numList])
console.timeEnd('快速排序2')

console.time('归并排序')
mergeSort([...numList])
console.timeEnd('归并排序')

console.time('冒泡排序')
bubbleSort([...numList])
console.timeEnd('冒泡排序')
