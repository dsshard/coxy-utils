export function isObject(item): boolean {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export function mergeDeep(target, source) {
  const output = Object.assign({}, target)
  if (isObject(target) && isObject(source)) {
    for (const key of Object.keys(source)) {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] })
        } else {
          output[key] = mergeDeep(target[key], source[key])
        }
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    }
  }
  return output
}
