"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../dataBase/db");
async function createSession(user, token) {
    return db_1.sessionsCollection.insertOne({ userId: user._id, email: user.email, name: user.name, token });
}
async function findOne(userId) {
    return db_1.sessionsCollection.findOne({ userId });
}
async function deleteSession(token) {
    return db_1.sessionsCollection.deleteOne({ token: token });
}
const signInRepository = {
    createSession,
    findOne,
    deleteSession
};
exports.default = signInRepository;
//# sourceMappingURL=index.js.map