"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchArrayFilter = void 0;
function escapeRegex(string) {
    const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    const reHasRegExpChar = RegExp(reRegExpChar.source);
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string || '';
}
function searchArrayFilter(array, searchString, _fields) {
    if (!searchString) {
        return array;
    }
    const reg = new RegExp(escapeRegex(searchString).toLowerCase(), 'ig');
    return array.filter((sub) => {
        const fields = (typeof _fields === 'function' ? _fields(sub) : _fields.map((field) => sub[field]));
        return fields.some((field) => !!encodeURI(String(field).toLowerCase()).match(reg));
    });
}
exports.searchArrayFilter = searchArrayFilter;
