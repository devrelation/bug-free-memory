function solution(nums) {
    const maxList = [];
    
    for(let x=0; x<nums.length; x++){
        if(x === 0){
            maxList.push(nums[x])
        }
        else{
            const before = maxList[x-1];
            const current = nums[x];
                        
            maxList.push(before + current > current ? before + current : current );
        }
    }
        
    return Math.max(...maxList);
};

export default solution;
