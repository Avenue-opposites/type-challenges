/* problem */
//type LookUp<U, T> = any
/* answer */
type LookUp<U,T extends string> = U extends { type: T } ? U : never;
// type LookUp<U,T extends string> = {
//     [P in T]:U extends { type: P } ? U : never 
// }[T];





