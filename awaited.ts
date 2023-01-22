type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T;

type ExampleType = Promise<string[]>;

type Result = MyAwaited<ExampleType>; // string
