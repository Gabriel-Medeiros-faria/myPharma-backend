"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const signIn_service_1 = __importDefault(require("../Service/signIn-service"));
async function signIn(req, res) {
    const { email, password } = req.body;
    try {
        const userAndToken = await signIn_service_1.default.signIn(email, password);
        res.status(200).send(userAndToken);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.signIn = signIn;
//# sourceMappingURL=signIn.Controller.js.map