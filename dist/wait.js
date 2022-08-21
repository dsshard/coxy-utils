"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
async function wait(time) {
    return new Promise((resolve) => setTimeout(() => resolve(null), time));
}
exports.wait = wait;
