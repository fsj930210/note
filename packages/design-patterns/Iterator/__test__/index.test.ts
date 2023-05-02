import { DataContainer, DataIterator } from '../index';


describe('迭代器模式测试', () => {
  test('Iterator', () => {
    const container = new DataContainer();
    const iterator = container.getIterator();
    const data = container.data;

    while(iterator.hasNext()) {
      const index = iterator.index;
      const val = iterator.next()
      expect(data[index]).toBe(val);
    }
  });

});