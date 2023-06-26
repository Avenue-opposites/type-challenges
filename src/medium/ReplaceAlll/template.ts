/* problem */
// type Replace<S extends string, From extends string, To extends string> = any
/* answer */
type ReplaceAll<S extends string, From extends string, To extends string> = 
S extends `${infer F}${From extends "" ? never : From}${infer R}` 
? `${F}${To}${ReplaceAll<R,From,To>}`
: S;

/*
    解析:和Replace的逻辑一样,只是将替换之后的字符递归替换
*/