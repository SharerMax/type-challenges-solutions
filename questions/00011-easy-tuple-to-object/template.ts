// https://github.com/type-challenges/type-challenges/tree/main/questions/00011-easy-tuple-to-object

// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// https://stackoverflow.com/questions/59187941/whats-the-tnumber-mean-in-typescript-code
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}

