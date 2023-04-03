"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_Controller_1 = require("../Controllers/product.Controller");
const Auth_middleware_1 = require("../Middleware/Auth.middleware");
const productRouter = (0, express_1.Router)();
productRouter
    .all('/*', Auth_middleware_1.AuthMiddleware)
    .post("/", product_Controller_1.createProduct)
    .get("/", product_Controller_1.findProducts)
    .get("/:id", product_Controller_1.findOneProduct);
exports.default = productRouter;
//# sourceMappingURL=product.Route.js.map