"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateForm = void 0;
const react_1 = require("react");
function setterObjectValue(obj, keys, value) {
    keys = typeof keys === 'string' ? keys.split('.') : keys;
    const key = keys.shift();
    if (keys.length === 0) {
        obj[key] = value;
        return obj;
    }
    else if (!obj[key] === undefined) {
        obj[key] = {};
    }
    setterObjectValue(obj[key], keys, value);
    return obj;
}
const useStateForm = (initialValue) => {
    const initial = (initialValue || {});
    const [values, setValuesByKey] = (0, react_1.useState)(initial);
    const clear = (0, react_1.useCallback)(() => {
        setValuesByKey(() => initial);
    }, []);
    const setValue = (0, react_1.useCallback)((key, val) => {
        if (val !== undefined) {
            setValuesByKey((data) => {
                const res = setterObjectValue(data, key, val);
                return Object.assign({}, res);
            });
            return;
        }
        return (value) => {
            setValuesByKey((data) => {
                const res = setterObjectValue(data, key, value);
                return Object.assign({}, res);
            });
        };
    }, [values]);
    return [values, setValue, clear];
};
exports.useStateForm = useStateForm;
