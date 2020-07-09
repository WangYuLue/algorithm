// 合并两个有序数组

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

// 一个更优雅的实现
function merge2(leftArr, rightArr){  
  var result = [];  
  while (leftArr.length > 0 && rightArr.length > 0){  
    if (leftArr[0] < rightArr[0])  
      result.push(leftArr.shift()); //把最小的最先取出，放到结果集中   
    else   
      result.push(rightArr.shift());  
  }   
  return result.concat(leftArr).concat(rightArr);  //剩下的就是合并，这样就排好序了  
} 