type IndexOf<T extends unknown[], U, Index extends unknown[] = []> = T extends [infer F, ...infer Rest]
  ? true extends _IsEqual<F, U>
    ? Index['length']
    : IndexOf<Rest, U, [...Index, 0]>
  : -1

type _IsEqual<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false