import jusungSolution from './jusung.js';
import jiwooSolution from './jiwoo.js';
import dowooSolution from './dowoo.js';
import soowonSolution from './soowon.js';

describe('problem!!', () => {
  const arr = [
    {
      input: { nums: [1, 1, 1], k: 2 },
      output: 2,
    },
    {
      input: { nums: [1, 2, 3], k: 3 },
      output: 2,
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