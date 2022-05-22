const solution = function(s) {
  let answer = 0;
    
  s.split('0').forEach((str) => {
    const length = str.length;
    if(length > 0){
      answer += Math.floor((length * (length+1))/2)
    }
  })
  
  return answer;
};

export default solution;
