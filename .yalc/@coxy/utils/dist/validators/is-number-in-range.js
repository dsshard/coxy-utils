"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberInRange = void 0;
function isNumberInRange(value, min, max) {
    return Number(value) >= min && Number(value) <= max;
}
exports.isNumberInRange = isNumberInRange;
