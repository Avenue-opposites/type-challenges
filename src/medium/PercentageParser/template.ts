/* problem */
// type PercentageParser<A extends string> = any
/* answer */
type PercentageCheck<S extends string> = S extends `${infer L}%` ? [L,'%'] : [S,""];
type PercentageParser<A extends string> = A extends `${infer F}${infer R}`
? F extends '+' | '-' ? [F,...PercentageCheck<R>] : ["",...PercentageCheck<A>]
: ["",...PercentageCheck<A>]; 
