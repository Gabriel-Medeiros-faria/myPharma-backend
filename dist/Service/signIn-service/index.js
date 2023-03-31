"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signIn_repository_1 = __importDefault(require("../../Repositories/signIn-repository"));
const signUp_repository_1 = __importDefault(require("../../Repositories/signUp-repository"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function signIn(email, password) {
    const user = await signUp_repository_1.default.findOne(email);
    if ((user === null || user === void 0 ? void 0 : user.password) === null || !user)
        throw { name: "Usuário não existe!" };
    const senhaHash = await bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
    if (!senhaHash)
        throw { name: "Senha incorreta!" };
    const session = await signIn_repository_1.default.findOne(user._id);
    if (!session) {
        const token = jsonwebtoken_1.default.sign({ user }, `${process.env.JWT_SECRET}`);
        await signIn_repository_1.default.createSession(user, token);
        return {
            id: user._id,
            name: user.name,
            token: token,
            email: user.email
        };
    }
    else {
        await signIn_repository_1.default.deleteSession(session.token);
        const token = jsonwebtoken_1.default.sign({ user }, `${process.env.JWT_SECRET}`);
        await signIn_repository_1.default.createSession(user, token);
        return {
            id: user._id,
            name: user.name,
            token: token,
            email: user.email
        };
    }
}
const signInService = {
    signIn
};
exports.default = signInService;
//# sourceMappingURL=index.js.map