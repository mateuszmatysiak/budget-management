"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padDate = exports.formatDate = exports.getCurrentDate = exports.getCurrentMonth = exports.getAllWeekDateDays = void 0;
const date_fns_1 = require("date-fns");
function getAllWeekDateDays() {
    const date = new Date();
    const week = new Array();
    date.setDate(date.getDate() - date.getDay() + 1);
    for (let i = 0; i < 7; i++) {
        week.push(formatDate(new Date(date)));
        date.setDate(date.getDate() + 1);
    }
    return week;
}
exports.getAllWeekDateDays = getAllWeekDateDays;
function getCurrentMonth() {
    const date = new Date();
    const [year, month, day] = formatDate((0, date_fns_1.startOfMonth)(date)).split("-");
    const end = formatDate((0, date_fns_1.lastDayOfMonth)(date));
    return [`${year}-${month}-0${day}`, end];
}
exports.getCurrentMonth = getCurrentMonth;
function padDate(date) {
    const dt = typeof date === "string" ? new Date(date) : date;
    const [year, month, day] = formatDate(dt).split("-");
    const d = (day === null || day === void 0 ? void 0 : day.length) === 1 ? `0${day}` : day;
    const m = (month === null || month === void 0 ? void 0 : month.length) === 1 ? `0${month}` : month;
    return `${year}-${m}-${d}`;
}
exports.padDate = padDate;
function getCurrentDate() {
    const date = new Date();
    return formatDate(date);
}
exports.getCurrentDate = getCurrentDate;
function formatDate(date) {
    return date.toLocaleDateString("pl-PL").split(".").reverse().join("-");
}
exports.formatDate = formatDate;
//# sourceMappingURL=date.js.map