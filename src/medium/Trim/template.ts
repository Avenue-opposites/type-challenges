/* problem */
// type Trim<S extends string> = any; 
/* answer */
type WhiteSpace = " " | "\n" | "\t";
type TrimRight<S extends string> = S extends `${infer V}${whiteSpace}` ? TrimRight<V> : S;
// type Trim<S extends string> = S extends `${whiteSpace}${infer V}${whiteSpace}` 
// ? Trim<V> 
// : S extends `${WhiteSpace}${infer R}` ? TrimLeft<R> : TrimRight<S>;
type Trim<S extends string> = S extends `${WhiteSpace}${infer V}` 
? Trim<V>
: TrimRight<S>;