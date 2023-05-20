"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findItemsByFromToDate = exports.findLastFiveItems = void 0;
const date_1 = require("./date");
function findLastFiveItems(username) {
    return {
        take: 5,
        where: {
            User: {
                username,
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    };
}
exports.findLastFiveItems = findLastFiveItems;
function findItemsByFromToDate({ from, to, username, }) {
    const gt = (0, date_1.padDate)(from);
    const lt = to ? (0, date_1.padDate)(to) : gt;
    return {
        where: {
            createdAt: {
                gt: `${gt}T00:00:00.001Z`,
                lt: `${lt}T23:59:59.591Z`,
            },
            User: {
                username,
            },
        },
        include: {
            products: true,
        },
    };
}
exports.findItemsByFromToDate = findItemsByFromToDate;
//# sourceMappingURL=selectors.js.map