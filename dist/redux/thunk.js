"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thunkMiddleware = void 0;
const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};
exports.thunkMiddleware = thunkMiddleware;
