"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = require("../../dataBase/db");
async function create(id, name, price, image, amount, userId) {
    return db_1.cartCollection.insertOne({
        productId: new mongodb_1.ObjectId(id),
        name,
        price,
        image,
        amount,
        userId
    });
}
async function getProduct(userId) {
    return db_1.cartCollection.find({ userId }).toArray();
}
async function deleteProduct(id) {
    return db_1.cartCollection.deleteOne({ productId: new mongodb_1.ObjectId(id) });
}
async function updateProduct(productId, amount) {
    return db_1.cartCollection.updateOne({ productId }, { $set: { amount } });
}
const cartRepository = {
    create,
    getProduct,
    deleteProduct,
    updateProduct
};
exports.default = cartRepository;
//# sourceMappingURL=index.js.map