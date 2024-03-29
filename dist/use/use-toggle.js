"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
function useToggle(defaultValue = false) {
    const [isVisible, setToggle] = (0, react_1.useState)(defaultValue);
    const open = (0, react_1.useCallback)(() => setToggle(true), []);
    const close = (0, react_1.useCallback)(() => setToggle(false), []);
    const toggle = (0, react_1.useCallback)(() => setToggle(!isVisible), [isVisible]);
    return [isVisible, open, close, toggle];
}
exports.useToggle = useToggle;
