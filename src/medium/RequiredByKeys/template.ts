type RequiredByKeys<T, K extends keyof T = keyof T> = TypeMapping<{
  [P in K]-?: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}>