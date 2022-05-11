import jusungSolution from './jusung.js';
import jiwooSolution from './jiwoo.js';
import dowooSolution from './dowoo.js';
import soowonSolution from './soowon.js';

describe('problem!!', () => {
  const arr = [
    {
      input: [0, 2, 1, 5, 3, 4],
      output: [0, 1, 2, 4, 5, 3],
    },
    {
      input: [5, 0, 1, 2, 3, 4],
      output: [4, 5, 0, 1, 2, 3],
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
