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

describe('56-MergeIntervals.spec', () => {
  const func = merge;
  const arr = [
    {
      input: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      output: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },
    {
      input: [
        [1, 4],
        [4, 5],
      ],
      output: [[1, 5]],
    },
    {
      input: [
        [1, 3],
        [2, 4],
        [3, 5],
      ],
      output: [[1, 5]],
    },
    {
      input: [
        [1, 4],
        [0, 4],
      ],
      output: [[0, 4]],
    },
    {
      input: [
        [1, 4],
        [0, 1],
      ],
      output: [[0, 4]],
    },
    {
      input: [
        [0, 4],
        [0, 1],
        [4, 5],
        [0, 2],
      ],
      output: [[0, 5]],
    },
  ];
  arr.forEach(({ input, output }) => {
    it(`${input} - ${output}`, () => {
      expect(func(input)).toStrictEqual(output);
    });
  });
});
