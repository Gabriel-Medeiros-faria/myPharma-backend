"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_repository_1 = __importDefault(require("../../Repositories/cart-repository"));
async function postProductToCart(id, name, price, image, amount) {
    await cart_repository_1.default.create(id, name, price, image, amount);
}
async function getProductsToCart() {
    const products = await cart_repository_1.default.getProduct();
    return products;
}
async function deleteProductToCart(id) {
    await cart_repository_1.default.deleteProduct(id);
}
const cartService = {
    postProductToCart,
    getProductsToCart,
    deleteProductToCart
};
exports.default = cartService;
//# sourceMappingURL=index.js.map