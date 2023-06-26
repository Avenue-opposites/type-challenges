/* problem */
// type TupleToUnion<T> = any;
/* answer */
type TupleToUnion<T extends any[]> = T[number];