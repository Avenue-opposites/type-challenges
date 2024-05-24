type ConstructTuple<L extends number, V = unknown, Array extends unknown[] = []> =
  L extends Array['length']
    ? Array
    : ConstructTuple<L, V,[...Array, V]>