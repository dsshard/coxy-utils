"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateAddDays = exports.dateFormat = void 0;
const pad_1 = require("../strings/pad");
const capitalize_1 = require("../strings/capitalize");
const monthNamesShort = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const monthNamesLong = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
function dateFormat(template, date) {
    const specs = 'hh:TT:tt:MMMM:Mmmm:MMM:Mmm:YYYY:MM:DD:HH:mm:ss'.split(':');
    const d = new Date(date || Date.now());
    const m = d.getMonth();
    const h = d.getHours();
    const TT = h > 12 ? 'PM' : 'AM';
    const hh = (0, pad_1.pad)(h % 12 || 12);
    const iso = `${hh}:${TT}:${TT.toLowerCase()}:${monthNamesLong[m]}:${(0, capitalize_1.capitalize)(monthNamesLong[m])}:${monthNamesShort[m]}:${(0, capitalize_1.capitalize)(monthNamesShort[m])}:${d.toISOString()}`;
    return iso.split(/[-:.TZ]/).reduce((template, item, i) => template.split(specs[i]).join(item), template);
}
exports.dateFormat = dateFormat;
const dateAddDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
};
exports.dateAddDays = dateAddDays;
