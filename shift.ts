type Result = Shift<[3, 2, 1]>; // [2, 1]

type Shift<A extends unknown[]> = A extends [any, ...infer Rest] ? Rest : never;
