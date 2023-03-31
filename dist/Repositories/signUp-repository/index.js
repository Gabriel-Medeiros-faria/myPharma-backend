"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../dataBase/db");
async function create(hashPassword, email, name) {
    return db_1.userCollection.insertOne({ password: hashPassword, email, name });
}
async function findOne(email) {
    return db_1.userCollection.findOne({ email: email });
}
const signUpRepository = {
    create,
    findOne
};
exports.default = signUpRepository;
//# sourceMappingURL=index.js.map