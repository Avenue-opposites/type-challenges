/* problem */
// type MyReadonly<T> = any
/* answer */
type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}