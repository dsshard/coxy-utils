"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
function isValidDate(value) {
    const parsedDate = Date.parse(value);
    return !isNaN(parsedDate);
}
exports.isValidDate = isValidDate;
