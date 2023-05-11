"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNumericString = void 0;
const DOT_NUM_REGEXP = /^\d*[.]?(\d*)$/;
const COMMA_NUM_REGEXP = /^\d*,?(\d*)$/;
const isValidNumericString = (num) => COMMA_NUM_REGEXP.test(num) || DOT_NUM_REGEXP.test(num);
exports.isValidNumericString = isValidNumericString;
