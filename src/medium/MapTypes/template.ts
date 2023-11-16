interface _MapObj<From = unknown, To = unknown> {
  mapFrom: From;
  mapTo: To
}

type GetMapObj<T extends _MapObj, U> = 
  T extends any ?
   T['mapFrom'] extends U 
    ? T 
    : never
  : never

type MapTypes<T extends Record<PropertyKey, unknown>, R extends _MapObj> = {
  [K in keyof T]: T[K] extends R['mapFrom']
    ? GetMapObj<R, T[K]>['mapTo']
    : T[K]
}