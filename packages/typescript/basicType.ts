const a = 'a'; // 字面量类型
const ab: string = 'ab'; // 字符串类型
const n = 1; // 字面量类型
const n2: number = 33; // 数字类型
// 成立，但千万不要这么使用
const o: Object = 1;
const o1: Object = 's';

// 关闭strictNullChecks时成立
// const o2: Object = undefined;
// const o3: Object = null;
// const o4: Object = void 0;
// const s1: String = undefined;
// const s2: String = null;
// const s3: String = void 0;
// const oo: object = undefined;
// const oo1: object = null;
// const oo2: object = void 0;

// 不成立
// const oo3: object = '22'; // 原始类型
// const oo4: object = 4; // 原始类型
// const ooo1: {} = undefined;
// const ooo2: {} = null;
// const ooo3: {} = void 0;

const ooo4: {} = () => {};
const ooo5: {} = 1;
const ooo6: {} = 'ss';
const oo5: object = () => {};

const uniqueSymbolFoo: unique symbol = Symbol('foo');
// 类型不兼容
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo;

interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  age: number;
  job: number;
}

declare let foo: Foo;
declare let bar: Bar;

foo = bar;
