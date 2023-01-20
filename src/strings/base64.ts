export const encode64 = (str) => {
  try {
    return btoa(encodeURIComponent(str || ''))
  } catch {
    return ''
  }
}
export const decode64 = (str) => {
  try {
    return decodeURIComponent(atob(str || ''))
  } catch {
    return ''
  }
}
