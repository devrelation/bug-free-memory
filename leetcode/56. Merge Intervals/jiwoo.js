/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const intMap = new Map();
  
// intervals [[1,4],[5,6]]
  for(let x=0; x<intervals.length; x++){
    const interval = intervals[x];
    // [1,4] || [5,6]
    
    for(let y=interval[0]; y<interval[1]; y++){
      const current = y;
      const next = y+1;

      intMap.set(`${current}-${next}`,true);      
      // 1-2 -> true , 2-3 -> true, 3-4 -> true
    }
  }
  
  // map
  // 1-2, 2-3, 3-4, 5-6

  const answer = [];
  
  const keys = [...intMap.keys()];
  
  let startNum = keys[0].split('-')[0];
  let lastNum = keys[0].split('-')[1];
    
  for(let i=0; i<keys.length; i++){
    const current = keys[i];
    const [start, end] = current.split('-');
    
//     if(lastNum === start){
      
//     }
//     else{
      
//     }


  }
  
  return answer;
};

