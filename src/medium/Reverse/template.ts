type Reverse<T> = T extends [infer F, ... infer Rest]
  ? [...Reverse<Rest>, F]
  : []