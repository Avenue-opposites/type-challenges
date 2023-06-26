/* problem */
// type MyExclude<T,U> = any;
/* answer */
type MyExclude<T,U> = T extends U ? never : T;