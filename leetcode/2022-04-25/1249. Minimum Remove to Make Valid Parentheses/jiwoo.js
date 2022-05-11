const solution = () => {
  let openCount = 0;
  let closeCount = 0;
    
  let removeClosedStr = '';
  
  for(let index=0; index<s.length; index++){
    const current = s[index];
    if(current === '('){
      openCount++;
      removeClosedStr += current;
    }
    else if(current === ')'){
      if(openCount <= closeCount){
        // do nothing
      }
      else{
        closeCount++;
        removeClosedStr += current;
      }
    }
    else{
      removeClosedStr += current;
    }
  }
  
  console.log(removeClosedStr);
  let answer = '';
  let removableCount = openCount - closeCount;
  
  if(removableCount > 0){
    const reversed = removeClosedStr.split("").reverse().join("");
    
    for(let index=0; index<reversed.length; index++){
      const current = reversed[index];
      
      if(removableCount === 0){
        answer+= reversed.substring(index, reversed.length);
        break;
      }
      
      if(current === '('){
        if(removableCount > 0){           
          removableCount--;
        }
      }
      else{
        answer+=current;
      }
    }
    
    answer = answer.split("").reverse().join("");
    
  }
  else{
    answer = removeClosedStr;
  }
  
  return answer;
};

export default solution
