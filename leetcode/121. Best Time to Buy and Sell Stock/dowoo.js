/**
 * @param {number[]} prices
 * @return {number}
 */
 
const maxProfit = function(prices) {
    let max = -1;
    let min = prices[0];
    
    for (let price of prices) {
        if (price < min) min = price;
        else if (max < price - min) max = price - min;
    }
    
    return max;
};

export default maxProfit
