// https://github.com/type-challenges/type-challenges/tree/main/questions/00007-easy-readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
