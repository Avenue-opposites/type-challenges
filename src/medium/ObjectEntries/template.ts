type ObjectEntries<T> = 
  T extends Record<infer K, infer V>
  ? K extends keyof T
    ? [K, Extract<V, T[K]>]
    : never
  : ObjectEntries<KeyValueNeverToUndefined<Required<T>>> 

type NeverToUndefined<T> = IsNever<T> extends true ? undefined : T
type KeyValueNeverToUndefined<T> = {
  [K in keyof T]: NeverToUndefined<T[K]>
}