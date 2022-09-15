"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimBySize = void 0;
function trimBySize(str, max) {
    return str.length > max ? str.substring(0, max) : str;
}
exports.trimBySize = trimBySize;
