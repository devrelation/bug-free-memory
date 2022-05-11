import jusungSolution from './jusung.js';
import jiwooSolution from './jiwoo.js';
import dowooSolution from './dowoo.js';
import soowonSolution from './soowon.js';

describe('56-Merge Intervals', () => {
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
    it(`주성 ${input} - ${output}`, () => {
      expect(jusungSolution(input)).toStrictEqual(output);
    });
  });

  arr.forEach(({ input, output }) => {
    it(`지우 ${input} - ${output}`, () => {
      expect(jiwooSolution(input)).toStrictEqual(output);
    });
  });

  arr.forEach(({ input, output }) => {
    it(`도우 ${input} - ${output}`, () => {
      expect(dowooSolution(input)).toStrictEqual(output);
    });
  });

  arr.forEach(({ input, output }) => {
    it(`수원 ${input} - ${output}`, () => {
      expect(soowonSolution(input)).toStrictEqual(output);
    });
  });
});
