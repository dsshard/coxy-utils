"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqBy = void 0;
function uniqBy(array, getter) {
    const result = [];
    const map = new Map();
    for (const item of array) {
        const id = getter(item);
        if (!map.has(id)) {
            map.set(id, true);
            result.push(item);
        }
    }
    return result;
}
exports.uniqBy = uniqBy;
