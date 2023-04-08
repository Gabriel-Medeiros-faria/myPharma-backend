"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_Controller_1 = require("../Controllers/cart.Controller");
const Auth_middleware_1 = require("../Middleware/Auth.middleware");
const cartRouter = (0, express_1.Router)();
cartRouter
    .all("/*", Auth_middleware_1.AuthMiddleware)
    .post("/", cart_Controller_1.addProductToCart)
    .get("/", cart_Controller_1.getProductsToCart)
    .delete("/:id", cart_Controller_1.deleteProductToCart);
exports.default = cartRouter;
//# sourceMappingURL=cart.Route.js.map