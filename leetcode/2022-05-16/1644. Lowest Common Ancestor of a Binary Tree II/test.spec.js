import jusungSolution from './jusung.js';
import jiwooSolution from './jiwoo.js';
import dowooSolution from './dowoo.js';
import soowonSolution from './soowon.js';

describe('problem!!', () => {
  const arr = [
    {
      input: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1],
      output: 3,
    },
    {
      input: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4],
      output: 5,
    },
    {
      input: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 10],
      output: null,
    },
  ];

  arr.forEach(({ input, output }) => {
    it(`주성 ${input} - ${output}`, () => {
      expect(jusungSolution(...input)).toStrictEqual(output);
    });
  });

  arr.forEach(({ input, output }) => {
    it(`지우 ${input} - ${output}`, () => {
      expect(jiwooSolution(...input)).toStrictEqual(output);
    });
  });

  arr.forEach(({ input, output }) => {
    it(`도우 ${input} - ${output}`, () => {
      expect(dowooSolution(...input)).toStrictEqual(output);
    });
  });

  arr.forEach(({ input, output }) => {
    it(`수원 ${input} - ${output}`, () => {
      expect(soowonSolution(...input)).toStrictEqual(output);
    });
  });
});
