"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = require("../../dataBase/db");
async function create(id, name, price, image, amount) {
    return db_1.cartCollection.insertOne({
        productId: new mongodb_1.ObjectId(id),
        name,
        price,
        image,
        amount,
    });
}
async function getProduct() {
    return db_1.cartCollection.find({}).toArray();
}
async function deleteProduct(id) {
    return db_1.cartCollection.deleteOne({ productId: new mongodb_1.ObjectId(id) });
}
const cartRepository = {
    create,
    getProduct,
    deleteProduct
};
exports.default = cartRepository;
//# sourceMappingURL=index.js.map