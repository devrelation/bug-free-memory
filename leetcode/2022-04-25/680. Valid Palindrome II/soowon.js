const solution = (s) => {
  const sLen = s.length;
  const isOdd = !!(sLen % 2);
  const quo = ~~(sLen / 2);
  const fore = s.slice(0, ~~(sLen / 2));
  const back = isOdd ? s.slice(quo + 1, sLen) : s.slice(quo, sLen);
  const reversedBack = back.split('').reverse().join('');
  return fore === reversedBack;
};

export default solution;

