import dateFormat from '../index';

describe('日期格式化测试', () => {
  test('测试日期', () => {
    const date = new Date('2022/10/04');
    const value = dateFormat(date, 'YYYY-MM-DD');
    expect(value).toEqual('2022-10-04');
  });
  test('测试时间戳', () => {
    const date = new Date('2022/10/04').getTime();
    const value = dateFormat(date, 'YYYY-MM-DD');
    expect(value).toEqual('2022-10-04');
  });
  test('测试字符串', () => {
    const date = '2022/10/04';
    const value = dateFormat(date, 'YYYY-MM-DD');
    expect(value).toEqual('2022-10-04');
  });
  test('测试星期', () => {
    const date = new Date('2022/10/04');
    const value = dateFormat(date, 'YYYY-MM-DD 周w');
    expect(value).toEqual('2022-10-04 周二');
  });
  test('测试季度', () => {
    const date = new Date('2022/10/04');
    const value = dateFormat(date, 'YYYY-MM-DD 第q季度');
    expect(value).toEqual('2022-10-04 第四季度');
  });
});
