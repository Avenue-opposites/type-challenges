type PartialByKeys<T, K extends keyof T = keyof T> = TypeMapping<{
  [P in K]?: T[P]
} & {
  [P in (keyof T) as P extends K ? never : P]: T[P]
}>

type TypeMapping<T> = {
  [P in keyof T]: T[P]
}