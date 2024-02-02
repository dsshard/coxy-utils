type FieldExtractor<T> = (sub: T) => string

export function escapeRegex(string: string) {
  const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
  const reHasRegExpChar = RegExp(reRegExpChar.source)
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string || ''
}

export function searchArrayFilter<T>(array: T[], searchString: string, _fields: (keyof T)[] | FieldExtractor<T>) {
  if (!searchString) {
    return array
  }
  const reg = new RegExp(escapeRegex(searchString).toLowerCase(), 'ig')
  return array.filter((sub: T) => {
    const fields = (typeof _fields === 'function' ? _fields(sub) : _fields.map((field) => sub[field])) as string[]

    return fields.some((field) => !!encodeURI(String(field).toLowerCase()).match(reg))
  })
}
