"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConditionError = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const createDebouncedAsyncThunk = (typePrefix, options, payloadCreator) => {
    const { maxWait = 0, leading = false } = options !== null && options !== void 0 ? options : {};
    let timer = 0;
    let maxTimer = 0;
    let res;
    const invoke = () => {
        clearTimeout(maxTimer);
        maxTimer = 0;
        if (res) {
            res(true);
            res = undefined;
        }
    };
    const cancel = () => {
        if (res) {
            res(false);
            res = undefined;
        }
    };
    return (0, toolkit_1.createAsyncThunk)(typePrefix, payloadCreator, {
        condition() {
            const immediate = leading && !timer;
            clearTimeout(timer);
            timer = setTimeout(() => {
                invoke();
                timer = 0;
            }, options.wait);
            if (immediate)
                return true;
            cancel();
            if (maxWait && !maxTimer)
                maxTimer = setTimeout(invoke, maxWait);
            return new Promise((resolve) => {
                res = resolve;
            });
        },
    });
};
const isConditionError = (toBeDetermined) => (toBeDetermined === null || toBeDetermined === void 0 ? void 0 : toBeDetermined.name) === 'ConditionError';
exports.isConditionError = isConditionError;
exports.default = createDebouncedAsyncThunk;
