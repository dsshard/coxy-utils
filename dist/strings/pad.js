"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = void 0;
function pad(num, size = 2) {
    let n = String(num);
    while (n.length < size)
        n = `0${n}`;
    return n;
}
exports.pad = pad;
