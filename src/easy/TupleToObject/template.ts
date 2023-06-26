/* problem */
// type TupleToObject<T extends readonly any[]> = any
/* answer */
type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]:K;
}



