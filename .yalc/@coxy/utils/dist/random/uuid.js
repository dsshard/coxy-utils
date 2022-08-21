"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
function uuid(len = 100) {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`.slice(0, len);
}
exports.uuid = uuid;
