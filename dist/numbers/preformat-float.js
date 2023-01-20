"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preformatFloat = void 0;
function preformatFloat(float) {
    if (!float) {
        return '';
    }
    const posC = float.indexOf(',');
    if (posC === -1) {
        return float;
    }
    const posFS = float.indexOf('.');
    if (posFS === -1) {
        return float.replace(/,/g, '.');
    }
    return ((posC < posFS) ? (float.replace(/,/g, '')) : (float.replace(/\./g, '').replace(',', '.')));
}
exports.preformatFloat = preformatFloat;
