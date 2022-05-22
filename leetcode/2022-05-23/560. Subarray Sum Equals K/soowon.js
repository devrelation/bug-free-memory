const runSubarrayReculsive = (arr, sum, k) => {
  if (sum === k) return true;
  if (arr.length === 0 || sum >= k) return false;
  const first = arr.shift();
  return runSubarrayReculsive(arr, sum + first, k);
};

const solution = ({ nums, k }) => {
  let cnt = 0;
  nums.map((cur, idx) => {
    if (runSubarrayReculsive(nums.slice(idx + 1), cur, k)) cnt++;
  });
  return cnt;
};

export default solution;
