const merge = function (intervals) {
  const answer = [];
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
  let first = sorted[0][0];
  let last = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    if (start > last) {
      answer.push([first, last]);
      first = start;
      last = end;
    } else if (end > last) {
      last = end;
    }
  }

  if (!answer.length) {
    answer.push([first, last]);
  } else if (answer[answer.length - 1][1] !== last) {
    answer.push([first, last]);
  }

  return answer;
};

export default merge;
