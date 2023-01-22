type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer T
) => any
  ? T
  : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
