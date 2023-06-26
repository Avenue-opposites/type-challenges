/* problem */
// type MyPick<T, K> = any
/* answer */
type MyPick<T,K extends keyof T> = {
    [P in K]:T[P];
}