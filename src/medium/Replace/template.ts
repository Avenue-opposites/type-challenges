/* problem */
// type Replace<S extends string, From extends string, To extends string> = any
/* answer */
type Replace<S extends string, From extends string, To extends string> = 
S extends `${infer F}${From extends "" ? never : From}${infer R}` 
? `${F}${To}${R}`
: S;
/*
    解析:当From 为空时等于原串,否则以From分割成两份
        将To代替From的位置并且合并
*/