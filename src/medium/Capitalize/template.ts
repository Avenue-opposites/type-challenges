/* problem */
// type MyCapitalize<S extends string> = any
/* answer */
type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S;

