const merge = function (input) {
  const startArr = new Array(10000).fill(0);
  const endArr = new Array(10000).fill(0);

  input.forEach(([start, end]) => {
    startArr[start]++;
    endArr[end]++;
  });

  let startPoint = 0;
  let buffer = 0;
  const result = [];

  for (let i = 0; i < 10000; i++) {
    if (startArr[i] > 0) {
      if (buffer === 0) {
        startPoint = i;
      }
      buffer += startArr[i];
    }
    if (endArr[i] > 0) {
      buffer -= endArr[i];
      if (buffer === 0) {
        result.push([startPoint, i]);
      }
    }
  }

  return result;
};

export default merge;
