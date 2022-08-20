"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = exports.EMAIL_REGEXP = void 0;
exports.EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isValidEmail(email) {
    if (!email)
        return false;
    return exports.EMAIL_REGEXP.test(email);
}
exports.isValidEmail = isValidEmail;
