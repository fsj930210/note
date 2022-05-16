import { sum } from '../index';

describe('test sum', () => {
  test('1 + 2', () => {
    const value = sum(1, 2);
    expect(value).toBe(3);
  });
});
