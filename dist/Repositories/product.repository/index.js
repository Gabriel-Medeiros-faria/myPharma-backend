"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = require("../../dataBase/db");
async function create(name, description, category, price, image) {
    return db_1.productCollection.insertOne({ name, description, category, price, image });
}
async function find() {
    return db_1.productCollection.find().toArray();
}
async function findOne(id) {
    return db_1.productCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
}
const productRepository = {
    create,
    find,
    findOne
};
exports.default = productRepository;
//# sourceMappingURL=index.js.map