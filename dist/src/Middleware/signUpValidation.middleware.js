"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpMiddleware = void 0;
const signUp_model_1 = require("../Models/signUp.model");
async function SignUpMiddleware(req, res, next) {
    try {
        const validation = signUp_model_1.signUpSchema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            const erros = validation.error.details.map((detail) => detail.message);
            res.status(400).send(erros);
            return;
        }
        next();
    }
    catch (err) {
        res.status(500).send(err);
    }
}
exports.SignUpMiddleware = SignUpMiddleware;
//# sourceMappingURL=signUpValidation.middleware.js.map