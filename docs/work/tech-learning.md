# 新技术学习

## Keycloak

一套认证授权系统管理解决方案，

## Typescript

JavaScript的超集，一门静态类型、弱类型的语言，是添加了类型系统的JavaScript。

- 定义变量时未指定类型，定义时有赋值会推断为赋值的类型，定义时未赋值会推断为any

- 接口用于定义对象的类型，也用于对对象形状的描述，`[propName: string]: any`用于允许有任意的属性

- 联合类型`|`

- 只读类型使用`readonly`关键字，`readonly id: string`，只能在定义时给该属性赋值

- 数组，`number[]`或者`Array<number>`或者使用接口

- 对于类数组需要使用接口，typescript内置了常用的 `IArguments`, `NodeList`, `HTMLCollection` 等

- 函数，`function sum(x: number, y: number): number { return x + y; }`，对于函数表达式，需要使用`=>`来定义，`let sum: (x: number, y: number) => number =  function(x: number, y: number): number { return x + y }

- 可选参数，`function sum(x: number, y?:number)`，可选参数后不允许出现必需参数

- 设置了默认值的参数识别为可选参数，但是不受可选参数后不能接必需参数的限制

- 重载，通过多次声明函数，实现对输入不同类型就输出指定类型的定义

  ```javascript
  function reverse(x: number): number {};
  function reverse(x: string): string {};
  function resvese(x: number | string): number | string | void {
      if (typeof x === 'number') {
          return Number(x.toString().split('').reverse().join(''));
      } else if (typeof x === 'string') {
          return x.split('').reverse().join('');
      }
  }
  ```

- 类型断言，`值 as 类型`，常用于将联合类型断言为其中一个类型，避免访问其中一个类型的特定属性/方法时报错，要避免断言后调用方法或者引用深层属性的情况；也用于将父类断言为具体的子类，避免访问子类特有的属性时报错。

- 内置对象，`Boolean`、`Error`、`Date`、`RegExp` 等，`Document`、`HTMLElement`、`Event`、`NodeList` 等。

- `type Name = string | number`，类型别名，常用于联合类型

- `type EventNames = 'click' | 'scrol'`，字符串字面量类型

- `let tom: [string, number] = ['tom', 23]`，元组，不同类型的对象的集合

- `enum Days {Yestoday, Today, Tomorrow};`，取值被限定范围，Days['Yestoday'] === 0，Days[0] === 'Yestoday'