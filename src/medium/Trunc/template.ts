type Trunc<T extends number | string> = T extends '' 
  ? '0'
  : `${T}` extends `${infer F}.${infer _}` 
    ? Trunc<F>
    : `${T}`