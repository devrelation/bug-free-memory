const solution = (nums) => {
  return nums.reduce((acc, cur) => [...acc, nums[cur]], []);
};

export default solution;
