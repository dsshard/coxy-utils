export function arrayFlatten<T>(arr: T[]): T[] {
  return arr.flat(Number.POSITIVE_INFINITY) as T[]
}
