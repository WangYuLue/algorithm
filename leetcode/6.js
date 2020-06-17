function convert(s, numRows) {
  if(numRows===1) return s;
  // 储存列表
  let l = new Array(numRows).fill();
  l = l.map(i=>i=[])
  // 遍历方向, true 表示正向， false 表示反向
  let o = true;
  // 当前的指针位置
  let i = 0;
  for(let x=0; x<s.length; x++){
    l[i].push(s[x]);
    if(i===0 && o === false){
      o = true;
    }else if(i===numRows-1 && o === true) {
      o = false;
    }
    o ? i++ : i--;
    
  }  
  return l.reduce((r,i)=>r+i.join(''),'');
}
