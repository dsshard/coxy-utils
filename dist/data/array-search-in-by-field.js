"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchArrayFilter = void 0;
function searchArrayFilter(array, searchString, _fields) {
    if (!searchString) {
        return array;
    }
    const reg = new RegExp(encodeURI(String(searchString).toLowerCase()), 'ig');
    return array.filter((sub) => {
        const fields = (typeof _fields === 'function' ? _fields(sub) : _fields.map((field) => sub[field]));
        return fields.some((field) => !!encodeURI(String(field).toLowerCase()).match(reg));
    });
}
exports.searchArrayFilter = searchArrayFilter;
