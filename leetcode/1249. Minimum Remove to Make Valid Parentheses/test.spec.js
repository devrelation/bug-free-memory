import jusungSolution from './jusung.js';
import jiwooSolution from './jiwoo.js';
import dowooSolution from './dowoo.js';
import soowonSolution from './soowon.js';

describe('problem!!', () => {
  const arr = [
    {
      input: 'lee(t(c)o)de)',
      output: ['lee(t(c)o)de', 'lee(t(co)de)', 'lee(t(c)ode)'],
    },
    {
      input: 'a)b(c)d',
      output: ['ab(c)d'],
    },
    {
      input: '))((',
      output: [''],
    },
  ];

  arr.forEach(({ input, output }) => {
    it(`주성 ${input} - ${output}`, () => {
      expect(output.includes(jusungSolution(input))).toBeTruthy();
    });
  });

  arr.forEach(({ input, output }) => {
    it(`지우 ${input} - ${output}`, () => {
      expect(output.includes(jiwooSolution(input))).toBeTruthy();
    });
  });

  arr.forEach(({ input, output }) => {
    it(`도우 ${input} - ${output}`, () => {
      expect(output.includes(dowooSolution(input))).toBeTruthy();
    });
  });

  arr.forEach(({ input, output }) => {
    it(`수원 ${input} - ${output}`, () => {
      expect(output.includes(soowonSolution(input))).toBeTruthy();
    });
  });
});
