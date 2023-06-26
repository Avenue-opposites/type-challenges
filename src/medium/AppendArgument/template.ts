/* problem */
// type AppendArgument<Fn, A> = any
/* answer */
type AppendArgument<Fn extends Function, A> = Fn extends (...args:infer T) => infer R 
? (...args:[...T,A]) => R
: never; 
