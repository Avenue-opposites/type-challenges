type FlattenDepth<T extends unknown[], N extends number = 1, Array extends unknown[] = []> =
  Array['length'] extends N
    ? T
    : T extends [infer F, ...infer Rest]
      ? F extends unknown[]
        ? [...FlattenDepth<F, N, [...Array, 0]>, ...FlattenDepth<Rest, N, Array>]
        : [F, ...FlattenDepth<Rest, N, Array>]
      : T  
      
//这个有点bug,不能处理999以上的
// type FlattenDepth<T extends unknown[], N extends number = 1, Array extends unknown[] = []> =
//   Array['length'] extends N
//     ? T
//     : Array['length'] extends 999
//       ? T
//       : FlattenDepth<FlattenOnce<T>, N, [...Array, N]>

// //展平一次
// type FlattenOnce<T extends unknown[], Array extends unknown[] = []> = T extends [infer F, ...infer Rest]
//   ? F extends unknown[]
//     ? FlattenOnce<Rest, [...Array, ...F]>
//     : FlattenOnce<Rest, [...Array, F]>
//   : Array