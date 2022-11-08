// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
// type First<T extends any[]> = T extends [ infer F, ...any[]] ? F : never
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

