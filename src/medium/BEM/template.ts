type BEM<B extends string, E extends string[] = [], M extends string[] = []> =
  M['length'] extends 0
    ? `${Split<[B, ...E], '__'>}`
    : `${Split<[B, ...E], '__'>}--${M[number]}`

type Split<T extends unknown[], Delimiter extends string = ''> =
  T extends [infer F extends string | number, ...infer Rest]
    ? `${F}${Rest['length'] extends 0 ? '' : Delimiter}${Split<Rest, Delimiter>}`
    : ''