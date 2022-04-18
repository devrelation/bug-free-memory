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

describe('121-BestTimeToBuyAndSellStock.spec', () => {
  const func = maxProfit;
  const arr = [
    {
      input: [7, 1, 5, 3, 6, 4],
      output: 5,
    },
    {
      input: [7, 6, 4, 3, 1],
      output: 0,
    },
    {
      input: [4, 1, 2],
      output: 1,
    },
  ];
  arr.forEach(({ input, output }) => {
    it(`${input} - ${output}`, () => {
      expect(func(input)).toStrictEqual(output);
    });
  });
});
