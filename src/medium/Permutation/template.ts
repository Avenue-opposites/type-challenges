/* problem */
// type Permutation<T> = any;
/* answer */
type Permutation<T,K = T> = [T] extends [never]
? []
: K extends any ? [K,...Permutation<Exclude<T,K>>] : never;
//[A,B] | [B,A]
//[B] | [A]
