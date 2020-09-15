import { expect } from 'chai';

import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
  it('return only completed todos', () => {
    const fakeTodos = [
      {
        text: '1',
        isCompleted: true,
      },
      {
        text: '2',
        isCompleted: false,
      },
      {
        text: '3',
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: '1',
        isCompleted: true,
      },
    ];

    const actualResult = getCompletedTodos.resultFunc(fakeTodos);

    expect(actualResult).to.deep.equal(expected);
  });
});
