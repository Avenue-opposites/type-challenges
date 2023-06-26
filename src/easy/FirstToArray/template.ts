/* problem */
// type First<T extends any[]> = any
/* answer */
//1.type First<T extends any[]> = T extends [infer F,...infer _] ? F : never;
//2.type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
type First<T extends any[]> = T extends [] ? never : T[0];
