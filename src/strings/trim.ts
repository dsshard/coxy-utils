export const trim = (str: string | number | null | undefined): string => {
  if (!str) return ''
  return String(str).trim()
}
