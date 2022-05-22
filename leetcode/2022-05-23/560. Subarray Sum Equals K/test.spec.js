import jusungSolution from './jusung.js';
import jiwooSolution from './jiwoo.js';
import dowooSolution from './dowoo.js';
import soowonSolution from './soowon.js';

describe('problem!!', () => {
  const arr = [
    {
      input: [[1,1,1],2],
      output: 2,
    },
    {
      input: [[1,2,3],3],
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
