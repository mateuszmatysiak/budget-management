"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatReportData = exports.sumProductsByCategory = exports.sumProductsOfShopping = void 0;
const create_shopping_dto_1 = require("../shopping/dto/create-shopping.dto");
function sumProductsOfShopping(arr) {
    return arr
        .flatMap((shoppingItem) => shoppingItem.products)
        .reduce((sum, product) => sum + parseFloat(product.price), 0);
}
exports.sumProductsOfShopping = sumProductsOfShopping;
function sumProductsByCategory(arr, category) {
    const products = arr.flatMap((shoppingItem) => shoppingItem.products);
    return products
        .filter((product) => product.category === category)
        .reduce((sum, product) => sum + parseFloat(product.price), 0);
}
exports.sumProductsByCategory = sumProductsByCategory;
function formatReportData(shopping) {
    return shopping.flatMap((shoppingItem) => shoppingItem.products.map((item) => (Object.assign(Object.assign({}, item), { shoppingName: shoppingItem.name }))));
}
exports.formatReportData = formatReportData;
//# sourceMappingURL=helpers.js.map