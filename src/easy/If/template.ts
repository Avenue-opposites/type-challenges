/* problem */
//type If<C, T, F> = any
/* answer */
type If<C extends boolean, T, F> = C extends true ? T : F;
//type If<C extends boolean, T, F> = C extends false ? F : T;