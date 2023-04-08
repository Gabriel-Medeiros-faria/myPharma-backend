"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUp_Controller_1 = require("../Controllers/signUp.Controller");
const signUpValidation_middleware_1 = require("../Middleware/signUpValidation.middleware");
const signUpRouter = (0, express_1.Router)();
signUpRouter.post('/', signUpValidation_middleware_1.SignUpMiddleware, signUp_Controller_1.signUp);
exports.default = signUpRouter;
//# sourceMappingURL=signUp.Route.js.map