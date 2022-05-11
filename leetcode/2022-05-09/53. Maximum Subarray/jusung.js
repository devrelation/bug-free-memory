const solution = (nums) => {
  return nums.reduce(
    ({ prevMax, max }, cur) => {
      const curMax = Math.max(prevMax + cur, cur);
      return {
        prevMax: curMax,
        max: Math.max(max, curMax),
      };
    },
    { prevMax: 0, max: Math.max(...nums) },
  ).max;
};

export default solution;
