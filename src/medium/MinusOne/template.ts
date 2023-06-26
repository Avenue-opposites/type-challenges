/* problem */
// type MinusOne<T extends number> = any
/* answer */
type MinusOne<T extends number,U extends number[] = []> =  U["length"] extends T 
? U extends [infer _,...infer R] ? R["length"] : never
: MinusOne<T,[...U,T]>;

type test = MinusOne<100>;
