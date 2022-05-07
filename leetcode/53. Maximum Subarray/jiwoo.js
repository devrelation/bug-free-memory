function solution(nums) {
    
    const maxList = [];
    
    for(let x=0; x<nums.length; x++){
        let maxValue = -100000;
        let acc = 0;
        
        for(let y=x; y<nums.length; y++){
            acc += nums[y];
            
            if(maxValue < acc){
                maxValue = acc;
            }
        }
        
        maxList.push(maxValue);
    }
    
    return Math.max(...maxList);
};

export default solution;
