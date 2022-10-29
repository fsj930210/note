# 处理日期展示的工具库

## dateFormat

`dateFormat`方法可以返回指定日期和格式的字符串.


`@params` `date`: `string | number | Date` 需要格式化的日期


`@params` `formateString`: `string` 格式 Y-年 M-月 D-日 H-时 m-分 s-秒 S-毫秒 q-季度 w-星期

```typescript
  const date1 = new Date('2022/05/20');
  dateFormat(date1, 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 星期w'); // 2022-05-20 22:53:23.876 第二季度 星期二
  const date2 = Date.now();
  dateFormat(date2, 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 星期w'); // 2022-05-20 22:53:23.876 第二季度 星期二
  const date3 = '2022/05/20'
  dateFormat(date3, 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 星期w'); // 2022-05-20 22:53:23.876 第二季度 星期二
  const date4 = 'error date';
  dateFormat(date4, 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 星期w'); // Invalid Date
```