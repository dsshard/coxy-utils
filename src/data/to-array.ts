export function toArray <T> (any: T): T[] {
  return Array.isArray(any) ? any : [any]
}

