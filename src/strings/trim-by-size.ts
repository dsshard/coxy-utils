export function trimBySize (str: string, max: number): string {
  return str.length > max ? str.substring(0, max) : str
}
