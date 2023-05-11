export function isValidNumber(value: string): boolean {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value))
}
