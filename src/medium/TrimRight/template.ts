type TrimRight<S extends string> = S extends `${infer Left}${WhiteSpace}`
  ? TrimRight<Left>
  : S

type test = TrimRight<'   foo bar  \n\t '>