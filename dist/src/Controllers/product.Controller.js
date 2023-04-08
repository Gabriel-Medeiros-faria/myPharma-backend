"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneProduct = exports.findProducts = void 0;
const product_service_1 = __importDefault(require("../Service/product-service"));
async function findProducts(req, res) {
    try {
        const products = await product_service_1.default.findProducts();
        res.status(200).send(products);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.findProducts = findProducts;
async function findOneProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await product_service_1.default.findOneProduct(id);
        res.send(product);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.findOneProduct = findOneProduct;
//# sourceMappingURL=product.Controller.js.map