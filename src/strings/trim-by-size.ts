export function trimBySize (str: string, max: number): string {
  if (!str) return str
  return str.length > max ? str.substring(0, max) : str
}
