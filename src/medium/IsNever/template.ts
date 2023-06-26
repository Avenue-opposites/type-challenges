/* problem */
// type IsNever<T> = any
/* answer */
//清除类型分发
type IsNever<T> = [T] extends [never] 
? true 
: false;


