type TrimRight<S extends string> = S extends `${infer Left}${WhiteSpace}`
  ? TrimRight<Left>
  : S