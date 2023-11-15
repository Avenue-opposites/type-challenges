type _isExist<T extends unknown[], U> = T extends [infer F, ...infer Rest]
  ? _IsEqual<F, U> extends true
    ? true
    : _isExist<Rest, U>
  : false

type LastIndexOf<
  T extends unknown[],
  U,
  Index extends unknown[] = [],
  isExist extends boolean = _isExist<T, U>
> = isExist extends true
  ? T extends [infer _, ...infer Rest]
    ? _isExist<Rest, U> extends true
      ? LastIndexOf<Rest, U, [...Index, 0]>
      : Index['length']
    : Index['length']
  : -1