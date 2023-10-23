type Flip<T> = {
  [K in keyof T as T[K] extends PropertyKey ? T[K] : ToString<T[K]>]: ToBoolean<K>
}

type ToString<T> = T extends string | number | boolean ? `${T}` : never
type ToBoolean<S> = S extends `${infer B extends boolean}` ? B : S