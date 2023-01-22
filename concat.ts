type Concat<Arr1 extends any[], Arr2 extends any[]> = [...Arr1, ...Arr2];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
