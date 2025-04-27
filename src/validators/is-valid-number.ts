export function isValidNumber(value: string): boolean {
  return !Number.isNaN(Number.parseFloat(value)) && !Number.isNaN(Number(value))
}
