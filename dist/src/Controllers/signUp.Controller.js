"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const signUp_service_1 = __importDefault(require("../Service/signUp-service"));
async function signUp(req, res) {
    const { password, email, name } = req.body;
    try {
        await signUp_service_1.default.signUp(password, email, name);
        res.sendStatus(201);
    }
    catch (error) {
        res.status(403).send(error);
    }
}
exports.signUp = signUp;
//# sourceMappingURL=signUp.Controller.js.map