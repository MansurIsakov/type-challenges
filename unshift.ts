type Unshift<Arr extends unknown[], Val> = [Val, ...Arr];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
