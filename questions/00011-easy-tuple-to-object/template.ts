// https://github.com/type-challenges/type-challenges/tree/main/questions/00011-easy-tuple-to-object
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}

