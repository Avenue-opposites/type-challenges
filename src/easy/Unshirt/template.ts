/* problem */
//type Unshift<T,U> = any;
/* answer */
type Unshift<T extends any[],U> = [U,...T];
