const solution = (nums, p, q) => {
  let pIndex = nums.findIndex((num) => num === p);
  let qIndex = nums.findIndex((num) => num === q);

  let pDepth = getDepth(pIndex);
  let qDepth = getDepth(qIndex);

  while (getParent(pIndex) !== getParent(qIndex)) {
    if (pDepth > qDepth) {
      pIndex = getParent(pIndex);
      pDepth--;
    } else {
      qIndex = getParent(qIndex);
      qDepth--;
    }
  }

  return pIndex === qIndex ? nums[pIndex] : nums[getParent(pIndex)];
};

export default solution;

const getDepth = (index) => {
  return Math.floor(Math.log2(index + 1)) + 1;
};

const getParent = (index) => {
  return Math.ceil(index / 2) - 1;
};
