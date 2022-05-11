const solution = (s) => {
  let sArr = s.split('');
  const entryArr = sArr.reduce(
    (acc, cur, i) =>
      ['(', ')'].includes(cur) ? [...acc, { parentheses: cur, idx: i }] : acc,
    [],
  );
  const stack = entryArr.reduce((acc, cur) => {
    if (acc.length && isPair(acc[stack.length - 1], cur))
      return acc.splice(0, acc.lenth - 1);
    else return [...acc, cur];
  }, []);
  for (let i = stack.length; i--; i <= 0) sArr.pop(stack[i].idx);
  sArr.join('');
};

const isPair = (fore, back) =>
  fore.parentheses === '(' && back.parentheses === ')';

export default solution;