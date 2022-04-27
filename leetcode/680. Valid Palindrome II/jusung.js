const solution = (s) => {
  const arr = s.split('');
  if (isPalindrome(s)) return true;

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      const first = [...s.slice(0, left), ...s.slice(left + 1)].join('');
      const second = [...s.slice(0, right), ...s.slice(right + 1)].join('');
      const canBePalindrome = isPalindrome(first) || isPalindrome(second);
      return canBePalindrome;
    }
    left++;
    right--;
  }
};

const isPalindrome = (s) => {
  const reversed = s.split('').reverse().join('');
  return s === reversed;
};

export default solution;
