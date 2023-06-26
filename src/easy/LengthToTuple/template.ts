/* problem */
//type Length<T> = any
/* answer */
//1.type Length<T> = T extends readonly any[] ? T["length"] : never;
//2.type Length<T extends any[]> = T["length"];
type Length<T extends { length:number }> = T["length"];
