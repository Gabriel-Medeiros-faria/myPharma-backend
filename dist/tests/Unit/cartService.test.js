"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signUp_service_1 = __importDefault(require("Service/signUp-service"));
const signIn_service_1 = __importDefault(require("Service/signIn-service"));
const helpers_1 = require("../helpers");
const cart_service_1 = __importDefault(require("Service/cart-service"));
const mongodb_1 = require("mongodb");
beforeEach(async () => {
    await (0, helpers_1.cleanDb)();
});
describe("Validate cart", () => {
    it("Validade product add to cart", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        await signUp_service_1.default.signUp(user.password, user.email, user.name);
        const respSignIn = await signIn_service_1.default.signIn(user.email, user.password);
        const product = {
            id: new mongodb_1.ObjectId("507f191e810c19729de860ea"),
            name: "Dipirona",
            price: 10,
            image: "imagem do dipirona",
            amount: 10,
            userId: respSignIn.id,
        };
        const resp = await cart_service_1.default.postProductToCart(product.id.toString(), product.name, product.price, product.image, product.amount, product.userId);
        expect(resp).toBe(true);
    });
    it("Validade product update to cart", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        await signUp_service_1.default.signUp(user.password, user.email, user.name);
        const respSignIn = await signIn_service_1.default.signIn(user.email, user.password);
        const product = {
            id: new mongodb_1.ObjectId("507f191e810c19729de860ea"),
            name: "Dipirona",
            price: 10,
            image: "imagem do dipirona",
            amount: 10,
            userId: respSignIn.id,
        };
        await cart_service_1.default.postProductToCart(product.id.toString(), product.name, product.price, product.image, product.amount, product.userId);
        const resp = await cart_service_1.default.postProductToCart(product.id.toString(), product.name, product.price, product.image, product.amount, product.userId);
        expect(resp).toBe(true);
    });
    it("delete product to cart", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        await signUp_service_1.default.signUp(user.password, user.email, user.name);
        const respSignIn = await signIn_service_1.default.signIn(user.email, user.password);
        const product = {
            id: new mongodb_1.ObjectId("507f191e810c19729de860ea"),
            name: "Dipirona",
            price: 10,
            image: "imagem do dipirona",
            amount: 10,
            userId: respSignIn.id,
        };
        await cart_service_1.default.postProductToCart(product.id.toString(), product.name, product.price, product.image, product.amount, product.userId);
        const respDeleteProduct = await cart_service_1.default.deleteProductToCart(product.id.toString());
        expect(respDeleteProduct).toBe(true);
    });
});
//# sourceMappingURL=cartService.test.js.map