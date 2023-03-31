"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_Controller_1 = require("../Controllers/product.Controller");
const productRouter = (0, express_1.Router)();
productRouter.post('/', product_Controller_1.createProduct);
productRouter.get('/', product_Controller_1.findProducts);
exports.default = productRouter;
//# sourceMappingURL=product.Route.js.map