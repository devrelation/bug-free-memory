const solution = (nums) => {
  const numsLen = nums.length;
  let maxSum = 0;

  for (let i = 0; i <= numsLen - 1; i++) {
    for (let e = i + 1; e <= numsLen; e++) {
      const sum = nums.slice(i, e).reduce((acc, cur) => acc + cur, 0);
      maxSum = sum > maxSum ? sum : maxSum;
    }
  }
  return maxSum;
};

export default solution;