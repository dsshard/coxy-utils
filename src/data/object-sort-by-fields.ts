export function objectSortByFields<T>(unsorted: T): T {
  return Object.keys(unsorted)
    .sort()
    .reduce((obj: T, key: string) => {
      obj[key] = typeof unsorted[key] === 'object' ? objectSortByFields(unsorted[key]) : unsorted[key]
      return obj
    }, {} as T)
}
