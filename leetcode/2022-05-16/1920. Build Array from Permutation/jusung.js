const solution = (nums) => {
  return nums.reduce((acc, cur, _, arr) => [...acc, arr[cur]], []);
};

export default solution;
