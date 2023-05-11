"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_keys_1 = require("../data/object-keys");
function patchStateReducer(state, action) {
    const keys = (0, object_keys_1.objectKeys)(action.payload);
    keys.forEach((key) => {
        state[key] = action.payload[key];
    });
}
exports.default = patchStateReducer;
