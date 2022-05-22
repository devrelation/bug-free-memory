cosnt solution = function(nums, k) {
  const map = new Map();
  const dp = [];
  
  nums.forEach((num,i) => {
    const availableNums = [];
    
    if(dp.length === 0){
      availableNums.push(num);
    }
    else{
      const calcedValues = dp[i-1].map((curr) => curr+num);
      availableNums.push(num, ...calcedValues);
    }
    
    dp.push(availableNums);
    
    availableNums.forEach((num) => {
      if(map.has(num)){
        map.set(num, map.get(num)+1);
      }
      else{
        map.set(num, 1);
      }
    })
    
  })
  
  
  return map.get(k) || 0;
};

export default solution
