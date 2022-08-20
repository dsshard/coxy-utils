"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositiveNumber = void 0;
const is_valid_number_1 = require("./is-valid-number");
function isPositiveNumber(value) {
    return (0, is_valid_number_1.isValidNumber)(value) && value > 0;
}
exports.isPositiveNumber = isPositiveNumber;
