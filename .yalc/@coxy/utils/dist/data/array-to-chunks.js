"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToChunks = void 0;
function arrayToChunks(arr, len) {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}
exports.arrayToChunks = arrayToChunks;
