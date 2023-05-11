const DOT_NUM_REGEXP = /^\d*[.]?(\d*)$/
const COMMA_NUM_REGEXP = /^\d*,?(\d*)$/

export const isValidNumericString = (num: string): boolean => COMMA_NUM_REGEXP.test(num) || DOT_NUM_REGEXP.test(num)
