"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
const groupBy = (items, getter) => items.reduce((groups, item) => {
    const dateKey = getter(item);
    if (!groups[dateKey]) {
        return Object.assign(groups, {
            [dateKey]: {
                key: dateKey,
                items: [item],
            },
        });
    }
    groups[dateKey].items.push(item);
    return groups;
}, {});
exports.groupBy = groupBy;
