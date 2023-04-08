"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_repository_1 = __importDefault(require("../../Repositories/cart-repository"));
async function postProductToCart(id, name, price, image, amount, userId) {
    const productsToCart = await cart_repository_1.default.getProduct(userId.toString());
    const product = productsToCart.find((prod) => prod.name === name);
    if (product) {
        await cart_repository_1.default.updateProduct(product.productId, amount + product.amount);
    }
    else {
        await cart_repository_1.default.create(id, name, price, image, amount, userId);
    }
}
async function getProductsToCart(userId) {
    const products = await cart_repository_1.default.getProduct(userId);
    return products;
}
async function deleteProductToCart(id) {
    await cart_repository_1.default.deleteProduct(id);
    return true;
}
const cartService = {
    postProductToCart,
    getProductsToCart,
    deleteProductToCart,
};
exports.default = cartService;
//# sourceMappingURL=index.js.map