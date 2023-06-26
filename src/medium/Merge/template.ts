/* problem */
// type Merge<F, S> = any
/* answer */
type Merge<F extends Object, S extends Object> = {
    [P in keyof F | keyof S]:P extends keyof S 
    ? S[P] 
    : P extends keyof F ? F[P] : never;
}
