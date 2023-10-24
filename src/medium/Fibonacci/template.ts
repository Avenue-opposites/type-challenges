type Fibonacci<T extends number, Cache extends 0[] = [0, 0, 0], N_1 extends 0[] = [0], N_2 extends 0[] = [0]> = 
  T extends 1 | 2 
    ? 1
    : Cache['length'] extends T
      ? [...N_1, ...N_2]['length']
      : Fibonacci<T, [...Cache, 0], N_2, [...N_1, ...N_2]>