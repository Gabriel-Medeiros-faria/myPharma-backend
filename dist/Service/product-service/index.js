"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = __importDefault(require("../../Repositories/product.repository"));
async function createProduct(name, description, category, price, image) {
    await product_repository_1.default.create(name, description, category, price, image);
}
async function findProducts() {
    const products = await product_repository_1.default.find();
    return products;
}
async function findOneProduct(id) {
    const product = await product_repository_1.default.findOne(id);
    if (!product)
        throw { name: 'Produto não encontrado!' };
    return product;
}
const productService = {
    createProduct,
    findProducts,
    findOneProduct
};
exports.default = productService;
//# sourceMappingURL=index.js.map