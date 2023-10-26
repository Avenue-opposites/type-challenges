type ArrayWithLength<T extends number, Array extends unknown[] = []> = Array['length'] extends T ? Array : ArrayWithLength<T, [...Array, 0]>

type GreaterThan<T extends number, U extends number> = 
  ArrayWithLength<U> extends [...ArrayWithLength<T>, ...infer _] 
  ? false 
  : true