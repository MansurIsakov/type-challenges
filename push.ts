type Push<Arr extends unknown[], Val> = [...Arr, Val];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
