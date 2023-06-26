/* problem */
// type AppendToObject<T, U, V> = any
/* answer */
type AppendToObject<T extends Object, U extends PropertyKey, V> = {
    [P in keyof T | U]:P extends U ? V : T[Exclude<P,U>]
}
