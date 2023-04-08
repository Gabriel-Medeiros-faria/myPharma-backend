"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanDb = void 0;
const db_1 = require("dataBase/db");
async function cleanDb() {
    await db_1.userCollection.deleteMany({});
    await db_1.sessionsCollection.deleteMany({});
    await db_1.productCollection.deleteMany({});
    await db_1.cartCollection.deleteMany({});
}
exports.cleanDb = cleanDb;
//# sourceMappingURL=helpers.js.map