"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = void 0;
const trim = (str) => {
    if (!str)
        return '';
    return String(str).trim();
};
exports.trim = trim;
