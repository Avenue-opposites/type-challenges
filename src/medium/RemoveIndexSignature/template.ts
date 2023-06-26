/* problem */
// type RemoveIndexSignature<T> = any;
/* answer */
type CheckIndexSignature<T,U = PropertyKey> = U extends T ? true : false; 
type RemoveIndexSignature<T> = { 
    [K in keyof T as CheckIndexSignature<K> extends false ? K : never]:T[K]
};









