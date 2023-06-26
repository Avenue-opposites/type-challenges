/* problem */
//type MyOmit<T,K> = any;
/* answer */
type MyOmit<T,K extends keyof T> = {
    [P in (keyof T) as P extends K ? never : P]:T[P]
};
