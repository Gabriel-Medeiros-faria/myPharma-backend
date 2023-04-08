"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signUp_service_1 = __importDefault(require("Service/signUp-service"));
const signIn_service_1 = __importDefault(require("Service/signIn-service"));
const helpers_1 = require("../helpers");
beforeEach(async () => {
    await (0, helpers_1.cleanDb)();
});
describe("SigIn user", () => {
    it("Delete session", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        await signUp_service_1.default.signUp(user.password, user.email, user.name);
        const respSignIn = await signIn_service_1.default.signIn(user.email, user.password);
        const respDelete = await signIn_service_1.default.deleteSession(respSignIn.token);
        expect(respDelete).toBe(true);
    });
    it("error when logging in", async () => {
        const user = {
            password: "12345",
            email: "gabriel13@email.com",
            name: "Gabriel",
        };
        await signUp_service_1.default.signUp(user.password, user.email, user.name);
        await signIn_service_1.default.signIn(user.email, user.password);
        const respDelete = await signIn_service_1.default.deleteSession("fasdfasdfasdfasdf");
        expect(respDelete).toBe(false);
    });
});
//# sourceMappingURL=signInService.test.js.map