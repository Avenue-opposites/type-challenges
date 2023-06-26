/* problem */
//type Concat<T,U> = any; 
/* answer */
type Concat<T extends any[],U extends any[]> = [...T,...U]; 
