"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = require("../../dataBase/db");
async function find() {
    return db_1.productCollection.find().toArray();
}
async function findOne(id) {
    return db_1.productCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
}
const productRepository = {
    find,
    findOne
};
exports.default = productRepository;
//# sourceMappingURL=index.js.map