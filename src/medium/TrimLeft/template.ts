/* problem */
// type TrimLeft<S extends string> = any;
/* answer */
type whiteSpace = " " | "\n" | "\t";
type TrimLeft<S extends string> =  S extends `${whiteSpace}${infer V}` 
? TrimLeft<V> 
: S;


