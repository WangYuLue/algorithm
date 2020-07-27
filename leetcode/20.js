/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for(let x=0; x<s.length;x++){
    const i = s[x];
    switch(i){
      case '(':
      case '{':
      case '[':
        stack.push(i);
        break;
      case ')':
        if(stack[stack.length-1]==='('){
          stack.pop()
        }else{
          return false
        }
        break;
      case '}':
        if(stack[stack.length-1]==='{'){
          stack.pop()
        }else{
          return false
        }
        break;
      case ']':
        if(stack[stack.length-1]==='['){
          stack.pop()
        }else{
          return false
        }
        break;
    }
  }
  return !stack.length
};

console.log(isValid(']'));