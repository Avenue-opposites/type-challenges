type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  //当前迭代次数
  Count extends unknown[] = [],
  //是否需要填充
  isFill extends boolean = Count['length'] extends Start ? true : false
> = Count['length'] extends End
  ? T
  : T extends [infer F, ...infer Rest]
    ? isFill extends true
      ? [N, ...Fill<Rest, N, Start, End, [...Count, 0], isFill>]
      : [F, ...Fill<Rest, N, Start, End, [...Count, 0]>]
    : []

// 不能处理undefined填充
// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   Array extends unknown[] = []
// > = T extends [infer F, ...infer Rest]
//   ? [...Array, 0][Start] extends undefined
//     ? Fill<Rest, N, Start, End, [...Array, F]>
//         : [...Array]['length'] extends End
//           ? [...Array, ...T]
//           : Fill<Rest, N, Start, End, [...Array, N]>
//   : Array