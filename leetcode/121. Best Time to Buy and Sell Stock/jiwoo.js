/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let answer = 0;
  const profitMap = initProfitMap();

  for(let index=0; index<prices.length; index++){
    const mapIndex = index+1;
    const maxValue = profitMap.get(mapIndex);
    const profit = maxValue - prices[index];
    
    if(profit > answer)
      answer = profit;
  }
  
  return answer;
  
  function initProfitMap(){
    const pMap = new Map();
    pMap.set(prices.length-1, prices[prices.length-1]);

    for(let index = prices.length-2; index > 0; index--){
      const beforeMax = pMap.get(index+1);
      const current = prices[index];
      
      pMap.set(index, current > beforeMax ? current : beforeMax );
    }
    
    return pMap;
  }

};
