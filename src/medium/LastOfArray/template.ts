/* problem */
// type Last<T extends any[]> = any
/* answer */
//type Last<T extends any[]> = T extends [...infer _,infer L] ? L : never;
type Last<T extends any[]> = T extends [...any,infer L] ? L : never;