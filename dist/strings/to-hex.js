"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = void 0;
function toHex(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result;
}
exports.toHex = toHex;
