export function arrayFlatten <T> (arr: T[]): T[] {
  return arr.flat(Infinity) as T[]
}
