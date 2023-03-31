"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCollection = exports.sessionsCollection = exports.userCollection = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoClient = new mongodb_1.MongoClient(`${process.env.MONGO_URI}`);
(async () => {
    try {
        await mongoClient.connect();
        console.log("MongoDb Conectado");
    }
    catch (err) {
        console.log(err);
    }
});
const db = mongoClient.db("myPharma");
exports.userCollection = db.collection("users");
exports.sessionsCollection = db.collection("sessions");
exports.productCollection = db.collection("products");
//# sourceMappingURL=db.js.map