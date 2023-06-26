/* problem */
// type IsUnion<T> = any
/* answer */
type IsUnion<T,Acc = T> = [T] extends [never] 
? false 
: Acc extends any 
    ? Exclude<T,Acc> extends never 
        ? false 
        : true 
    : false;



