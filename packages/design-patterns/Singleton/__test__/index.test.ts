import Signleton from '../index';

describe('单例模式', () => {
  test('两个实例相等', () => {
    const ins1 = Signleton.getInstance();
    const ins2 = Signleton.getInstance();
    expect(ins1).toBe(ins2);
  });
});
