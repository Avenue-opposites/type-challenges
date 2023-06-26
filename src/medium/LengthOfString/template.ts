/* problem */
// type LengthOfString<S extends string> = any;
/* answer */
type LengthOfString<S extends string,L extends string[] = []> = S extends `${infer F}${infer R}`
? LengthOfString<R,[...L,F]> 
: L["length"]; 
//add [] -> dd [a] -> d [a,d] -> "" [a,d,d]
// type test = LengthOfString<"add">;


