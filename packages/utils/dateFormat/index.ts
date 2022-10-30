/**
 *
 * @param  date 需要转换的日期 可以是一个日期、时间戳或者字符串
 * @param formatString 格式 Y-年 M-月 D-日 H-时 m-分 s-秒 S-毫秒 q-季度 w-星期
 * @description 格式化日期展现形式
 * @example
 * dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 星期w')
 * dateFormat(Date.now(), 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 星期w')
 * dateFormat('2022/05/20', 'YYYY-MM-DD HH:mm:ss.SSS 第q季度 周w')
 */
function dateFormat(date: Date, formatString: string): string;
function dateFormat(date: number, formatString: string): string;
function dateFormat(date: string, formatString: string): string;
function dateFormat(date: Date | number | string, formatString = 'YYYY-MM-DD HH:mm:ss'): string {
  const _date: Date | string = new Date(date);
  // 输入无效的字符串、或者浏览器不支持的格式会返回 Invalid Date
  //@ts-ignore
  if (_date !== 'Invalid Date') {
    const week: string[] = ['日', '一', '二', '三', '四', '五', '六'];
    const quarter: string[] = ['一', '二', '三', '四'];
    const rules: Record<string, string> = {
      'Y+': _date.getFullYear().toString(),
      'M+': (_date.getMonth() + 1).toString(),
      'D+': _date.getDate().toString(),
      'H+': _date.getHours().toString(),
      'm+': _date.getMinutes().toString(),
      's+': _date.getSeconds().toString(),
      'S+': _date.getMilliseconds().toString(),
      'q+': quarter[Math.floor((_date.getMonth() + 3) / 3) - 1],
      'w+': week[_date.getDay()]
    };

    for (const key in rules) {
      if (Object.prototype.hasOwnProperty.call(rules, key)) {
        const reg = new RegExp(`(${key})`).exec(formatString);
        if (reg) {
          const $1 = reg[1]; // 匹配的模式
          // 将模式替换为实际的值 当实际的值不足模式的长度则在前面补零
          formatString = formatString.replace($1, $1.length == 1 ? rules[key] : rules[key].padStart($1.length, '0'));
        }
      }
    }
    return formatString;
  }
  return 'Invalid Date';
}

export default dateFormat;
