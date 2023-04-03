"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductToCart = exports.getProductsToCart = exports.addProductToCart = void 0;
const cart_service_1 = __importDefault(require("../Service/cart-service"));
async function addProductToCart(req, res) {
    const { id, name, price, image, amount } = req.body;
    try {
        await cart_service_1.default.postProductToCart(id, name, price, image, amount);
        res.sendStatus(201);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.addProductToCart = addProductToCart;
async function getProductsToCart(req, res) {
    try {
        const products = await cart_service_1.default.getProductsToCart();
        res.status(200).send(products);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.getProductsToCart = getProductsToCart;
async function deleteProductToCart(req, res) {
    const { id } = req.params;
    try {
        await cart_service_1.default.deleteProductToCart(id);
        res.sendStatus(200);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.deleteProductToCart = deleteProductToCart;
//# sourceMappingURL=cart.Controller.js.map