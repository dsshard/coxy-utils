"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSortByFields = void 0;
function objectSortByFields(unsorted) {
    return Object.keys(unsorted)
        .sort()
        .reduce((obj, key) => {
        obj[key] = typeof unsorted[key] === 'object' ? objectSortByFields(unsorted[key]) : unsorted[key];
        return obj;
    }, {});
}
exports.objectSortByFields = objectSortByFields;
