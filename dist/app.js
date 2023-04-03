"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const signIn_Route_1 = __importDefault(require("./Routes/signIn.Route"));
const signUp_Route_1 = __importDefault(require("./Routes/signUp.Route"));
const product_Route_1 = __importDefault(require("./Routes/product.Route"));
const cart_Route_1 = __importDefault(require("./Routes/cart.Route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app
    .use(express_1.default.json())
    .use((0, cors_1.default)())
    .use("/auth", signIn_Route_1.default)
    .use("/user", signUp_Route_1.default)
    .use("/products", product_Route_1.default)
    .use("/cart", cart_Route_1.default);
//const port = process.env.PORT || 5000
const port = 5000;
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
//# sourceMappingURL=app.js.map