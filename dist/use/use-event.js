"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvent = void 0;
const react_1 = require("react");
function useEvent(callback) {
    const handlerRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(() => {
        handlerRef.current = callback;
    });
    const action = (0, react_1.useCallback)((...args) => {
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
    return action;
}
exports.useEvent = useEvent;
