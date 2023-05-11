type FieldExtractor = (sub: string) => string

export function searchArrayFilter(array: any[], searchString: string, _fields: string[] | FieldExtractor) {
  if (!searchString) {
    return array
  }
  const reg = new RegExp(encodeURI(String(searchString).toLowerCase()), 'ig')
  return array.filter((sub: string) => {
    const fields = (typeof _fields === 'function' ? _fields(sub) : _fields.map((field) => sub[field])) as string[]

    return fields.some((field) => !!encodeURI(String(field).toLowerCase()).match(reg))
  })
}
