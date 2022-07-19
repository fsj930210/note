import dateFormat from '../dateFormat';

describe('格式化日期', () => {
  test('dateFormat', () => {
    expect(dateFormat(new Date(), 'YYYY-MM-DD')).toEqual('2022-07-19');
  });
});
