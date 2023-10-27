type Zip<T extends unknown[], U extends unknown[]> =
  T extends [infer TF, ...infer TRest]
    ? U extends [infer UF, ...infer URest]
      ? [[TF, UF], ...Zip<TRest, URest>]
      : []
    : []