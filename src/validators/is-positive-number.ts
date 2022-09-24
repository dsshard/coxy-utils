import { isValidNumber } from './is-valid-number'

export function isPositiveNumber (value: string | number): boolean {
  return isValidNumber(value) && value > 0
}
