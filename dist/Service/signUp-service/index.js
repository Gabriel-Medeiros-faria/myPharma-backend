"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp_repository_1 = __importDefault(require("../../Repositories/signUp-repository"));
async function signUp(password, email, name) {
    const hashPassword = bcrypt_1.default.hashSync(password, 10);
    const user = await signUp_repository_1.default.findOne(email);
    if (user)
        throw { name: "Usuário já existe!" };
    await signUp_repository_1.default.create(hashPassword, email, name);
}
const signUpService = {
    signUp,
};
exports.default = signUpService;
//# sourceMappingURL=index.js.map