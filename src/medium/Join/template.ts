type _Base = string | number | boolean
type Join<T extends unknown[], U extends _Base> = T extends [infer F extends _Base, ...infer Rest]
  ? Rest extends []
    ? F
    : `${F}${U}${Join<Rest, U>}`
  : ''