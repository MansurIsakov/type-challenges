type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<Arr extends unknown[], Val> = Arr extends [infer V, ...infer Rest]
  ? Equal<Val, V> extends true
    ? true
    : Includes<Rest, Val>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
