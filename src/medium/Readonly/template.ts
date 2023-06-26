/* problem */
//type MyReadonly2<T,K> = any;
/* answer */
// type MyReadonly2<T,K extends keyof T = keyof T> = {
//     readonly [P in (keyof T) as (P extends K ? P : never)]:T[P];
// } & {
//     [P in (keyof T) as (P extends K ? never : P)]:T[P]
// };
type MyReadonly2<T,K extends keyof T = keyof T> = {
    readonly [P in K]:T[P]
} & {
    [P in (keyof T) as (P extends K ? never : P)]:T[P];
};
/* 
    解析:需要有默认值,有时只传第一个泛型,默认为全部只读
    先将传入的键全部只读,然后获取全部的键断言为如果该键是传入的键就不使用
    否则就正常使用 
*/