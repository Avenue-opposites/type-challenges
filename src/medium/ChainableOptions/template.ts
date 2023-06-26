/* problem */
// type Chainable = {
//     option(key: string, value: any): any
//     get(): any
//}
/* answer */
type Chainable<T = {}> = {
    option<K extends string,V>(
        key: K extends keyof T ? never : K,
        value: V
    ): Chainable<Omit<T,K> & Record<K,V>> 
    get():T 
}
/*
    (串联构造器)
    解析：根据option的调用参数,来决定get的返回类型
    1.创建泛型保存T为最终get结果
    2.定义泛型K,V保存参数类型,限制key参数类型为string
    3.条件类型获取传入的类型
    4.排除相同的属性并将当前参数保存为对象结果
    5.递归串联设置option的返回类型
*/

