/* problem */
// type MinusOne<T extends number> = any
/* answer */
// 数字范围
type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
// 根据数字范围，将数字转换为数组(值无所谓, 主要用的是数组长度), 用于生成当前位数的数字
type ConvertDigitToArray<T extends Digit, Array extends number[] = []> = 
  `${Array["length"]}` extends T ? Array : ConvertDigitToArray<T, [...Array, 0]>
// 数字数组乘以10, 用于进位
type Multiply10<T extends number[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
// 将数字转换为对应长度的数组
type ToArray<S extends string | number, T extends any[] = []> =
  `${S}` extends `${infer First}${infer Rest}` 
    ? First extends Digit 
      ? ToArray<Rest, [...Multiply10<T>, ...ConvertDigitToArray<First>]>
      : never
    : T
// 计算差值
type Minus<T extends number, U extends number> =
  ToArray<T> extends [...ToArray<U>, ...infer Rest]
  ? Rest["length"]
  : -1
type MinusOne<T extends number> = Minus<T, 1>

// 类型实例化过深，且可能无限。
// type MinusOne<T extends number,U extends unknown[] = []> =  
// [...U, unknown]["length"] extends T 
//   ? U["length"] 
//   : MinusOne<T, [...U, unknown]>