import creator, { Product1, Product2 } from '../index';

describe('工厂模式测试', () => {
  test('Product1', () => {
    const p1 = creator.create('p1', 'name1');
    expect(p1).toBeInstanceOf(Product1);
  });

  test('Product2', () => {
    const p2 = creator.create('p2', 'name2');
    expect(p2).toBeInstanceOf(Product2);
  });
});
