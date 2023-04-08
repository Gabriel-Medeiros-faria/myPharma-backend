"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInMiddleware = void 0;
const signIn_model_1 = require("../Models/signIn.model");
async function SignInMiddleware(req, res, next) {
    try {
        const validation = signIn_model_1.signInSchema.validate(req.body, { abortEarly: false });
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
exports.SignInMiddleware = SignInMiddleware;
//# sourceMappingURL=signInValidation.middleware.js.map