/* problem */
// type Trim<S extends string> = any; 
/* answer */
type WhiteSpace = " " | "\n" | "\t";
type Trim_Right<S extends string> = S extends `${infer V}${whiteSpace}` ? Trim_Right<V> : S;
// type Trim<S extends string> = S extends `${whiteSpace}${infer V}${whiteSpace}` 
// ? Trim<V> 
// : S extends `${WhiteSpace}${infer R}` ? TrimLeft<R> : TrimRight<S>;
type Trim<S extends string> = S extends `${WhiteSpace}${infer V}` 
? Trim<V>
: Trim_Right<S>;