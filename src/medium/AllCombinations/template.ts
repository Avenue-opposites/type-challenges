//method 1
// type AllCombinations<S extends string, U extends string = StringToUnion2<S>, Current extends string = U> = 
//   Current extends U
//     ? Current extends ''
//       ? ''
//       : `${Current}${AllCombinations<'', Exclude<U, Current>>}`
//     : never
// type StringToUnion2<T> = T extends `${infer F}${infer Rest}` ? F | StringToUnion2<Rest> : ''

//method 2
type AllCombinations<S extends string, U extends string = StringToUnion2<S>> = 
  [U] extends [never]
    ? never
    : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`}[U]
  
type StringToUnion2<T> = T extends `${infer F}${infer Rest}` ? F | StringToUnion2<Rest> : ''