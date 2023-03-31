"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signIn_Controller_1 = require("../Controllers/signIn.Controller");
const signInRouter = (0, express_1.Router)();
signInRouter.post('/', signIn_Controller_1.signIn);
exports.default = signInRouter;
//# sourceMappingURL=signIn.Route.js.map