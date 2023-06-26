/* problem */
// type AnyOf<T extends readonly any[]> = any
/* answer */
type Falsy = null | undefined | 0 | "" | [] | false | { [P in any]:never };
type AnyOf<T extends readonly any[]> = T extends [infer F,...infer R] 
? F extends Falsy ? AnyOf<R> : true  
: false;





