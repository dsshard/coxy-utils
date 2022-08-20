export function objectSortByFields <T> (unsorted: T): T {
  return Object.keys(unsorted).sort().reduce((obj: any, key: string) => {
    obj[key] = typeof unsorted[key] === 'object' ? objectSortByFields(unsorted[key]) : unsorted[key]
    return obj
  }, {})
}

