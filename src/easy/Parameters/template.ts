/* problem */
// type MyParameters<T> = any;
/* answer */
type MyParameters<T extends Function> = T extends (...args:infer P) => any ? P : never;
