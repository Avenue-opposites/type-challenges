type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
Swap['length'] extends N
  ? [Swap, ...Chunk<T, N>]
  : T extends [infer K, ...infer L]
    ? Chunk<L, N, [...Swap, K]>
    : Swap extends [] ? Swap : [Swap]

// type FirstToN<T extends any[], N extends number, Array extends any[] = []> = 
//   Array['length'] extends N 
//     ? Array 
//     : T extends [infer F, ...infer Rest]
//       ? FirstToN<Rest, N, [...Array, F]>
//       : Array

// type Chunk<T extends unknown[], Size extends number> =
//   T extends [...FirstToN<T extends [] ? never : T, Size>, ...infer Rest]
//     ? [FirstToN<T, Size>, ...Chunk<Rest, Size>]
//     : []