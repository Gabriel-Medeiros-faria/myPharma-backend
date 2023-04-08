"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.signUpSchema = joi_1.default.object({
    password: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    name: joi_1.default.string().required()
});
//# sourceMappingURL=signUp.model.js.map