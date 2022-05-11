const maxProfit = function (input) {
  let maxProfit = 0;
  const cache = [];
  let max = input[input.length - 1];

  for (let i = input.length; i > 0; i--) {
    if (max < input[i]) {
      max = input[i];
    }
    cache[i] = max;
  }
  cache.shift();

  for (let i = 0; i < input.length - 1; i++) {
    const base = input[i];
    const max = cache[i];
    const profit = max - base;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

export default maxProfit;
