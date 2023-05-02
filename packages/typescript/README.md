# TypeScript

+ 如果只是想要进行类型比较，可以通过 `declare` 关键字，我们声明了一个仅在类型空间存在的变量，它在运行时完全不存在，而不用去声明变量。

```typescript
interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  job: string;
}

declare let foo: Foo;
declare let bar: Bar;

foo = bar;
```

+ 类型检查工具`tsd`

```typescript
import { expectType } from 'tsd';

expectType<string>("a"); // √
expectType<string>(599); // ×
```

+ ts的原始基础类型 `string` `number` `symbol` `bigint` `boolean` `null` `undefined` `void` `object`  其中`undefined` 可以赋值给 `void`

+ 元组（Tuple）是一个长度限制并且强类型绑定的数组，元祖也支持可选项

```typescript

const arr4: [string, string, string] = ['a', 'b', 'c'];

console.log(arr4[599]); // 长度为“3”的元组类型“[string, string, string]”在索引“599“处没有元素

const arr6: [string, string, boolean?] = ['a', 'b']

const arr7: [string, string, boolean?] = ['a', 'b', ,]

// 元组长度
typeof arr6.length // 2 | 3

// 具名元组
const arr8 : [name: string, age: number, male: boolean] = ['a', 18, true]

// 具名可选元组
const arr8 : [name: string, age: number, male?: boolean] = ['a', 18, true]
```

+ `Object` `object` `{}` 区别

    `Object` 包含了所有类型，在关闭了 `strictNullChecks`时，`Object` 表示所有类型，其他装箱类型也有类似的情况。在任何情况下我们都应该不适用装箱类型

    `object` 所有非原始类型的类型，即数组、对象与函数类型这些

    `{}` 任何非 `null` / `undefined `的值


 + `unique symbol` 表示唯一`symbol`值。在 `TypeScript` 中，`symbol` 类型并不具有这一特性，一百个具有 `symbol` 类型的对象，它们的 `symbol` 类型指的都是 `TypeScript` 中的同一个类型。为了表示这一特性才有`unique symbol`。在 `TypeScript` 中，如果要引用已创建的 `unique symbol` 类型，则需要使用类型查询操作符 `typeof`

```typescript
const uniqueSymbolFoo: unique symbol = Symbol('foo')
// 类型不兼容
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo
// 正确使用方式
const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo

```

+ 字符串枚举成员只会进行单次映射，而数字枚举可以双向映射。常量枚举只能通过枚举成员访问枚举值，因为在编译时直接内联替换为枚举的值，

