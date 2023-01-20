"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode64 = exports.encode64 = void 0;
const encode64 = (str) => {
    try {
        return btoa(encodeURIComponent(str || ''));
    }
    catch (_a) {
        return '';
    }
};
exports.encode64 = encode64;
const decode64 = (str) => {
    try {
        return decodeURIComponent(atob(str || ''));
    }
    catch (_a) {
        return '';
    }
};
exports.decode64 = decode64;
