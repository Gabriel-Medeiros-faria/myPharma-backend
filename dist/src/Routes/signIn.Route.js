"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signIn_Controller_1 = require("../Controllers/signIn.Controller");
const Auth_middleware_1 = require("../Middleware/Auth.middleware");
const signInValidation_middleware_1 = require("../Middleware/signInValidation.middleware");
const signInRouter = (0, express_1.Router)();
signInRouter.post("/", signInValidation_middleware_1.SignInMiddleware, signIn_Controller_1.signIn)
    .delete("/", Auth_middleware_1.AuthMiddleware, signIn_Controller_1.deleteSession);
exports.default = signInRouter;
//# sourceMappingURL=signIn.Route.js.map