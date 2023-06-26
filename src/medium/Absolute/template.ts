/* problem */
// type Absolute<T extends number | string | bigint> = any
/* answer */
type Absolute<T extends number | string | bigint> = T extends string 
? T extends `-${infer F}` ? F : T 
: Absolute<`${T}`>;

