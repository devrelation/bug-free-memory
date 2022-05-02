/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let answer = s.split('');

  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      stack.length ? stack.pop() : (answer[i] = '');
    }
  }
    
  if (stack.length) {
    while (stack.length) answer[stack.pop()] = '';
  }

  return answer.join('');
};
