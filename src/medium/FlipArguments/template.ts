type FlipArguments<T extends Function> = T extends (...args: infer Args) => infer R
  ? (...args: Reverse<Args>) => R
  : T