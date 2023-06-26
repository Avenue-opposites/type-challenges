/* problem */
// type Flatten<T extends any[]> = any
/* answer */
//T为正在处理的值,A为处理完毕的值
// type Flatten<T,A extends any[] = []> = T extends [infer F,...infer R] 
// //判断当前元素是否为二维数组
// ? F extends any[][] 
//     //递归将为处理的值传递,并将之前处理好的与高维转换为低维的结果合并
//     ? Flatten<R,[...A,HighToLow<F>]> 
//     //判断元素是否为数组
//     : F extends any[] 
//         //递归,将当前数组和已处理
//         ? Flatten<R,[...A,...F]> 
//         : Flatten<R,[...A,F]>
// : A;

// type Flatten<T extends any[]> = T extends [infer F,infer R] 
// ? 
type Flatten<T extends any[]> = T extends [infer F,...infer R] 
//判断当前元素是否为数组
? F extends any[] 
    //递归当前元素与未处理的元素并展开合并
    ? [...Flatten<F>,...Flatten<R>] 
    //当前值与未处理的元素展开合并
    : [F,...Flatten<R>]
//当T为空数组时返回空数组
: T;








