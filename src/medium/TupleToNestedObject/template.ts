type TupleToNestedObject<T extends PropertyKey[], U> = 
  T extends [infer F extends PropertyKey, ...infer Rest extends PropertyKey[]] 
  ? Record<F, TupleToNestedObject<Rest, U>>
  : U