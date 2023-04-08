"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signUp_service_1 = __importDefault(require("Service/signUp-service"));
const helpers_1 = require("../helpers");
beforeEach(async () => {
    await (0, helpers_1.cleanDb)();
});
describe("Create user", () => {
    it("valid user", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        const resp = await signUp_service_1.default.signUp(user.password, user.email, user.name);
        expect(resp).toBe(true);
    });
    it("invalid user", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        await signUp_service_1.default.signUp(user.password, user.email, user.name);
        const resp = await signUp_service_1.default.signUp(user.password, user.email, user.name);
        expect(resp).toBe(false);
    });
});
//# sourceMappingURL=signUpService.test.js.map