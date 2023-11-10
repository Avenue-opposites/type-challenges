type Without<T extends unknown[], U, UType = U extends unknown[] ? U[number] : U> = T extends [infer F, ...infer Rest]
  ? F extends UType
    ? Without<Rest, U>
    : [F, ...Without<Rest, U>]
  : T