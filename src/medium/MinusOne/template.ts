/* problem */
// type MinusOne<T extends number> = any
/* answer */
// 这是 @santosmarco-caribou的解答, 非常强, 学习一下
// 单数减1的情况
type MinusMap = {
  '0': -1
  '1': 0
  '2': 1
  '3': 2
  '4': 3
  '5': 4
  '6': 5
  '7': 6
  '8': 7
  '9': 8
}
// 获取前面所有的和最后一个
type _GetHeadAndLast<
  T,
  Acc extends string = ''
> =
  T extends `${infer Head}${infer Tail}`
  ? Tail extends ''
    ? [Acc, Head]
    : _GetHeadAndLast<Tail, `${Acc}${Head}`>
  : never;
// 获取第一个
type GetHead<T> = _GetHeadAndLast<T>[0]
// 获取最后一个
type GetLast<T> = _GetHeadAndLast<T>[1]
// 将字符串转换为数字
type ToNumber<T> =
  T extends `${infer U extends number}`
  ? U
  : never;
type MinusOne<T extends number> =
  `${T}` extends (infer _T extends string)
  ? _T extends keyof MinusMap
    ? MinusMap[_T]
    : ToNumber<
        GetLast<_T> extends '0'
          ? `${GetHead<_T> extends '1'
            ? ''
            : MinusOne<GetHead<_T>>}9`
          : `${GetHead<_T>}${MinusMap[GetLast<_T>]}`
      >
  : never;

// //类型实例化过深，且可能无限。
// type MinusOne<T extends number,U extends unknown[] = []> =  
//   T extends 0 
//     ? -1
//     : [...U, unknown]["length"] extends T 
//       ? U["length"] 
//       : MinusOne<T, [...U, unknown]>

// // 数字范围
// type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
// // 根据数字范围，将数字转换为数组(值无所谓, 主要用的是数组长度), 用于生成当前位数的数字
// type ConvertDigitToArray<T extends Digit, Array extends number[] = []> = 
//   `${Array["length"]}` extends T ? Array : ConvertDigitToArray<T, [...Array, 0]>
// // 数字数组乘以10, 用于进位
// type Multiply10<T extends number[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
// // 将数字转换为对应长度的数组
// type ToArray<S extends string | number, T extends any[] = []> =
//   `${S}` extends `${infer First}${infer Rest}` 
//     ? First extends Digit 
//       ? ToArray<Rest, [...Multiply10<T>, ...ConvertDigitToArray<First>]>
//       : never
//     : T
// // 计算差值
// type Minus<T extends number, U extends number> =
//   ToArray<T> extends [...ToArray<U>, ...infer Rest]
//   ? Rest["length"]
//   : -1

// type MinusOne<T extends number> = Minus<T, 1>