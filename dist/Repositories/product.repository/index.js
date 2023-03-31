"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../dataBase/db");
async function create(name, description, category, price, image) {
    return db_1.productCollection.insertOne({ name, description, category, price, image });
}
async function find() {
    return db_1.productCollection.find().toArray();
}
const productRepository = {
    create,
    find
};
exports.default = productRepository;
//# sourceMappingURL=index.js.map