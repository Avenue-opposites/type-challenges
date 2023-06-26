/* problem */
// type Push<T, U> = any
/* answer */
type Push<T extends any[], U> = [...T,U];