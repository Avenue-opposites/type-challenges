/* problem */
// declare function PromiseAll(values: any): any
/* answer */
declare function PromiseAll<T extends any[]>(
    values: (readonly [...T])
):Promise<{ 
    [K in keyof T]:Awaited<T[K]>
}>







