import { isValidNumber } from './is-valid-number'

export function isPositiveNumber (value: string): boolean {
  return isValidNumber(value) && Number(value) > 0
}
