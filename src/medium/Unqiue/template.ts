type _NotExist<T extends unknown[], U> = _IsExist<T, U> extends false ? true : false

type Unique<T, Set extends unknown[] = []> = T extends [infer F, ...infer Rest]
  ? _NotExist<Set, F> extends true
    ? Unique<Rest, [...Set, F]>
    : Unique<Rest, Set>
  : Set