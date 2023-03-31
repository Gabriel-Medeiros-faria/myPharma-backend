"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUp_Controller_1 = require("../Controllers/signUp.Controller");
const signUpRouter = (0, express_1.Router)();
signUpRouter.post('/', signUp_Controller_1.signUp);
exports.default = signUpRouter;
//# sourceMappingURL=signUp.Route.js.map