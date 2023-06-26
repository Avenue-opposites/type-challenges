/* problem */
// type ReplaceKeys<U, T, Y> = any
/* answer */
type ReplaceKeys<U, T extends string, Y> = {
    //判断属性名是否满足T
    [P in keyof U]:P extends T 
    //判断属性名是否满足Y的属性名的联合类型,满足类型为Y的类型,否则为never
    ? P extends keyof Y 
        ? Y[P] 
        : never
    //属性名不满足Y的属性名使用原来的类型
    : U[P];
}
