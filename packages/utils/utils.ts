// 判断是否是浏览器环境
export const inBrowser = typeof window !== 'undefined';
// 判断微信
export function isWeiXin(): boolean {
  return /microMessenger/gi.test(navigator.userAgent);
}
// 判断ios
export function isIos(): boolean {
  return /iPad|iPhone|iPod/g.test(navigator.userAgent);
}
// 判断android
export function isAndroid(): boolean {
  return /android/gi.test(navigator.userAgent);
}
// 判断移动端
export const isMobile = (): boolean => {
  return isIos() || isAndroid();
};
// 判断电话号码
export function isTel(phone: string): boolean {
  return /^1[0-9]{10}$/g.test(phone);
}
// 获取传入值的类型
export function getType(value: unknown): string {
  return {}.toString.call(value).slice(8, -1);
}

// 判断是否是generator
export function isGenerator(value: any) {
  return value && typeof value.next === 'function' && typeof value.throw === 'function';
}
// 判断是否是generator函数
export function isGeneratorFunction(value: any) {
  if (!value) {
    return false;
  }
  const constructor = value.constructor;
  if (!constructor) {
    return false;
  }
  if (constructor.name === 'GeneratorFunction' || constructor.displayName === 'GeneratorFunction') {
    return true;
  }
  return isGenerator(constructor.prototype);
}
// 判断是否是promise
export function isPromise(value: any) {
  return value instanceof Promise || (value && typeof value.then === 'function');
}
// 转为字符串
export function defaultToString(value: any): string {
  if (value === null) {
    return 'NULL';
  } else if (value === undefined) {
    return 'UNDEFINED';
  } else if (typeof value === 'string' || value instanceof String) {
    return `${value}`;
  }
  return value.toString();
}

// 数组交换顺序
export function swap(arr: unknown[], a: number, b: number) {
  [arr[b], arr[a]] = [arr[a], arr[b]];
}

// 生成uuid
export function uuid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

// 获取文件的后缀名
export function getSuffix(filename: string): string {
  const pos: number = filename.lastIndexOf('.');
  let suffix = '';
  if (pos !== -1) {
    suffix = filename.substring(pos);
  }
  return suffix;
}
// 枚举转数组
export function enum2Array(e: any) {
  const array: { label: string; value: string | number }[] = [];
  for (const key in e) {
    if (Object.prototype.hasOwnProperty.call(e, key)) {
      const el = e[key];
      // 字符串枚举
      if (Number.isNaN(Number(key)) && getType(el) === 'String') {
        array.push({ label: key, value: el });
      }
      // 数字枚举
      if (getType(key) === 'String' && getType(el) === 'Number') {
        array.push({ label: key, value: el });
      }
    }
  }
  return array;
}
