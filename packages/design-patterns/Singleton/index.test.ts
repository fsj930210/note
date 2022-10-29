import { getInstanceByClass, getInstanceByClosure, getInstanceByModule } from './index';

describe('单例模式测试', () => {
  test('getInstanceByClass', () => {
    const instance1 = getInstanceByClass();
    const instance2 = getInstanceByClass();
    expect(instance1).toStrictEqual(instance2);
  });
  test('getInstanceByClosure', () => {
    const getInstance = getInstanceByClosure();
    const instance1 = getInstance();
    const instance2 = getInstance();
    expect(instance1).toStrictEqual(instance2);
  });
  test('getInstanceByModule', () => {
    const instance1 = getInstanceByModule();
    const instance2 = getInstanceByModule();
    expect(instance1).toStrictEqual(instance2);
  });
});
